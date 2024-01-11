import { useSearchParams } from 'react-router-dom';
import mockBooks from '../../MockData/MockBooks.json';
import InventoryTable from '../../components/Table/InventoryTable';
import { StyledInventory } from './Inventory.styled';

const Orders = () => {
  const [searchParams] = useSearchParams();
  const bookItem = searchParams.get('bookItem');

  console.log(bookItem);

  return (
    <StyledInventory className="side">
      {!bookItem && <InventoryTable data={mockBooks} />}
    </StyledInventory>
  );
};

export default Orders;
