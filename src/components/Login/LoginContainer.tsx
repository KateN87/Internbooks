import { FormEvent } from 'react';
import CustomButton from '../Buttons/CustomButton';
import TextInput from '../Inputs/CustomTextInput';
import { StyledLoginContainer } from './LoginContainer.styled';

export const LoginContainer = () => {
	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.currentTarget.elements;

		const username = target.namedItem('Username') as HTMLInputElement | null;
		const password = target.namedItem('Password') as HTMLInputElement | null;

		console.log(username?.value, password?.value);
	};

	return (
		<StyledLoginContainer>
			<form onSubmit={handleLogin}>
				<TextInput type='text' name='Username' />
				<TextInput type='password' name='Password' />
				<CustomButton className='large' text='Log in' type='submit' />
			</form>
		</StyledLoginContainer>
	);
};

export default LoginContainer;
