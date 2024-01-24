import styled from 'styled-components';

export const BookEditStyled = styled.div`
  display: flex;
  position: relative;
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

  & .cancel-button {
    position: absolute;
    bottom: 90px;
    right: 60px;
  }

  &.error {
    border: 1px solid var(--error);
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
    flex-direction: row;
    gap: 10px;
    margin-top: 80px;
    margin-right: 20px;
  }
`;

export const StyledQuantityContainer = styled.div`
  display: flex;
  min-width: 200px;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  & .quantity {
    font-size: var(--body-text);
    margin-left: 20px;
  }

  & .title {
    position: absolute;
    bottom: 200px;
    z-index: 10;
    padding: 15px;
    color: var(--dark-grey);
    font-size: 12px;
  }
`;
