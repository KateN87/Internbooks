import { useSearchParams } from 'react-router-dom';
import InventoryTable from '../../components/Table/InventoryTable';
import { StyledInventory } from './Inventory.styled';
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { InventoryContext } from '../../context/InventoryContext';
import combineBookArrays from '../../Util/CombineBookArray';
import BookEdit from './BookEdit/BookEdit';
import DeleteCard from '../../components/Cards/DeleteCard/DeleteCard';

const Orders = () => {
  const [searchParams] = useSearchParams();
  const bookItem = searchParams.get('bookItem');
  const { bookList, getBooks } = useContext(BookContext);
  const { inventoryList, getInventories } = useContext(InventoryContext);
  const [showDelete, setShowDelete] = useState(false);
  const [chosenBook, setChosenBook] = useState({ name: '', itemCode: '' });

  useEffect(() => {
    getBooks();
    getInventories();
  }, [getBooks, getInventories]);

  // Call the function and get the result
  const resultArray = combineBookArrays(bookList, inventoryList);

  const deleteHandler = (name: string, itemCode: string) => {
    setChosenBook({ name, itemCode });
    setShowDelete(true);
  };

  return (
    <StyledInventory className="side">
      {!bookItem && (
        <InventoryTable data={resultArray} deleteHandler={deleteHandler} />
      )}
      {bookItem && <BookEdit bookItemCode={bookItem} />}
      {showDelete && chosenBook && (
        <DeleteCard book={chosenBook} setShowDelete={setShowDelete} />
      )}
    </StyledInventory>
  );
};

export default Orders;
