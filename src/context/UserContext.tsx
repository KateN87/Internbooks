import React, { createContext, useEffect, useState, useMemo } from 'react';

type UserContextType = {
	user: User;
};

export const UserContext = createContext<UserContextType>({
	user: { name: '', role: '' },
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User>({ name: '', role: '' });

	// Change this to real users later
	const adminUser = useMemo(
		() => ({
			role: 'admin',
			name: 'Kate',
		}),
		[]
	);

	const userUser = useMemo(
		() => ({
			role: 'user',
			name: 'Ruth',
		}),
		[]
	);

	/* 	useEffect(() => {
		setUser(adminUser);
	}, [adminUser, userUser]); */

	const value = useMemo(
		() => ({
			user,
		}),
		[user]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
