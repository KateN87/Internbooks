import {
  StyledLabel,
  StyledTextInput,
  StyledWrapper,
} from './CustomInput.styled';

type InputProps = {
  type: string;
  name: string;
  error: boolean | null;
};

const CustomTextInput = ({ type, name, error }: InputProps) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name} className={error ? 'error' : ''}>
        {name}
      </StyledLabel>
      <StyledTextInput
        type={type}
        name={name}
        className={error ? 'error' : ''}
      />
    </StyledWrapper>
  );
};

export default CustomTextInput;
