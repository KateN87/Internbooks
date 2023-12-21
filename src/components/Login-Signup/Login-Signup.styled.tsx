import styled from 'styled-components';

export const StyledLoginSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--light-grey);
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
    margin: 0 20px;
    justify-content: center;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0 3vw;
  justify-content: space-between;
  max-width: 50vw;
  padding: 0 20px;
`;
