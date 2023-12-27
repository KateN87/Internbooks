import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--off-white);
  font-weight: bold;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:active {
    background-color: #496a9edd;
    box-shadow: none;
  }

  &.small {
    width: 70px;
    height: 20px;
  }

  &.medium {
    width: 100px;
    height: 30px;
  }

  &.large {
    width: 200px;
    height: 40px;
  }
`;
