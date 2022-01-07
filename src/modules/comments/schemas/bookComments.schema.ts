import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = CommentsModel & Document;

@Schema()
export class CommentsModel {
  @Prop({ required: true })
  public bookId: string;

  @Prop({ required: true })
  public comment: string;
}

export const BookCommentsSchema = SchemaFactory.createForClass(CommentsModel);
