import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { SmallInfoContainer, StyledUserCard } from './UserCard.styled';

export const UserCard = () => {
  const { user } = useContext(UserContext);
  const { email, firstname, lastname, address, city, postcode, phoneNumber } =
    user || {};
  const infoArray = {
    Email: email,
    Name: `${firstname} ${lastname}`,
    Street: address,
    City: city,
    Zip: postcode,
    Phone: phoneNumber,
  };
  return (
    <StyledUserCard>
      {Object.entries(infoArray).map(([key, value]) => (
        <SmallInfoContainer key={key}>
          <p className="title">{key}:</p>
          <p>{value}</p>
        </SmallInfoContainer>
      ))}
    </StyledUserCard>
  );
};

export default UserCard;
