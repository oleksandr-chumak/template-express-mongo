import {
  Middleware,
  ResponseBodyWithData,
  ResponseBodyWithMessage,
  ResponseStatusCode,
  ResponseStatusMessage,
} from '../types';
import { NextFunction, Request, Response, Send } from 'express';

export const responseTransformer: Middleware = function (
  _: Request,
  res: Response,
  next: NextFunction
): void {
  const oldSend: Send = res.send;
  res.send = function (body: unknown): Response {
    res.setHeader('Content-Type', 'application/json');

    // parse body
    let parsedBody: unknown = body;

    if (typeof body === 'string') {
      try {
        parsedBody = JSON.parse(body);
      } catch (e) {}
    }

    // check is response httpError
    if (
      parsedBody !== null &&
      typeof parsedBody === 'object' &&
      'error' in parsedBody
    ) {
      return oldSend.call(this, body);
    }

    const status: string =
      ResponseStatusMessage[res.statusCode.toString() as ResponseStatusCode] as string;

    const responseBody: ResponseBodyWithMessage | ResponseBodyWithData =
      typeof parsedBody === 'string'
        ? { status, statusCode: res.statusCode, data: null, message: parsedBody }
        : { status, statusCode: res.statusCode, data: parsedBody };

    return oldSend.call(this, JSON.stringify(responseBody));
  };

  next();
};
