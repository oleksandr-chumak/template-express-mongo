export class ResponseStatusMessage {
  public static readonly 200: string = 'Success';
  public static readonly 201: string = 'Created';
  public static readonly 202: string = 'Accepted';
  public static readonly 203: string = 'No content';
  public static readonly 204: string = 'Non-Authoritative Information';
  public static readonly 205: string = 'Reset Content';
}

export type ResponseStatusCode = keyof typeof ResponseStatusMessage;
