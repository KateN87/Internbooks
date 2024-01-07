import { styled } from 'styled-components';

export const StyledNavIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 20px;
  cursor: pointer;

  & div {
    display: flex;
    justify-content: center;
  }
`;

export const CartContainer = styled.div`
  position: relative;

  & .items-in-cart {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: -16px;
    background-color: var(--primary-pink);
    border-radius: 16px;
  }

  & .items-in-cart > p {
    color: var(--primary);
    font-weight: bold;
    letter-spacing: 0;
  }
`;
