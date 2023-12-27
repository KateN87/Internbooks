import React, { createContext, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type UserContextType = {
  user: User | null;
  loginUser: (userInfo: User) => void;
  logoutUser: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const loginUser = useCallback(
    (userInfo: User) => {
      setUser(userInfo);
      navigate('/');
    },
    [navigate]
  );

  const logoutUser = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
      setUser,
    }),
    [user, loginUser, logoutUser, setUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
