import { StyledLabel, StyledTextInput, StyledWrapper } from './StyledInputs';

type InputProps = {
	type: string;
	name: string;
	error: boolean;
};

const TextInput = ({ type, name, error }: InputProps) => {
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

export default TextInput;
