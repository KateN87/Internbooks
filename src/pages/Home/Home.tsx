import { useContext, useEffect } from 'react';
import HomeBanner from '../../components/Banner/HomeBanner';
import BookCard from '../../components/Cards/BookCard/BookCard';
import { StyledHome, StyledBookWrapper } from './Home.styled';
import { BookContext } from '../../context/BookContext';

const Home = () => {
  const { bookList, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <StyledHome>
      <HomeBanner />
      <StyledBookWrapper>
        {bookList.length >= 1 &&
          bookList.map((book) => <BookCard book={book} key={book.itemCode} />)}
      </StyledBookWrapper>
    </StyledHome>
  );
};

export default Home;
