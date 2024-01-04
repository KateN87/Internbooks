import styled from 'styled-components';

export const StyledTable = styled.div`
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  height: fit-content;
  & .row:nth-child(even) {
    background-color: var(--light-grey);
  }
  & .row:nth-child(odd) {
    background-color: #ffffff;
  }

  & .row:first-child {
    border-radius: 4px 4px 0 0;
  }
  & .row:last-child {
    border-radius: 0 0 4px 4px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 50vw;
  max-width: 1000px;
  padding: 20px;
  font-size: var(--body-text-medium);

  & p {
    text-align: right;
  }
`;
