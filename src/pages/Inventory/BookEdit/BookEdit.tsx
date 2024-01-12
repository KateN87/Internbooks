import { useEffect, useState } from 'react';
import { BookEditStyled } from './BookEdit.styled';
import MockBooks from '.././../../MockData/MockBooks.json';

type BookEditProps = {
  bookItemCode: string;
};

const BookEdit = ({ bookItemCode }: BookEditProps) => {
  const [book, setBook] = useState<BookInventoryItem | undefined>(undefined);

  useEffect(() => {
    const foundBook = MockBooks.find((item) => item.itemCode === bookItemCode);

    setBook(foundBook);
  }, [bookItemCode]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <BookEditStyled>
      BookEdit
      <p>{book.name}</p>
    </BookEditStyled>
  );
};

export default BookEdit;
