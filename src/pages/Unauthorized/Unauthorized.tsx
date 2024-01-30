import {
  StyledMainContainer,
  StyledTextContainer,
} from './Unauthorized.styled';

const Unauthorized = () => {
  return (
    <StyledMainContainer>
      <StyledTextContainer>
        <h1>You are no longer logged in.</h1>
        <h3>
          If you have not actively logged out yourself, our system may have
          noticed that you are no longer authorized. Please verify who you are
          by logging in again to continue using our services or browse as a
          guest.
        </h3>
      </StyledTextContainer>
      <p>
        <a href="https://www.freepik.com/free-vector/closed-open-white-doors_10604106.htm#page=4&query=door%20knocking&position=32&from_view=search&track=ais&uuid=377d7213-a1ca-4b9f-85d9-3b59c19d3dec">
          Image by macrovector
        </a>
        on Freepik
      </p>
    </StyledMainContainer>
  );
};

export default Unauthorized;
