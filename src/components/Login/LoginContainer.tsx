import TextInput from '../Inputs/CustomTextInput';
import { StyledLoginContainer } from './LoginContainer.styled';

export const LoginContainer = () => {
	return (
		<StyledLoginContainer>
			<TextInput type='text' name='Username' />
			<TextInput type='password' name='Password' />
		</StyledLoginContainer>
	);
};

export default LoginContainer;
