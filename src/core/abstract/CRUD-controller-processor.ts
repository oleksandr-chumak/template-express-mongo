import {Request,Response, NextFunction} from 'express';

export abstract class CRUDControllerProcessor{
  public abstract index(req: Request, res: Response, next: NextFunction): Promise<void>;
  public abstract store(req: Request, res: Response, next: NextFunction): Promise<void>;
  public abstract show(req: Request, res: Response, next: NextFunction): Promise<void>;
  public abstract update(req: Request, res: Response, next: NextFunction): Promise<void>;
  public abstract destroy(req: Request, res: Response, next: NextFunction): Promise<void>;
}