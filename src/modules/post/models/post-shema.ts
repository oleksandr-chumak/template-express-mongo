import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPost {
  title: string;
  content: string;
  author: string;
  likes: number;
}

export interface PostModel extends Model<PostDocument> {}

export interface PostDocument extends Document, IPost {}

const PostSchema: Schema<PostDocument, PostModel> = new Schema<PostDocument, PostModel>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  { collection: 'post', timestamps: true }
);

export default mongoose.model<PostDocument, PostModel>('Post', PostSchema);

