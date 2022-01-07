import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { createBookCommentDto } from './dto/createBookComment.dto';
import { CommentsModel, CommentDocument } from './schemas/bookComments.schema';

@Injectable()
export class BookCommentsService {
  constructor(
    @InjectModel(CommentsModel.name)
    private readonly BookCommentsModel: Model<CommentDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async findAllBookComments(bookId: string): Promise<CommentDocument[]> {
    try {
      return await this.BookCommentsModel.find({ bookId: bookId }).select(
        '-__v',
      );
    } catch (e) {
      console.log(e);
    }
  }

  public async createBookComment(comment: createBookCommentDto) {
    const newComment = new this.BookCommentsModel(comment);
    try {
      return await newComment.save();
    } catch (e) {
      console.log(e);
    }
  }

  public async updateBookComment(id: string, comment: string) {
    try {
      this.BookCommentsModel.findByIdAndUpdate(id, { comment });
    } catch (e) {
      console.log(e);
    }
  }

  public async deleteBookComment(id: string) {
    try {
      this.BookCommentsModel.findByIdAndRemove(id);
    } catch (e) {
      console.log(e);
    }
  }
}
