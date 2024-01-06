import styled from 'styled-components';

export const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  width: 250px;
  background-color: #ffffff;
  padding: 10px 0;
`;

export const SmallInfoContainer = styled.div`
  padding: 10px 20px;
  font-size: var(--body-text-medium);

  .title {
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
  margin: 5px;
`;
