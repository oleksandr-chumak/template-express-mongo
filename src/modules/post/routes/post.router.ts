import { Router } from 'express';
import { PostController } from '../controllers';
import { PostService } from '../services';

export const postRouter: Router = Router();
const postService: PostService = new PostService();
const postController: PostController = new PostController(postService);

postRouter.get('/', postController.index);

postRouter.post('/', postController.store);

postRouter.get('/:id', postController.show);

postRouter.put('/', postController.update);

postRouter.patch('/', postController.update);

postRouter.delete('/:id', postController.destroy);
