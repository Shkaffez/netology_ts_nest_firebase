import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from '../books-service/books.service';
import { BookDocument } from '../schemas/book.schema';
import { createBookDto } from '../dto/createBook.dto';
import { IdValidationPipe } from 'src/common/pipes/id.pipe';
import { BookValidationPipe } from 'src/common/pipes/createBook.pipe';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth-guard';

@Controller('books')
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  public findAll(): Promise<BookDocument[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  public findOne(
    @Param('id', new IdValidationPipe()) id: string,
  ): Promise<void | BookDocument> {
    return this.bookService.findOne(id);
  }

  @Post()
  @UsePipes(new BookValidationPipe())
  public create(@Body() book: createBookDto): Promise<BookDocument> {
    this.bookService.create(book);
    return;
  }

  @Put(':id')
  @UsePipes(new BookValidationPipe())
  public update(
    @Body() book: createBookDto,
    @Param('id', new IdValidationPipe()) id: string,
  ): Promise<void | BookDocument> {
    this.bookService.update(id, book);
    return;
  }

  @Delete(':id')
  public delete(
    @Param('id', new IdValidationPipe()) id: string,
  ): Promise<void | BookDocument> {
    this.bookService.delete(id);
    return;
  }
}
