import { SlArrowRight } from 'react-icons/sl';
import {
  StyledInventoryHeadRow,
  StyledInventoryTable,
  StyledInventoryRow,
} from './Table.styled';
import { createSearchParams, useNavigate } from 'react-router-dom';

type InvenotoryTableProps = {
  data: Book[];
};

const InventoryTable = ({ data }: InvenotoryTableProps) => {
  const navigate = useNavigate();

  const goToBook = (book: Book) => {
    navigate({
      pathname: '/',
      search: `?${createSearchParams({
        bookItem: JSON.stringify(book.itemCode),
      })}`,
    });
  };

  return (
    <StyledInventoryTable>
      <StyledInventoryHeadRow>
        <div>
          <p>Title</p>
        </div>
        <div>
          <p>Author</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p></p>
        </div>
      </StyledInventoryHeadRow>
      {data.map((book) => (
        <StyledInventoryRow className="row" key={book.id}>
          <div>
            <p>{book.title}</p>
          </div>
          <div>
            <p>{book.author}</p>
          </div>
          <div>
            <p>{book.quantity}</p>
          </div>
          <div>
            <p>{book.price}</p>
          </div>
          <div>
            <p>
              <SlArrowRight onClick={() => goToBook(book)} />
            </p>
          </div>
        </StyledInventoryRow>
      ))}
    </StyledInventoryTable>
  );
};

export default InventoryTable;
