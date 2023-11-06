import { HttpException } from './http-exception';
import { HTTP_EXCEPTION_ERROR, HTTP_EXCEPTION_STATUS } from '../types';

export class InternalServerErrorException extends HttpException {
  public constructor(message?: string) {
    const innerMessage: string = message || 'Internal Server Error';
    super(
      innerMessage,
      HTTP_EXCEPTION_ERROR.INTERNAL_SERVER_ERROR,
      HTTP_EXCEPTION_STATUS.INTERNAL_SERVER_ERROR
    );
  }
}
