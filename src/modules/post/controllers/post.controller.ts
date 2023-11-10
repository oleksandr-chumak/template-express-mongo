import { CRUDControllerProcessor } from '../../../core/abstract/CRUD-controller-processor';
import { NextFunction, Request, Response } from 'express';
import { CRUDServiceProcessor } from '../../../core/abstract/CRUD-service-processor';
import { IPost, PostDocument } from '../models/post-shema';
import { CreatePostDto, DeletePostDto, GetPostDto, GetPostsDto } from '../dto';
import {
  clearEmptyProperties,
  clearEmptyPropertiesForPagination,
  DataAndTotalCount,
  RESPONSE_STATUS,
  SearchData,
  transformToClassAndValidate,
} from '../../../core';
import { instanceToInstance } from 'class-transformer';
import { UpdatePostDto } from '../dto/update-post.dto';
import { UpdateWriteOpResult } from 'mongoose';
import { NotFoundException } from '../../../core/exception/not-found-exception';
import { DeleteResult } from 'mongodb';

export class PostController implements CRUDControllerProcessor {
  public constructor(
    private readonly postService: CRUDServiceProcessor<IPost, PostDocument>
  ) {
    this.init.call(this);
  }

  public async index(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedQuery: GetPostsDto = await transformToClassAndValidate(
        GetPostsDto,
        req.query
      );

      const newInstance: GetPostsDto = instanceToInstance(validatedQuery, {
        groups: ['filter', 'order'],
      });

      const { pagination, filter, order }: SearchData<IPost> =
        clearEmptyPropertiesForPagination<GetPostsDto, IPost>(
          newInstance,
          new GetPostsDto()
        );

      const { data, totalCount }: DataAndTotalCount<PostDocument[]> =
        await this.postService.index(pagination, filter, order);

      res.status(RESPONSE_STATUS.SUCCESS).send({ posts: data, totalCount });
    } catch (e) {
      next(e);
    }
  }

  public async show(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedParams: GetPostDto = await transformToClassAndValidate(
        GetPostDto,
        req.params
      );

      const post: PostDocument | null = await this.postService.show(validatedParams.id);

      if (post === null) {
        throw new NotFoundException(`Post with id ${validatedParams.id} not found`);
      }

      res.status(RESPONSE_STATUS.SUCCESS).send(post);
    } catch (e) {
      next(e);
    }
  }

  public async store(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedBody: CreatePostDto = await transformToClassAndValidate(
        CreatePostDto,
        req.body
      );

      await this.postService.store(
        clearEmptyProperties(validatedBody, new CreatePostDto())
      );

      res.status(RESPONSE_STATUS.CREATED).send('Post successfully created');
    } catch (e) {
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedBody: UpdatePostDto = await transformToClassAndValidate(
        UpdatePostDto,
        req.body
      );

      const { matchedCount }: UpdateWriteOpResult = await this.postService.update(
        clearEmptyProperties(validatedBody, new UpdatePostDto())
      );

      if (matchedCount === 0) {
        throw new NotFoundException(`Post with id ${validatedBody.id} not found`);
      }

      res
        .status(RESPONSE_STATUS.SUCCESS)
        .send(`Post with id ${validatedBody.id} successfully updated`);
    } catch (e) {
      next(e);
    }
  }

  public async destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedParams: DeletePostDto = await transformToClassAndValidate(
        DeletePostDto,
        req.params
      );

      const { deletedCount }: DeleteResult = await this.postService.destroy(
        validatedParams.id
      );

      if (deletedCount === 0) {
        throw new NotFoundException(`Post with id ${validatedParams.id} not found`);
      }

      res
        .status(RESPONSE_STATUS.SUCCESS)
        .send(`Post with id ${validatedParams.id} was successfully deleted`);
    } catch (e) {
      next(e);
    }
  }

  private init(): void {
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }
}
