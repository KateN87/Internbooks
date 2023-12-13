import { StyledLabel, StyledTextInput, StyledWrapper } from './StyledInputs';

type InputProps = {
	type: string;
	name: string;
};

const TextInput = ({ type, name }: InputProps) => {
	return (
		<StyledWrapper>
			<StyledLabel htmlFor={name}>{name}</StyledLabel>
			<StyledTextInput type={type} name={name} />
		</StyledWrapper>
	);
};

export default TextInput;
