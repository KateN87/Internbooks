import { useSearchParams } from 'react-router-dom';
import InventoryTable from '../../components/Table/InventoryTable';
import { StyledInventory } from './Inventory.styled';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../context/BookContext';
import { InventoryContext } from '../../context/InventoryContext';
import combineBookArrays from '../../Util/CombineBookArray';
import BookEdit from './BookEdit/BookEdit';

const Orders = () => {
  const [searchParams] = useSearchParams();
  const bookItem = searchParams.get('bookItem');
  const { bookList, getBooks } = useContext(BookContext);
  const { inventoryList, getInventories } = useContext(InventoryContext);

  useEffect(() => {
    getBooks();
    getInventories();
  }, [getBooks, getInventories]);

  // Call the function and get the result
  const resultArray = combineBookArrays(bookList, inventoryList);

  return (
    <StyledInventory className="side">
      {!bookItem && <InventoryTable data={resultArray} />}
      {bookItem && <BookEdit bookItemCode={bookItem} />}
    </StyledInventory>
  );
};

export default Orders;
