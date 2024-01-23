import styled from 'styled-components';

export const StyledDeleteCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 300px auto;
  border: 1px solid red;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  width: 350px;
  min-height: 150px;
  background-color: #ffffff;
  padding: 30px 10px;
  align-items: space-evenly;
  text-align: center;

  & p {
    font-size: var(--body-text-medium);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 40px;
`;
