import { NextFunction, Request, Response } from 'express';

export type ErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction ) => void;

export type Middleware = (req: Request, res: Response, next: NextFunction) => void;