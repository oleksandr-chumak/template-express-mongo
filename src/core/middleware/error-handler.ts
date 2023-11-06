import { NextFunction, Request, Response } from 'express';
import {
  ErrorMiddleware,
  HttpExceptionInterface,
  ResponseBodyHttpException,
} from '../types';
import { HttpException, InternalServerErrorException } from '../exception';

export const errorHandler: ErrorMiddleware = function (
  err: Error | HttpExceptionInterface,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (!err){
    next();
  }

  let responseBodyHttpException: ResponseBodyHttpException;
  if (err instanceof HttpException) {
    const { message, status, error } = err;
    responseBodyHttpException = {status, error, message };
  } else {
    const { message, status, error } = new InternalServerErrorException(
      err.message
    );
    responseBodyHttpException = { status, error, message };
  }
  res.status(responseBodyHttpException.status).send(responseBodyHttpException);

  next();
};
