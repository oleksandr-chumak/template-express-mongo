import { HTTP_EXCEPTION_ERROR } from './http-exception-error';
import { HTTP_EXCEPTION_STATUS } from './http-exception-status';

export interface HttpExceptionInterface{
  message: string;
  error: HTTP_EXCEPTION_ERROR;
  status: HTTP_EXCEPTION_STATUS;
}