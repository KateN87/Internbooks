type BookEditProps = {
  bookItem: Book;
};

const BookEdit = ({ bookItem }: BookEditProps) => {
  console.log(bookItem);

  return <div>BookEdit</div>;
};

export default BookEdit;
