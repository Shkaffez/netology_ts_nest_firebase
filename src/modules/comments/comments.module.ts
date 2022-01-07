import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookCommentsService } from './book-comments.service';
import { CommentsGateway } from './comments.gateway';
import {
  BookCommentsSchema,
  CommentsModel,
} from './schemas/bookComments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentsModel.name, schema: BookCommentsSchema },
    ]),
  ],
  providers: [BookCommentsService, CommentsGateway],
  exports: [BookCommentsService],
})
export class CommentsModule {}
