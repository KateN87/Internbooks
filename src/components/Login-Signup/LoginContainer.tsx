import { FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MockUsers from '../../MockData/MockUsers.json';
import CustomButton from '../Buttons/CustomButton';
import {
  StyledInputContainer,
  StyledLoginSignupContainer,
} from './Login-Signup.styled';
import CustomInputContainer from '../CustomInput/CustomInputContainer';
import { loginParams } from '../../params/signupLoginParams';
import getFormData from '../../Util/getFormData';
import validateForm from '../../Util/validateForm';
import { UserContext } from '../../context/UserContext';
import tryLogin from '../../Util/tryLogin';

const LoginContainer = () => {
  const { loginUser } = useContext(UserContext);
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
    // todo: login logic here with formData
    const login = tryLogin(formData);
    /* loginUser(MockUsers[1]); */
    setIsLoading(false);
  };

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
