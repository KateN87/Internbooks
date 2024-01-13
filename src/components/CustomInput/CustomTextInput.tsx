import { ChangeEvent } from 'react';
import {
  StyledLabel,
  StyledTextArea,
  StyledTextInput,
  StyledWrapper,
} from './CustomInput.styled';

type InputProps = {
  type: string;
  name: string;
  error: boolean | null;
  placeholder?: string | number;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const CustomTextInput = ({
  type,
  name,
  error,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name} className={error ? 'error' : ''}>
        {name}
      </StyledLabel>
      {type === 'textarea' ? (
        <StyledTextArea
          name={name}
          className={error ? 'textarea error' : 'textarea'}
          value={value}
          placeholder={placeholder?.toString()}
          onChange={onChange}
        />
      ) : (
        <StyledTextInput
          type={type}
          name={name}
          className={error ? 'error' : ''}
          value={value}
          placeholder={placeholder?.toString()}
          onChange={onChange}
        />
      )}
    </StyledWrapper>
  );
};

export default CustomTextInput;
