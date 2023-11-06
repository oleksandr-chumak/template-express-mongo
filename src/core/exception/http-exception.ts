import {
  HTTP_EXCEPTION_ERROR,
  HTTP_EXCEPTION_STATUS,
  HttpExceptionInterface,
} from '../types';

export class HttpException extends Error implements HttpExceptionInterface {
  public message: string;
  public status: HTTP_EXCEPTION_STATUS;
  public error: HTTP_EXCEPTION_ERROR;

  public constructor(
    message: string,
    error: HTTP_EXCEPTION_ERROR,
    status: HTTP_EXCEPTION_STATUS
  ) {
    super(message);
    this.message = message;
    this.error = error;
    this.status = status;
  }
}
