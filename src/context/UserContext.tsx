import React, { createContext, useState, useMemo, useCallback } from 'react';

type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const loginUser = useCallback((userInfo: User) => {
    setUser(userInfo);
  }, []);

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
