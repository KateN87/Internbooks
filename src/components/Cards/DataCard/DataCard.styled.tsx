import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--medium-grey);
  border-radius: 2px;
  margin: 10px;
  box-shadow: 1px 2px var(--light-grey);
  width: 18vw;
  max-width: 200px;
  height: fit-content;
  padding: 0 0 10px 10px;
  background-color: #ffffff;

  .title {
    font-weight: bold;
    padding-top: 10px;
  }
`;
