import { FormEvent, useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import { StyledLoginSignupContainer } from './Login-Signup.styled';
import { Link } from 'react-router-dom';
import CustomInputContainer from '../CustomInput/CustomInputContainer';

const LoginContainer = () => {
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
		<StyledLoginSignupContainer>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<CustomInputContainer
					type='text'
					name='Username'
					error={error.input === 'username'}
					errorMessage={error.message}
				/>

				<CustomInputContainer
					type='password'
					name='Password'
					error={error.input === 'password'}
					errorMessage={error.message}
				/>

				<CustomButton className='large' text='Log in' type='submit' />
			</form>

			<Link to='/signup'>
				Don't have an account? <b>Sign up here.</b>
			</Link>
		</StyledLoginSignupContainer>
	);
};

export default LoginContainer;
