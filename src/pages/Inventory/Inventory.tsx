import { useSearchParams } from 'react-router-dom';
import InventoryTable from '../../components/Table/InventoryTable';
import { StyledInventory } from './Inventory.styled';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../context/BookContext';

const Orders = () => {
  const [searchParams] = useSearchParams();
  const bookItem = searchParams.get('bookItem');
  const { bookList, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <StyledInventory className="side">
      {!bookItem && <InventoryTable data={bookList} />}
    </StyledInventory>
  );
};

export default Orders;
