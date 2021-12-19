import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
} from '@nestjs/common';
import { BooksService } from '../books-service/books.service';
import { BookDocument } from '../schemas/book.schema';
import { createBookDto } from '../../createBook.dto';
import { MyValidationPipe } from 'src/validation.pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  public findAll(): Promise<BookDocument[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', new MyValidationPipe()) id: string): Promise<void | BookDocument> {
    return this.bookService.findOne(id);
  }

  @Post()
  public create(@Body() book: createBookDto): Promise<BookDocument> {
    this.bookService.create(book);
    return;
  }

  @Put(':id')
  public update(
    @Body() book: createBookDto,
    @Param('id', new MyValidationPipe()) id: string,
  ): Promise<void | BookDocument> {
    this.bookService.update(id, book);
    return;
  }

  @Delete(':id')
  public delete(@Param('id', new MyValidationPipe()) id: string): Promise<void | BookDocument> {
    this.bookService.delete(id);
    return;
  }
}
