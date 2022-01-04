import { bookStub } from '../test/stubs/book.stub';

export const BooksService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(bookStub()),
  findOne: jest.fn().mockResolvedValue(bookStub()),
  delete: jest.fn().mockResolvedValue(bookStub()),
  update: jest.fn().mockResolvedValue(bookStub()),
  findAll: jest.fn().mockResolvedValue([bookStub()]),
});
