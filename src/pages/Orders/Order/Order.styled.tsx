import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  padding-left: 140px;
  margin: auto;

  & h1 {
    align-self: flex-start;
    margin-bottom: 20px;
  }
`;

export const InfoContainers = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const BackContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 20px 0;
  cursor: pointer;
  align-self: flex-start;

  & h2 {
    color: var(--dark-grey);
    margin-left: 10px;
  }

  & .icon {
    fill: var(--dark-grey);
  }
`;
