import { bookStub } from '../test/stubs/book.stub';

export const BooksService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockResolvedValue([bookStub()]),
  create: jest.fn().mockResolvedValue(bookStub()),
  findOne: jest.fn().mockResolvedValue(bookStub()),
  delete: jest.fn().mockResolvedValue(bookStub()),
  update: jest.fn().mockResolvedValue(bookStub()),
});
