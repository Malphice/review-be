import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = HydratedDocument<Post>;

export enum ReviewStatus {
  OPEN = 'open',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Schema()
export class Post {
  @Prop({ type: Boolean, required: true })
  public: boolean;

  @Prop({ type: String, default: ' ', required: false })
  caption?: string;

  @Prop({ type: String, required: true })
  createdBy: string;

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;

  @Prop({ type: Date, required: false })
  scheduledAt?: Date;

  @Prop({ type: [String], required: true })
  media: string[];

  @Prop({ type: [String], required: false })
  categories?: string[];

  @Prop({ type: String, enum: ReviewStatus, default: ReviewStatus.OPEN })
  reviewStatus: ReviewStatus;
}

export const PostSchema = SchemaFactory.createForClass(Post);
