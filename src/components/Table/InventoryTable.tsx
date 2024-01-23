import { SlArrowRight, SlTrash } from 'react-icons/sl';
import {
  StyledInventoryHeadRow,
  StyledInventoryTable,
  StyledInventoryRow,
} from './Table.styled';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type InventoryTableProps = {
  data: BookInventoryItem[];
  deleteHandler: (name: string, itemCode: string) => void;
};

const InventoryTable = ({ data, deleteHandler }: InventoryTableProps) => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState<BookInventoryItem[] | []>([]);

  useEffect(() => {
    setDataList(data);
  }, [data]);

  const goToBook = (book: BookInventoryItem) => {
    navigate({
      pathname: '/',
      search: `?${createSearchParams({
        bookItem: book.itemCode,
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
          <p>Pages</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p></p>
        </div>
      </StyledInventoryHeadRow>
      {dataList.length === 0 && (
        <StyledInventoryRow className="row">
          <div>
            <p>No books in the iventory</p>
          </div>
        </StyledInventoryRow>
      )}
      {dataList.map((book) => (
        <StyledInventoryRow className="row" key={book.itemCode}>
          <div>
            <p>{book.name}</p>
          </div>
          <div>
            <p>{book.author}</p>
          </div>
          <div>
            <p>{book.numberOfPages}</p>
          </div>
          <div>
            <p>{book.price}</p>
          </div>
          <div>
            <p>{book.quantity}</p>
          </div>
          <div className="iconContainer">
            <p className="right">
              <SlTrash
                onClick={() => deleteHandler(book.name, book.itemCode)}
              />
            </p>
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
