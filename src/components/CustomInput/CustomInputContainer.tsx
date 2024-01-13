import { FC, ReactNode } from 'react';
import { StyledInputContainer } from './CustomInput.styled';

type CustomInputContainerProps = {
  children: ReactNode;
};

const CustomInputContainer: FC<CustomInputContainerProps> = ({ children }) => {
  return <StyledInputContainer>{children}</StyledInputContainer>;
};

export default CustomInputContainer;
