import React, { createContext, useEffect, useState, useMemo } from 'react';

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType>({
  user: {
    id: 0,
    name: '',
    role: '',
    email: '',
    phone: '',
    address: { street: '', suite: '', city: '', zipcode: 0 },
  },
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    role: '',
    email: '',
    phone: '',
    address: { street: '', suite: '', city: '', zipcode: 0 },
  });

  // Change this to real users later
  const adminUser = useMemo(
    () => ({
      id: 1,
      role: 'admin',
      name: 'Kate',
      email: 'kate@kate.com',
      phone: '123456789',
      address: {
        street: 'storgatan',
        suite: '2A',
        city: 'Gothenburg',
        zipcode: 12312,
      },
    }),
    []
  );

  const userUser = useMemo(
    () => ({
      id: 2,
      role: 'user',
      name: 'Ruth',
      email: 'ruth@ruth.com',
      phone: '435345345',
      address: {
        street: 'lillgatan',
        suite: '1A',
        city: 'kattenburg',
        zipcode: 45678,
      },
    }),
    []
  );

  const noUser = useMemo(
    () => ({
      id: 0,
      role: '',
      name: '',
      email: '',
      phone: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: 0,
      },
    }),
    []
  );

  useEffect(() => {
    setUser(noUser);
  }, [adminUser, userUser, noUser]);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
