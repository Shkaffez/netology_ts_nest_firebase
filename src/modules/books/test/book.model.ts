import { Book } from '../schemas/book.schema';
import { MockModel } from './mock.model';
import { bookStub } from './stubs/book.stub';

export class BookModel extends MockModel<Book> {
  protected entityStub = bookStub();
}
