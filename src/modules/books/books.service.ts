import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { createBookDto } from './dto/createBook.dto';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import * as admin from 'firebase-admin';

const db = admin.database();

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async findAll(): Promise<BookDocument[]> {
    try {
      const books = (await db.ref('books').once('value')).val();
      return books;
    } catch (e) {
      console.log(e);
    }
  }

  public async create(book: createBookDto): Promise<BookDocument> {
    try {
      await db.ref('books').push(book);
      return;
    } catch (e) {
      console.error(e);
    }
  }

  public async findOne(id: string): Promise<void | BookDocument> {
    try {
      const book = await db.ref('books').child(id).once('value');
      return book as unknown as BookDocument;
    } catch (e) {
      console.error(e);
    }
  }

  public async delete(id: string): Promise<void | BookDocument> {
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
