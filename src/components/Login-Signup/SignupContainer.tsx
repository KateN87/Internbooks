import { FormEvent, useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import {
  StyledInputContainer,
  StyledLoginSignupContainer,
} from './Login-Signup.styled';
import { Link } from 'react-router-dom';
import CustomInputContainer from '../CustomInput/CustomInputContainer';
import signupParams from '../../params/signupParams';

const SignupContainer = () => {
  const [error, setError] = useState({ input: '', message: '' });

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    const username = target.namedItem('Username') as HTMLInputElement | null;
    const password = target.namedItem('Password') as HTMLInputElement | null;
    const repeatPassword = target.namedItem(
      'Repeat Password'
    ) as HTMLInputElement | null;

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

    if (!repeatPassword?.value) {
      return setError({
        input: 'repeatPassword',
        message: 'Please repeat password',
      });
    }

    //handle login here
    console.log(
      'Username, password, repeatPassword: ',
      username.value,
      password.value,
      repeatPassword.value
    );
  };

  return (
    <StyledLoginSignupContainer>
      <h1>Sign up</h1>

      <form onSubmit={handleSignup}>
        <StyledInputContainer>
          {signupParams.map(({ type, name, errorType }) => (
            <CustomInputContainer
              key={name}
              type={type}
              name={name}
              error={error.input === errorType}
              errorMessage={error.message}
            />
          ))}
        </StyledInputContainer>
        <div className="button-container">
          <CustomButton className="large" text="Sign up" type="submit" />
        </div>
      </form>

      <Link to="/login">
        Already have an account? <b>Log in here.</b>
      </Link>
    </StyledLoginSignupContainer>
  );
};

export default SignupContainer;
