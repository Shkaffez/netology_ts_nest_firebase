import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { createBookDto } from './dto/createBook.dto';
// import { Connection } from 'mongoose';
// import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly BookModel: Model<BookDocument>, //   @InjectConnection() private connection: Connection,
  ) {}

  public async findAll(): Promise<BookDocument[]> {
    try {
      const books = await this.BookModel.find();
      return books;
    } catch (e) {
      console.log(e);
    }
  }

  public async create(book: createBookDto): Promise<BookDocument> {
    const newbook = new this.BookModel(book);
    try {
      return await newbook.save();
    } catch (e) {
      console.error(e);
    }
  }

  public async findOne(id: string): Promise<BookDocument> {
    try {
      const book = await this.BookModel.findById(id);
      return book;
    } catch (e) {
      console.error(e);
    }
  }

  public async delete(id: string): Promise<BookDocument> {
    try {
      return await this.BookModel.findOneAndRemove({ _id: id });
    } catch (e) {
      console.error(e);
    }
  }

  public async update(
    id: string,
    book: createBookDto,
  ): Promise<void | BookDocument> {
    try {
      return await this.BookModel.findByIdAndUpdate({ _id: id }, book);
    } catch (e) {
      console.error(e);
    }
  }
}
