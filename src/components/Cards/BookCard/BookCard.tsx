import { MouseEvent, FC } from 'react';
import CustomButton from '../../Buttons/CustomButton';
import { StyledBookCard, StyledBookInfo } from './BookCard.styled';
import blurImage from '../../../assets/img/blurImage.jpg';

import { useNavigate } from 'react-router-dom';

type BookCardProps = {
  book: Book;
};

const BookCard: FC<BookCardProps> = ({ book }) => {
  const BASE_IMAGE_URL = '/src/assets/img/';
  const navigate = useNavigate();

  const clickNavigate = () => {
    navigate(`/book/${book.id}`, {
      state: book,
    });
  };

  const clickBuy = (event: MouseEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    } else {
      //stop propagation to not go to book page
      event.stopPropagation();
      //  Todo: add functionality to add book to basket
    }
  };

  return (
    <StyledBookCard>
      <div onClick={clickNavigate} className="inner-container">
        <img src={book?.image ? `${BASE_IMAGE_URL}${book.image}` : blurImage} />
        <StyledBookInfo>
          <p className="title">{book.title}</p>
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
