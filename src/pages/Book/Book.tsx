import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BookMainContainer,
  BookImage,
  BookInfo,
  ButtonContainer,
} from './Book.styled';
import CustomButton from '../../components/Buttons/CustomButton';

import { UserContext } from '../../context/UserContext';

const Book = () => {
  const BASE_IMAGE_URL = '/assets/';
  const { state: book } = useLocation();
  const { user, updateCart } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const addHandler = () => {
    setIsLoading(true);
    if (user) {
      updateCart(book);
    }
    setIsLoading(false);
  };

  return (
    <BookMainContainer>
      <BookImage>
        <img src={`${BASE_IMAGE_URL}${book.imageLink}`} />
      </BookImage>
      <BookInfo>
        <div>
          <h1>{book.name}</h1>
          <h2>{book.author}</h2>
        </div>
        <p className="synopsis">{book.description}</p>
        <ButtonContainer>
          <h2>{book.price} SEK</h2>
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
