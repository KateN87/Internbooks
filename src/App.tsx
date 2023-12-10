import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import AdminHome from './pages/Home/AdminHome';
import AdminTemplate from './pageTemplate/AdminTemplate';
import Home from './pages/Home/Home';
import GeneralTemplate from './pageTemplate/GeneralTemplate';
import Profile from './pages/Profile/Profile';
import Book from './pages/Book/Book';
import NoRoute from './pages/NoRoute';
import Inventory from './pages/Inventory/Inventory';
import Orders from './pages/Orders/Orders';
import { GlobalStyle } from './Global.styled';
import { UserContext } from './context/UserContext';
import Login from './pages/LoginSignup/Login';
import Signup from './pages/LoginSignup/Signup';

const App = () => {
	const { user } = useContext(UserContext);
	console.log('USER: ', user);

	return (
		<div className='app'>
			<GlobalStyle />
			<Routes>
				{!user && (
					<Route path='/' element={<GeneralTemplate />}>
						<Route path='/' element={<Home />} />
						<Route path='/book/:bookId' element={<Book />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
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
		</div>
	);
};

export default App;
