import { NextFunction, Request, Response, Router } from 'express';

export const postRouter: Router = Router();

postRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('POSTS');
  }catch (e){
    next(e);
  }
});
