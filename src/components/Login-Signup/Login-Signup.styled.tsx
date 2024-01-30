import styled from 'styled-components';

export const StyledLoginSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  width: fit-content;
  background-color: #ffffff;
  justify-content: space-evenly;
  align-items: center;
  margin: 10vh auto;
  padding: 40px;

  & h1 {
    margin-bottom: 20px;
  }

  & form > .button-container {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    align-items: flex-end;
  }

  & a {
    display: flex;
    align-self: flex-end;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 100%;
  flex: 2;
  gap: 0 3vw;
  justify-content: space-between;
  width: 50vw;
  max-width: 600px;
  padding: 0 20px;

  & .login {
    flex-flow: column;
    max-height: 40vh;
  }
`;
