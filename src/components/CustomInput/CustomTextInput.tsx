import { ChangeEvent } from 'react';
import {
  StyledLabel,
  StyledTextArea,
  StyledTextInput,
  StyledWrapper,
  StyledNumberInput,
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
      {type === 'textarea' && (
        <StyledTextArea
          name={name}
          className={error ? 'textarea error' : 'textarea'}
          value={value}
          placeholder={placeholder?.toString()}
          onChange={onChange}
        />
      )}

      {type === 'text' && (
        <StyledTextInput
          type={type}
          name={name}
          className={error ? 'error' : ''}
          value={value}
          placeholder={placeholder?.toString()}
          onChange={onChange}
        />
      )}

      {type === 'password' && (
        <StyledTextInput
          type={type}
          name={name}
          className={error ? 'error' : ''}
          value={value}
          placeholder={placeholder?.toString()}
          onChange={onChange}
        />
      )}

      {type === 'number' && (
        <StyledNumberInput
          type={type}
          name={name}
          className={error ? 'error' : ''}
          value={value}
          placeholder={placeholder?.toString()}
          onChange={onChange}
          min="1"
        />
      )}
    </StyledWrapper>
  );
};

export default CustomTextInput;
