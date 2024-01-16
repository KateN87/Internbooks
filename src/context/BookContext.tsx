import { createContext, useCallback, useContext, useState } from 'react';
import MockBooks from '../MockData/MockBooks.json';
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
    const imageArray = [
      'black-book.jpg',
      'blue-book.jpg',
      'dark-blue-book.jpg',
      'open-book-pile.jpg',
    ];
    // Map through each book in MockBooks
    const updatedBookList = MockBooks.map((book, index) => {
      // Use modulo operator to cycle through imageArray
      const imageIndex = index % imageArray.length;
      // Assign the image from imageArray to the book object
      return {
        ...book,
        image: imageArray[imageIndex],
      };
    });

    // Update the book list with the modified array
    setBookList(updatedBookList);
  }, []);

  /*   const getBooks = useCallback(async () => {
    try {
      const bookResponse: Book[] = await getAllBooks();

      setBookList(bookResponse);
    } catch (error) {
      handleError(error as CustomError);
    }
  }, [handleError]); */

  const value = {
    bookList,
    getBooks,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
