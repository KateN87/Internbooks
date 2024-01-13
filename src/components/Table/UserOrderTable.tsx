import { SlArrowRight } from 'react-icons/sl';
import { StyledRow, StyledTable } from './Table.styled';
import { createSearchParams, useNavigate } from 'react-router-dom';

type UserTableProps = {
  data: UserOrder[];
};

const UserOrderTable = ({ data }: UserTableProps) => {
  const navigate = useNavigate();

  const goToOrder = (orderNr: string) => {
    navigate({
      pathname: '/profile/myorders',
      search: `?${createSearchParams({ order: orderNr })}`,
    });
  };

  return (
    <StyledTable>
      {data.map((d) => (
        <StyledRow
          className="row"
          onClick={() => goToOrder(d.orderNr)}
          key={d.orderNr}
        >
          <div className="left">
            <p>
              <b>Date: </b>
              {d.date}
            </p>
            <p>
              <b>Order Nr: </b>
              {d.orderNr}
            </p>
          </div>
          <div className="right">
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
