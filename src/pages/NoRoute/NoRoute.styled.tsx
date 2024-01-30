import styled from 'styled-components';

export const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--medium-grey);
  border-radius: 2px;
  box-shadow: 1px 2px var(--light-grey);
  width: 80%;
  height: 400px;
  padding: 50px;
  background-color: #ffffff;

  text-align: center;

  & h1,
  h2 {
    margin-bottom: 40px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
`;
