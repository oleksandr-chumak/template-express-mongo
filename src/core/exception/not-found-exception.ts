import { HttpException } from './http-exception';
import { HTTP_EXCEPTION_ERROR, HTTP_EXCEPTION_STATUS } from '../types';

export class NotFoundException extends HttpException {
  constructor(message?: string) {
    const customMessage: string = message || 'Not found';
    super(
      customMessage,
      HTTP_EXCEPTION_ERROR.NOT_FOUND,
      HTTP_EXCEPTION_STATUS.NOT_FOUND
    );
  }
};