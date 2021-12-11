import { Injectable } from '@nestjs/common';
import { Book } from '../book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  create(book: Book): void {
    this.books.push(book);
  }

  findOne(id: string): Book {
    return this.books.find((el) => el.id === id);
  }

  delete(id: string): void {
    this.books.splice(
      this.books.findIndex((el) => el.id === id),
      1,
    );
  }
}
