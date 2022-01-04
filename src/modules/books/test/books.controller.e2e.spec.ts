import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { BooksService } from '../books.service';
import { BooksModule } from '../books.module';

jest.mock('../books.service');

describe('BookController', () => {
  let app: INestApplication;
  let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [BooksModule],
    })
      .overrideProvider(BooksService)
      .useClass(booksService)
      .compile();

    app = moduleRef.createNestApplication();
    booksService = await moduleRef.resolve(BooksService);
    await app.init();
  });

  it('/GET books', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect(booksService.findAll());
  });
});
