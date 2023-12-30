import styled from 'styled-components';

export const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  width: 250px;
  background-color: #ffffff;
`;

export const SmallInfoContainer = styled.div`
  padding: 20px 30px;
  font-size: var(--body-text-large);

  .title {
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
`;
