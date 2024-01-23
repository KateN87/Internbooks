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

export const StyledInventoryTable = styled(StyledTable)`
  max-height: 80vh;
  overflow-y: auto;
  min-width: fit-content;
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

  & .iconContainer {
    display: flex;
    justify-content: space-evenly;
  }

  & .left {
    text-align: left;
  }

  & .right {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }

  & p {
    display: flex;
    overflow: hidden;
    padding: 0 5px;
  }

  & div {
    flex: 1 1 0;
    width: 0;
    padding: 5px;
  }
`;

export const StyledInventoryRow = styled(StyledRow)`
  width: 70vw;
  min-width: fit-content;
`;

export const StyledInventoryHeadRow = styled(StyledInventoryRow)`
  background-color: #ffffff;
  font-weight: bold;
  width: 70vw;
  min-width: fit-content;
`;
