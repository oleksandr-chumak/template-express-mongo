import { IPost } from '../models/post-shema';
import { TransformToUnionArray } from '../../../core';

export type PostsFilter = Partial<TransformToUnionArray<IPost>>;
