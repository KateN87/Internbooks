// ErrorContext.js
import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

type ErrorContextType = {
  error: CustomError | null;
  handleError: (customError: CustomError) => void;
  clearError: () => void;
};

export const ErrorContext = createContext<ErrorContextType>({
  error: { input: '', message: '' },
  handleError: () => {},
  clearError: () => {},
});

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<CustomError>({ input: '', message: '' });

  useEffect(() => {
    setError({ input: '', message: '' });
  }, [navigate]);

  const handleError = useCallback((customError: CustomError) => {
    setError(customError);
  }, []);

  const clearError = useCallback(() => {
    setError({ input: '', message: '' });
  }, []);

  return (
    <ErrorContext.Provider value={{ error, handleError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
