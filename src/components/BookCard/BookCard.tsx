import CustomButton from '../Buttons/CustomButton';
import { StyledBookCard, StyledBookInfo } from './BookCard.styled';
import blurImage from '../../assets/img/blurImage.jpg';

type BookCardProps = {
	book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
	const BASE_IMAGE_URL = '/src/assets/img/';

	const clickHandler = () => {
		console.log('HELLO');
	};
	return (
		<StyledBookCard>
			<div>
				<img src={book?.image ? `${BASE_IMAGE_URL}${book.image}` : blurImage} />
				<StyledBookInfo>
					<p className='title'>{book.title}</p>
					<p className='author'>{book.author}</p>
					<div className='price-buy'>
						<p className='price'>{book.price} SEK</p>
						<CustomButton text='Buy' className='small' onClick={clickHandler} />
					</div>
				</StyledBookInfo>
			</div>
		</StyledBookCard>
	);
};

export default BookCard;
