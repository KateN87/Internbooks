import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return;
  }
  return (
    <div>
      <h2>Profile</h2>
      <p>First Name: {user.firstname}</p>
      <p>Last Name: {user.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>City: {user.city}</p>
      <p>Postcode: {user.postcode}</p>
      <p>Phone Number: {user.phoneNumber}</p>
    </div>
  );
};

export default Profile;
