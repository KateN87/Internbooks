import React, { createContext, useEffect, useState, useMemo } from 'react';

type UserContextType = {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType>({
	user: { id: 0, name: '', role: '' },
	setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User>({ id: 0, name: '', role: '' });

	// Change this to real users later
	const adminUser = useMemo(
		() => ({
			id: 1,
			role: 'admin',
			name: 'Kate',
		}),
		[]
	);

	const userUser = useMemo(
		() => ({
			id: 2,
			role: 'user',
			name: 'Ruth',
		}),
		[]
	);

	const noUser = useMemo(
		() => ({
			id: 0,
			role: '',
			name: '',
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
