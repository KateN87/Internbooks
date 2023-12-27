import { FormEvent, useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import {
  StyledInputContainer,
  StyledLoginSignupContainer,
} from './Login-Signup.styled';
import { Link } from 'react-router-dom';
import CustomInputContainer from '../CustomInput/CustomInputContainer';
import { loginParams } from '../../params/signupLoginParams';
import getFormData from '../../Util/getFormData';
import validateForm from '../../Util/validateForm';

const LoginContainer = () => {
  const [error, setError] = useState({ input: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    setIsLoading(true);

    setError({
      input: '',
      message: '',
    });

    const isFormValid = validateForm({ target, params: loginParams, setError });

    if (!isFormValid) {
      return setIsLoading(false);
    }

    const formData = getFormData(target, loginParams);

    setIsLoading(false);
    // todo: login logic here
    console.log(formData);
  };
  const 

  return (
    <StyledLoginSignupContainer>
      <h1>Log in</h1>

      <form onSubmit={handleLogin}>
        <StyledInputContainer>
          {loginParams.map(({ type, name, errorType }) => (
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
          <CustomButton
            className="large"
            text={isLoading ? 'Loading...' : 'Log in'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>

      <Link to="/signup">
        Don't have an account? <b>Sign up here.</b>
      </Link>
    </StyledLoginSignupContainer>
  );
};

export default LoginContainer;
