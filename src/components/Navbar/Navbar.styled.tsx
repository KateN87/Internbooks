import { styled } from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: 'row';
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--light-grey);
  height: 70px;
  padding: 0 10px;
  background-color: #ffffff;
`;

export const StyledTextButton = styled.div`
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Gruppo';
    font-weight: 700;
    margin: 0 20px;

    &:active {
      color: #2424247f;
    }
  }
`;

export const StyledTextButtonSide = styled(StyledTextButton)`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: space-between;
  margin-top: 50px;
  text-align: center;

  button {
    padding-top: 20px;
  }
`;

export const StyledSideNavbar = styled(StyledNavbar)`
  position: fixed;
  flex-direction: column;
  border-right: 2px solid var(--light-grey);
  width: 150px;
  height: 100vh;
  justify-content: flex-start;

  .current {
    text-decoration: underline;
  }
`;

export const StyledLargeNavbar = styled(StyledNavbar)`
  height: 180px;
  justify-content: center;
`;
