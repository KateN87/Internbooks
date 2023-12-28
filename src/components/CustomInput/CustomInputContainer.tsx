import { StyledInputContainer } from './CustomInput.styled';
import CustomTextInput from './CustomTextInput';
import ErrorContainer from '../Error/ErrorContainer';

type InputProps = {
  type: string;
  name: string;
  error: boolean | null;
  errorMessage: string | null;
};

const CustomInputContainer = ({
  type,
  name,
  error,
  errorMessage,
}: InputProps) => {
  return (
    <StyledInputContainer>
      <CustomTextInput type={type} name={name} error={error} />
      {error && <ErrorContainer message={errorMessage} />}
    </StyledInputContainer>
  );
};

export default CustomInputContainer;
