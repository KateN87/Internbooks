import { FormEvent, useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import {
  StyledInputContainer,
  StyledLoginSignupContainer,
} from './Login-Signup.styled';
import { Link } from 'react-router-dom';
import CustomInputContainer from '../CustomInput/CustomInputContainer';
import { signupParams } from '../../params/signupLoginParams';
import getFormData from '../../Util/getFormData';
import validateForm from '../../Util/validateForm';

const SignupContainer = () => {
  const [error, setError] = useState({ input: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    setIsLoading(true);

    setError({
      input: '',
      message: '',
    });

    const isFormValid = validateForm({
      target,
      params: signupParams,
      setError,
    });

    if (!isFormValid) {
      return setIsLoading(false);
    }

    const formData = getFormData(target, signupParams);

    // todo: sign up logic here
    setIsLoading(false);

    console.log(formData);
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
          <CustomButton
            className="large"
            text={isLoading ? 'Loading...' : 'Sign up'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>

      <Link to="/login">
        Already have an account? <b>Log in here.</b>
      </Link>
    </StyledLoginSignupContainer>
  );
};

export default SignupContainer;
