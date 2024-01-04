import { SlArrowRight } from 'react-icons/sl';
import { StyledRow, StyledTable } from './Table.styled';

type UserTableProps = {
  data: UserOrder[];
};

const UserOrderTable = ({ data }: UserTableProps) => {
  return (
    <StyledTable>
      {data.map((d) => (
        <StyledRow className="row">
          <div>
            <p>
              <b>Date: </b>
              {d.date}
            </p>

            <p>
              <b>Order Nr: </b>
              {d.orderNr}
            </p>
          </div>
          <div>
            <p>
              <b>Number of Items: </b>
              {d.itemsNr}
            </p>
            <p>
              <b>Price: </b>
              {d.price}
            </p>
          </div>
          <SlArrowRight />
        </StyledRow>
      ))}
    </StyledTable>
  );
};

export default UserOrderTable;
