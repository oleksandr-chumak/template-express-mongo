import {
  FirstElementLessOrEqualSecond,
  Pagination,
  IsStringOrArray,
  Order,
  SortDirection,
  toGteAndLte,
  toInOrToEqual,
  toNumber,
  toNumberArray,
  toOrder,
  toRegExp,
} from '../../../core';
import { IPost } from '../models/post-shema';
import { PostsFilter } from '../types/posts-filter';
import { IsArray, IsIn, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Expose, Transform, TransformFnParams } from 'class-transformer';

export class GetPostsFilter implements PostsFilter {
  @IsOptional()
  @IsStringOrArray()
  @Transform(({ value }: TransformFnParams) => toRegExp(value), {
    groups: ['filter'],
  })
  public title?: string | string[];

  @IsOptional()
  @IsStringOrArray()
  @Transform(({ value }: TransformFnParams) => toRegExp(value), {
    groups: ['filter'],
  })
  public content?: string | string[];

  @IsOptional()
  @IsStringOrArray()
  @Transform(({ value }: TransformFnParams) => toInOrToEqual(value), {
    groups: ['filter'],
  })
  public author?: string | string[];

  @IsOptional()
  @Expose()
  @IsArray()
  @FirstElementLessOrEqualSecond()
  @Transform(({ value }: TransformFnParams) => toNumberArray(value))
  @Transform(({ value }: TransformFnParams) => toGteAndLte(value), { groups: ['filter'] })
  public likes?: number[];
}

export class GetPostsDto extends GetPostsFilter implements Pagination, Order<IPost> {
  // pagination
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @Transform(({ value }: TransformFnParams) => toNumber(value))
  public take: number = 10;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }: TransformFnParams) => toNumber(value))
  public skip: number = 0;

  // order
  @IsOptional()
  @IsString()
  @IsIn([SortDirection.ASC, SortDirection.DESC])
  @Transform(({ value }: TransformFnParams) => toOrder(value), {
    groups: ['order'],
  })
  public title_order?: SortDirection;

  @IsOptional()
  @IsString()
  @IsIn([SortDirection.ASC, SortDirection.DESC])
  @Transform(({ value }: TransformFnParams) => toOrder(value), {
    groups: ['order'],
  })
  public content_order?: SortDirection;

  @IsOptional()
  @IsString()
  @IsIn([SortDirection.ASC, SortDirection.DESC])
  @Transform(({ value }: TransformFnParams) => toOrder(value), {
    groups: ['order'],
  })
  public author_order?: SortDirection;

  @IsOptional()
  @IsString()
  @IsIn([SortDirection.ASC, SortDirection.DESC])
  @Transform(({ value }: TransformFnParams) => toOrder(value), {
    groups: ['order'],
  })
  public likes_order?: SortDirection;
}
