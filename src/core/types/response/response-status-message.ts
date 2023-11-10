export class ResponseStatusMessage {
  public static readonly 200: string = 'Success';
  public static readonly 201: string = 'Created';
  public static readonly 202: string = 'Accepted';
  public static readonly 203: string = 'No content';
  public static readonly 204: string = 'Non-Authoritative Information';
  public static readonly 205: string = 'Reset Content';
}

export enum RESPONSE_STATUS{
  SUCCESS=200,
  CREATED=201,
  ACCEPTED=202,
  NO_CONTENT=203,
  NON_AUTHORITATIVE_INFORMATION =204,
  RESET_CONTENT=205,
}

export type ResponseStatusCode = keyof typeof ResponseStatusMessage;
