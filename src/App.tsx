import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import AdminHome from './pages/Home/AdminHome';
import AdminTemplate from './pageTemplate/AdminTemplate';
import Home from './pages/Home/Home';
import GeneralTemplate from './pageTemplate/GeneralTemplate';
import Profile from './pages/Profile/Profile';
import Book from './pages/Book/Book';
import NoRoute from './pages/NoRoute';
import Inventory from './pages/Inventory/Inventory';
import Orders from './pages/Orders/Orders';

function App() {
	const [user, setUser] = useState({
		role: '',
		name: '',
	});

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

	return (
		<>
			<Routes>
				{!user && (
					<Route path='/' element={<GeneralTemplate />}>
						<Route path='/' element={<Home />} />
						<Route path='/book/:bookId' element={<Book />} />
					</Route>
				)}

				{user && user.role === 'admin' && (
					<Route path='/' element={<AdminTemplate />}>
						<Route path='/' element={<AdminHome />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/inventory' element={<Inventory />} />
						<Route path='/orders' element={<Orders />} />
					</Route>
				)}

				{user && user.role === 'user' && (
					<Route path='/' element={<GeneralTemplate />}>
						<Route path='/' element={<Home />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/book/:bookId' element={<Book />} />
					</Route>
				)}

				<Route path='*' element={<NoRoute />} />
			</Routes>
		</>
	);
}

export default App;
