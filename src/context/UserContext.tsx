import React, { createContext, useEffect, useState, useMemo } from 'react';

type User = {
	role: string;
	name: string;
} | null;

type UserContextType = {
	user: User;
};

export const UserContext = createContext<UserContextType>({ user: null });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User>(null);

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

	useEffect(() => {
		setUser(userUser);
	}, [adminUser, userUser]);

	const value = useMemo(
		() => ({
			user,
		}),
		[user]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
