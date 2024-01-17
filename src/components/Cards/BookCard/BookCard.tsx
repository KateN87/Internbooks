import { MouseEvent, FC, useContext } from 'react';
import CustomButton from '../../Buttons/CustomButton';
import { StyledBookCard, StyledBookInfo } from './BookCard.styled';
import blurImage from '/assets/blurImage.jpg';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

type BookCardProps = {
  book: Book;
};

const BookCard: FC<BookCardProps> = ({ book }) => {
  const BASE_IMAGE_URL = '/assets/';
  const navigate = useNavigate();
  const { user, updateCart } = useContext(UserContext);

  const clickNavigate = () => {
    navigate(`/book/${book.itemCode}`, {
      state: book,
    });
  };

  const clickBuy = (event: MouseEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    } else {
      //stop propagation to not go to book page
      event.stopPropagation();
      if (user) {
        updateCart(book);
      }
      //  Todo: add functionality to add book to basket
    }
  };

  return (
    <StyledBookCard>
      <div onClick={clickNavigate} className="inner-container">
        <img
          src={
            book?.imageLink ? `${BASE_IMAGE_URL}${book.imageLink}` : blurImage
          }
        />
        <StyledBookInfo>
          <p className="title">{book.name}</p>
          <p className="author">{book.author}</p>
          <div className="price-buy">
            <p className="price">{book.price} SEK</p>
            <CustomButton text="Buy" className="small" onClick={clickBuy} />
          </div>
        </StyledBookInfo>
      </div>
    </StyledBookCard>
  );
};

export default BookCard;
