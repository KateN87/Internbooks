import { FormEvent, useContext, useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import {
  StyledInputContainer,
  StyledLoginSignupContainer,
} from './Login-Signup.styled';
import { Link } from 'react-router-dom';
import CustomInputContainer from '../CustomInput/CustomInputContainer';
import { signupParams } from '../../params/formParams';
import getFormData from '../../Util/getFormData';
import validateForm from '../../Util/validateForm';
import { ErrorContext } from '../../context/ErrorContext';
import ErrorContainer from '../Error/ErrorContainer';
import { UserContext } from '../../context/UserContext';
import CustomTextInput from '../CustomInput/CustomTextInput';

const SignupContainer = () => {
  const { newUser } = useContext(UserContext);
  const { error, clearError, handleError } = useContext(ErrorContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();
    const target = e.currentTarget.elements;

    setIsLoading(true);

    const isFormValid = validateForm({
      target,
      params: signupParams,
    });

    if (typeof isFormValid === 'object') {
      handleError(isFormValid);
      return setIsLoading(false);
    }

    const formData = getFormData(target, signupParams) as unknown as Register;
    newUser(formData);

    setIsLoading(false);
  };

  return (
    <StyledLoginSignupContainer>
      <h1>Sign up</h1>

      <form onSubmit={handleSignup}>
        <StyledInputContainer>
          {signupParams.map(({ type, name, errorType }) => (
            <CustomInputContainer key={name}>
              <CustomTextInput
                type={type}
                name={name}
                error={error && error.input === errorType}
              />
              {error && error.input === errorType && (
                <ErrorContainer message={error.message} />
              )}
            </CustomInputContainer>
          ))}
        </StyledInputContainer>
        <div className="button-container">
          {error && !error.input && <ErrorContainer message={error.message} />}
          <CustomButton
            className="large"
            text={isLoading ? 'Loading...' : 'Sign up'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>

      <Link to="/login">
        <p>
          Already have an account? <b>Log in here.</b>
        </p>
      </Link>
    </StyledLoginSignupContainer>
  );
};

export default SignupContainer;
