import { StyledBookCard } from './BookCard.styled';

type BookCardProps = {
	book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
	const BASE_IMAGE_URL = '/src/assets/img/';
	return (
		<StyledBookCard>
			<img src={`${BASE_IMAGE_URL}${book.image}`} />
			<p>Title: {book.title}</p>
			<p>Author: {book.author}</p>
			<p>Price: {book.price}</p>
		</StyledBookCard>
	);
};

export default BookCard;
