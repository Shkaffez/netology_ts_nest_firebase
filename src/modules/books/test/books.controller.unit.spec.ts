import { Test } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { Book } from '../schemas/book.schema';
import { bookStub } from './stubs/book.stub';

jest.mock('../books.service');

describe('BookController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = await moduleRef.resolve(BooksController);
    booksService = await moduleRef.resolve(BooksService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      let book: Book;

      beforeEach(async () => {
        book = await booksController.findOne(bookStub().id);
      });

      test('then it should call bookService', () => {
        expect(booksService.findOne).toBeCalledWith(bookStub().id);
      });

      test('then it should return a book', () => {
        expect(book).toEqual(bookStub());
      });
    });
  });
});
