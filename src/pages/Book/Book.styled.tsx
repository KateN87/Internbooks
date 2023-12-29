import styled from 'styled-components';

export const BookMainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 80vh;
  padding: 10vh 1vh;
  justify-content: space-evenly;
`;

export const BookImage = styled.div`
  & img {
    max-width: 60vw;
    min-width: 20vh;
    max-height: 50vh;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20vh;
  width: 40vw;
  min-height: 50vh;

  .genre {
    font-style: italic;
  }
  .synopsis {
    font-size: var(--body-text-medium);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
