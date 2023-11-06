import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_CONNECT_URL: string = `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`;

export const MONGODB_CONNECTION_OPTIONS: mongoose.ConnectOptions = {
  dbName: process.env.DATABASE_NAME,
  user: process.env.MONGODB_USERNAME,
  pass: process.env.MONGODB_PASSWORD,
};
