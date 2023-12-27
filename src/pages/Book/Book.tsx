import { useLocation } from 'react-router-dom';
import {
  BookMainContainer,
  BookImage,
  BookInfo,
  ButtonContainer,
} from './Book.styled';
import CustomButton from '../../components/Buttons/CustomButton';
import { useState } from 'react';

const Book = () => {
  const BASE_IMAGE_URL = '/src/assets/img/';
  const { state: book } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const addHandler = () => {
    setIsLoading(true);

    // Todo: handle add to cart
    console.log(book.title);
    setIsLoading(false);
  };

  return (
    <BookMainContainer>
      <BookImage>
        <img src={`${BASE_IMAGE_URL}${book.image}`} />
      </BookImage>
      <BookInfo>
        <div>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <h3 className="genre">{book.genre}</h3>
        </div>
        <p>{book.synopsis}</p>
        <ButtonContainer>
          <CustomButton
            className="large"
            text={isLoading ? 'Loading...' : 'Add to Cart'}
            onClick={addHandler}
            disabled={isLoading}
          />
        </ButtonContainer>
      </BookInfo>
    </BookMainContainer>
  );
};

export default Book;
