import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import mockBooks from '../MockData/MockBooks.json';
import { getAllBooks } from '../services/api/bookAPI';
import { ErrorContext } from './ErrorContext';

type BookContextType = {
  bookList: Book[];
  getBooks: () => void;
};

export const BookContext = createContext<BookContextType>({
  bookList: [],
  getBooks: () => {},
});

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const { handleError } = useContext(ErrorContext);
  const [bookList, setBookList] = useState<Book[]>([]);

  const getBooks = useCallback(async () => {
    try {
      const bookResponse: Book[] = await getAllBooks();
      setBookList(bookResponse);
      console.log(bookResponse);
    } catch (error) {
      handleError(error as CustomError);
    }
  }, [handleError]);

  const value = {
    bookList,
    getBooks,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
