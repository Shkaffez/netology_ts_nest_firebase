import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { BookCommentsService } from './book-comments.service';
import { createBookCommentDto } from './dto/createBookComment.dto';

@WebSocketGateway()
export class CommentsGateway {
  constructor(private bookCommentService: BookCommentsService) {}
  @WebSocketServer()
  server;

  @SubscribeMessage('getAllComments')
  async getAllComments(@MessageBody() bookId: string): Promise<void> {
    const comments = await this.bookCommentService.findAllBookComments(bookId);
    this.server.emit('getAllComments', comments);
  }

  @SubscribeMessage('addComment')
  async addComment(@MessageBody() data: createBookCommentDto): Promise<void> {
    await this.bookCommentService.createBookComment(data);
    this.server.emit('addComment', data.comment);
  }
}
