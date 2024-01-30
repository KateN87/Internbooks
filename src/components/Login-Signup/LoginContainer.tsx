import { FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Buttons/CustomButton';
import {
  StyledInputContainer,
  StyledLoginSignupContainer,
} from './Login-Signup.styled';
import CustomInputContainer from '../CustomInput/CustomInputContainer';
import { loginParams } from '../../params/formParams';
import getFormData from '../../Util/getFormData';
import validateForm from '../../Util/validateForm';
import { UserContext } from '../../context/UserContext';
import { ErrorContext } from '../../context/ErrorContext';
import ErrorContainer from '../Error/ErrorContainer';
import CustomTextInput from '../CustomInput/CustomTextInput';

const LoginContainer = () => {
  const { loginUser } = useContext(UserContext);
  const { error, clearError, handleError } = useContext(ErrorContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();
    const target = e.currentTarget.elements;

    const isFormValid = validateForm({
      target,
      params: loginParams,
      login: true,
    });

    if (typeof isFormValid === 'object') {
      handleError(isFormValid);
      return setIsLoading(false);
    }

    const formData = getFormData(target, loginParams) as Record<string, string>;
    loginUser(formData);
    setIsLoading(false);
  };

  return (
    <StyledLoginSignupContainer>
      <h1>Log in</h1>

      <form onSubmit={handleLogin}>
        <StyledInputContainer className="login">
          {loginParams.map(({ type, name, errorType }) => (
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
            text={isLoading ? 'Loading...' : 'Log in'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>

      <Link to="/signup">
        <p>
          Don't have an account? <b>Sign up here.</b>
        </p>
      </Link>
    </StyledLoginSignupContainer>
  );
};

export default LoginContainer;
