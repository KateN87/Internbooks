import styled from 'styled-components';

export const BookEditStyled = styled.div`
  display: flex;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  width: 80vw;
  max-width: 1000px;
  background-color: #ffffff;
  justify-content: center;
  margin: 10vh auto;
  padding: 40px;

  & h1 {
    margin-bottom: 20px;
  }
`;

export const BookEditForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  flex: 1 1 0;

  .input-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .normal-input {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }

  .area-input {
    height: 400px;
    padding-right: 20px;
  }

  & div {
    width: fit-content;
  }

  & .button-container {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;
