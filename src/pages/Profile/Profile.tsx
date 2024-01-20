import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { UserCard } from '../../components/Cards/UserCard/UserCard';
import { StyledProfile } from './Profile.styled';
import UserOrderTable from '../../components/Table/UserOrderTable';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return;
  }

  return (
    <StyledProfile>
      <h1>Welcome, {user.firstname}</h1>
      <div className="user-info">
        <UserCard />
        <UserOrderTable />
      </div>
    </StyledProfile>
  );
};

export default Profile;
