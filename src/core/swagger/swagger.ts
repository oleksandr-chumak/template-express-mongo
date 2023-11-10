import {Express} from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerConfig } from '../config';

const spec: NonNullable<unknown> = swaggerJsdoc(swaggerConfig);

export function swagger(app: Express): void{
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}