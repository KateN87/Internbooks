import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledInputContainer = styled.div`
  height: 80px;
`;

export const StyledLabel = styled.label`
  background-color: white;
  position: absolute;
  left: 10px;
  top: -12px;
  z-index: 10;
  padding: 5px;
  color: var(--dark-grey);
  font-size: 12px;

  &.error {
    color: var(--error);
  }
`;
export const StyledTextInput = styled.input`
  font-size: var(--body-text);
  width: 200px;
  height: 45px;
  border: 1px solid var(--medium-grey);
  border-radius: 4px;
  padding: 5px 15px;

  &.error {
    border: 1px solid var(--error);
  }
`;

export const StyledTextArea = styled.textarea`
  font-size: var(--body-text);
  width: 30vw;
  max-width: 600px;
  min-width: 300px;
  height: 400px;
  border: 1px solid var(--medium-grey);
  border-radius: 4px;
  padding: 15px 15px;

  &.error {
    border: 1px solid var(--error);
  }
`;

export const StyledNumberInput = styled.input``;
