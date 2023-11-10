import { CRUDServiceProcessor } from '../../../core/abstract/CRUD-service-processor';
import Post, { IPost, PostDocument } from '../models/post-shema';
import { DataAndTotalCount, Pagination } from '../../../core';
import { UpdateWriteOpResult } from 'mongoose';
import { DeleteResult } from 'mongodb';

export class PostService implements CRUDServiceProcessor<IPost, PostDocument> {
  public async index(
    pagination: Pagination,
    filter: Partial<IPost>,
    order: Partial<IPost>
  ): Promise<DataAndTotalCount<PostDocument[]>> {
    const [totalCount, posts] = await Promise.all([
      Post.countDocuments({ ...filter }),
      Post.find(
        { ...filter },
        {},
        {
          limit: pagination.take,
          skip: pagination.skip,
          sort: { ...order },
        }
      ),
    ]);
    return {
      data: posts,
      totalCount: totalCount
    };
  }

  public async show(id: string): Promise<PostDocument | null> {
    return Post.findOne({ _id: id });
  }

  public async store(data: Partial<IPost>): Promise<PostDocument> {
    return Post.create({ ...data, likes: 0 });
  }

  public async update(data: Partial<PostDocument>): Promise<UpdateWriteOpResult> {
    const { id, ...updateData } = data;
    return Post.updateOne({ _id: id }, { ...updateData });
  }

  public async destroy(id: string): Promise<DeleteResult> {
    return Post.deleteOne({ _id: id });
  }
}
