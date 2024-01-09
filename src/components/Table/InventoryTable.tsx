import { SlArrowRight } from 'react-icons/sl';
import {
  StyledInventoryHeadRow,
  StyledInventoryTable,
  StyledInventoryRow,
} from './Table.styled';

type InvenotoryTableProps = {
  data: Book[];
};

const InventoryTable = ({ data }: InvenotoryTableProps) => {
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
      {data.map((d) => (
        <StyledInventoryRow className="row" key={d.id}>
          <div>
            <p>{d.title}</p>
          </div>
          <div>
            <p>{d.author}</p>
          </div>
          <div>
            <p>{d.quantity}</p>
          </div>
          <div>
            <p>{d.price}</p>
          </div>
          <div>
            <p>
              <SlArrowRight />
            </p>
          </div>
        </StyledInventoryRow>
      ))}
    </StyledInventoryTable>
  );
};

export default InventoryTable;
