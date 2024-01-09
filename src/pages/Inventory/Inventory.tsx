import mockBooks from '../../MockData/MockBooks.json';
import InventoryTable from '../../components/Table/InventoryTable';
import { StyledInventory } from './Inventory.styled';

const Orders = () => {
  return (
    <StyledInventory className="side">
      <InventoryTable data={mockBooks} />
    </StyledInventory>
  );
};

export default Orders;
