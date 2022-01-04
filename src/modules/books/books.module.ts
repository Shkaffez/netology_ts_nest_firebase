import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
