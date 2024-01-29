import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserOrder } from '../../services/api/orderApi';
import { UserContext } from '../../context/UserContext';
import { UserCard } from '../../components/Cards/UserCard/UserCard';
import { StyledProfile } from './Profile.styled';
import OrderTable from '../../components/Table/OrderTable';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [orderList, setOrderList] = useState<UserOrdersDataBase[]>([]);

  const goToOrder = (order: UserOrdersDataBase) => {
    navigate('/profile/myorders', { state: order });
  };

  useEffect(() => {
    const getOrders = async () => {
      if (user && user.email) {
        const orderResponse = await getUserOrder(user.email);
        setOrderList(orderResponse);
      }
      return;
    };

    getOrders();
  }, [user]);

  if (!user) {
    return;
  }

  return (
    <StyledProfile>
      <h1>Welcome, {user.firstname}</h1>
      <div className="user-info">
        <UserCard />
        <OrderTable orderList={orderList} onClick={goToOrder} />
      </div>
    </StyledProfile>
  );
};

export default Profile;
