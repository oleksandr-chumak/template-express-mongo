import { DataAndTotalCount, Pagination } from '../types';
import { Document, UpdateWriteOpResult } from 'mongoose';
import { PostDocument } from '../../modules/post/models/post-shema';
import { DeleteResult } from 'mongodb';

export abstract class CRUDServiceProcessor<T, K extends T & Document >{
  public abstract index(pagination: Pagination, filter: Partial<T>, order: Partial<T>): Promise<DataAndTotalCount<PostDocument[]>>;
  public abstract store(data:Partial<T>): Promise<K>;
  public abstract show(id: string): Promise<K | null>;
  public abstract update(updateData: Partial<PostDocument>): Promise<UpdateWriteOpResult>;
  public abstract destroy(id: string): Promise<DeleteResult>;
}