import { Options } from 'swagger-jsdoc';

export const swaggerConfig: Options = {
  swaggerDefinition: {
    info: {
      title: 'CRUD-express-template',
      version: '1.0.0',
    },
  },
  apis: ['./**/*.ts'],
};