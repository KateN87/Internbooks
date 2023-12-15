import { FormEvent, useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import TextInput from '../Inputs/CustomTextInput';
import {
	StyledLoginContainer,
	StyledInputContainer,
} from './LoginContainer.styled';
import ErrorContainer from '../Error/ErrorContainer';

export const LoginContainer = () => {
	const [error, setError] = useState({ input: '', message: '' });

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.currentTarget.elements;
		const username = target.namedItem('Username') as HTMLInputElement | null;
		const password = target.namedItem('Password') as HTMLInputElement | null;

		setError({
			input: '',
			message: '',
		});

		if (!username?.value) {
			return setError({
				input: 'username',
				message: 'Please fill in username',
			});
		}

		if (!password?.value) {
			return setError({
				input: 'password',
				message: 'Please fill in password',
			});
		}

		//handle login here
		console.log('Username, password: ', username.value, password.value);
	};

	return (
		<StyledLoginContainer>
			<form onSubmit={handleLogin}>
				<StyledInputContainer>
					<TextInput
						type='text'
						name='Username'
						error={error.input === 'username'}
					/>

					{error.input === 'username' && (
						<ErrorContainer message={error.message} />
					)}
				</StyledInputContainer>
				<StyledInputContainer>
					<TextInput
						type='password'
						name='Password'
						error={error.input === 'password'}
					/>
					{error.input === 'password' && (
						<ErrorContainer message={error.message} />
					)}
				</StyledInputContainer>
				<CustomButton className='large' text='Log in' type='submit' />
			</form>
		</StyledLoginContainer>
	);
};

export default LoginContainer;
