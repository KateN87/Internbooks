import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 1200px;
  margin: 20px auto;
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

  & h2 {
    color: var(--dark-grey);
    margin-left: 10px;
  }

  & .icon {
    fill: var(--dark-grey);
  }
`;
