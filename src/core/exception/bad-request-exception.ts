import { HttpException } from './http-exception';
import { HTTP_EXCEPTION_ERROR, HTTP_EXCEPTION_STATUS } from '../types';

export class BadRequestException extends HttpException {
  public constructor(message?: string) {
    const innerMessage: string =
      message || 'The request is missing a required parameter.';

    super(
      innerMessage,
      HTTP_EXCEPTION_ERROR.BAD_REQUEST,
      HTTP_EXCEPTION_STATUS.BAD_REQUEST
    );
  }
}
