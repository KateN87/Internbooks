import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import {
  SmallInfoContainer,
  StyledUserCard,
  ButtonContainer,
} from './UserCard.styled';
import CustomButton from '../../Buttons/CustomButton';

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

  const updateHandler = () => {
    console.log('UPDATE');
  };

  return (
    <StyledUserCard>
      {Object.entries(infoArray).map(([key, value]) => (
        <SmallInfoContainer key={key}>
          <p className="title">{key}:</p>
          <p>{value}</p>
        </SmallInfoContainer>
      ))}
      <ButtonContainer>
        <CustomButton
          text="Update info"
          className="medium"
          onClick={updateHandler}
        />
      </ButtonContainer>
    </StyledUserCard>
  );
};

export default UserCard;
