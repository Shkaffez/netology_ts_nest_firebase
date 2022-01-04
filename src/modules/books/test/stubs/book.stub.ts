import { Book } from '../../schemas/book.schema';

export const bookStub = (): Book => {
  return {
    id: 'mockBookId',
    title: 'mockTitle',
    description: 'mockDescription',
    authors: 'mockAuthors',
    favorite: true,
    fileCover: 'mockFileCover',
    fileName: 'mockFileName',
  };
};
