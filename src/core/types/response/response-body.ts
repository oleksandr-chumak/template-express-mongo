import { HTTP_EXCEPTION_ERROR, HTTP_EXCEPTION_STATUS } from '../exception';

interface ResponseBody {
  status: string;
  statusCode: number
}

export interface ResponseBodyWithData extends ResponseBody{
  data: unknown;
}

export interface ResponseBodyWithMessage extends ResponseBody{
  data: null;
  message: string;
}

export interface ResponseBodyHttpException {
  status: HTTP_EXCEPTION_STATUS,
  error: HTTP_EXCEPTION_ERROR,
  message: string
}