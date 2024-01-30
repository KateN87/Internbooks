import { useNavigate } from 'react-router-dom';
import {
  StyledMainContainer,
  StyledContainer,
  ButtonContainer,
} from './NoRoute.styled';
import CustomButton from '../../components/Buttons/CustomButton';

const NoRoute = () => {
  const navigate = useNavigate();
  return (
    <StyledMainContainer>
      <StyledContainer>
        <h1>OOPS, 404!</h1>
        <h3>It seems like we don't have this page.</h3>
        <ButtonContainer>
          <CustomButton
            text="Home"
            className="medium"
            onClick={() => navigate('/')}
          />
        </ButtonContainer>
      </StyledContainer>
    </StyledMainContainer>
  );
};

export default NoRoute;
