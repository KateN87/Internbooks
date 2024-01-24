import { createContext, useCallback, useContext, useState } from 'react';
import { getAllBooks, putBook, removeBook } from '../services/api/bookAPI';
import { ErrorContext } from './ErrorContext';

type BookContextType = {
  bookList: Book[];
  getBooks: () => void;
  updateBook: (itemCode: string, book: EditBook) => void;
  deleteBook: (itemCode: string) => void;
};
export const BookContext = createContext<BookContextType>({
  bookList: [],
  getBooks: () => {},
  updateBook: () => {},
  deleteBook: () => {},
});

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const { handleError } = useContext(ErrorContext);
  const [bookList, setBookList] = useState<Book[]>([]);

  const getBooks = useCallback(async () => {
    try {
      const bookResponse: Book[] = await getAllBooks();
      setBookList(bookResponse);
    } catch (error) {
      handleError(error as CustomError);
    }
  }, [handleError]);

  const updateBook = useCallback(
    async (itemCode: string, book: EditBook) => {
      try {
        const resp = await putBook(itemCode, book);

        console.log('RESPONSE BOOK: ', resp);
        getBooks();
        return true;
      } catch (error) {
        handleError(error as CustomError);
      }
    },
    [handleError, getBooks]
  );

  const deleteBook = useCallback(
    async (itemCode: string) => {
      try {
        const resp = await removeBook(itemCode);

        console.log('RESPONSE BOOK: ', resp);
        getBooks();
        return true;
      } catch (error) {
        handleError(error as CustomError);
      }
    },
    [handleError, getBooks]
  );

  const value = {
    bookList,
    getBooks,
    updateBook,
    deleteBook,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
