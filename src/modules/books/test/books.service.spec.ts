import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { BooksService } from '../books.service';
import { Book } from '../schemas/book.schema';
import { BookModel } from './book.model';
import { bookStub } from './stubs/book.stub';

describe('BooksService', () => {
  let booksService: BooksService;
  let bookModel: BookModel;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useClass: BookModel,
        },
      ],
    }).compile();

    booksService = moduleRef.get<BooksService>(BooksService);
    bookModel = moduleRef.get<BookModel>(getModelToken(Book.name));

    jest.clearAllMocks();
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let books: Book[];

      beforeEach(async () => {
        jest.spyOn(bookModel, 'find');
        books = await booksService.find();
      });

      test('then it should call the bookModel', () => {
        expect(bookModel.find).toHaveBeenCalledWith();
      });

      test('then it should return a book', () => {
        expect(books).toEqual([bookStub()]);
      });
    });
  });
});
