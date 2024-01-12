import { useSearchParams } from 'react-router-dom';
import InventoryTable from '../../components/Table/InventoryTable';
import { StyledInventory } from './Inventory.styled';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../context/BookContext';
import { InventoryContext } from '../../context/InventoryContext';

const Orders = () => {
  const [searchParams] = useSearchParams();
  const bookItem = searchParams.get('bookItem');
  const { bookList, getBooks } = useContext(BookContext);
  const { inventoryList, getInventories } = useContext(InventoryContext);

  useEffect(() => {
    getBooks();
    getInventories();
  }, [getBooks, getInventories]);

  const combinedArray: BookInventoryItem[] = [];

  // Function to combine books and inventory
  const combineArrays = (books: Book[], inventory: InventoryItem[]) => {
    // Iterate through books
    books.forEach((book) => {
      // Find the corresponding inventory item
      const inventoryItem = inventory.find(
        (item) => item.itemCode === book.itemCode
      );

      // If inventory item exists, combine the information
      if (inventoryItem) {
        const combinedBook = { ...book, quantity: inventoryItem.quantity };
        combinedArray.push(combinedBook);
      }
    });

    return combinedArray;
  };

  // Call the function and get the result
  const resultArray = combineArrays(bookList, inventoryList);

  return (
    <StyledInventory className="side">
      {!bookItem && <InventoryTable data={resultArray} />}
    </StyledInventory>
  );
};

export default Orders;
