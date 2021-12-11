import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from '../books-service/books.service';
import { Book } from '../book.interface';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.bookService.findAll();
  }

  @Post()
  create(@Body() book: Book): void {
    this.bookService.create(book);
  }

  @Get(':id')
  findOne(@Param() id: string): Book {
    return this.bookService.findOne(id);
  }

  @Delete(':id')
  delete(@Param() id: string): void {
    this.bookService.delete(id);
  }
}
