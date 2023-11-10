import express, { Express} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {
  MONGODB_CONNECT_URL,
  MONGODB_CONNECTION_OPTIONS,
  errorHandler,
  responseTransformer,
  swagger
} from './core';

import { postRouter } from './modules';

dotenv.config();

const app: Express = express();


swagger(app);
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(responseTransformer);

app.use('/post', postRouter);

app.use(errorHandler);

async function connectToMongoDB(): Promise<void> {
  const connection: mongoose.Connection = mongoose.connection;

  connection.on('error', (error: unknown) => {
    console.error('MongoDB connection error:', error);
  });

  connection.once('open', () => {
    console.log('Connected to the MongoDB database');
  });

  try {
    await mongoose.connect(MONGODB_CONNECT_URL, MONGODB_CONNECTION_OPTIONS);
  } catch (e) {
    console.log(e);
  }
}

function connectToServer(): void {
  const port: number = Number(process.env.PORT);
  app.listen(port, () => {
    console.log(`App listened on http://localhost:${8000}`);
  });
}

async function bootstrap(): Promise<void> {
  await connectToMongoDB();
  connectToServer();
}

bootstrap();
