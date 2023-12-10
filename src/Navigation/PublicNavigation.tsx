import { Route, Routes } from 'react-router-dom';
import GeneralTemplate from '../pageTemplate/GeneralTemplate';
import Home from '../pages/Home/Home';
import Book from '../pages/Book/Book';
import Login from '../pages/LoginSignup/Login';
import Signup from '../pages/LoginSignup/Signup';
import NoRoute from '../pages/NoRoute';

const PublicNavigation = () => {
	return (
		<Routes>
			<Route path='/' element={<GeneralTemplate />}>
				<Route path='/' element={<Home />} />
				<Route path='/book/:bookId' element={<Book />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='*' element={<NoRoute />} />
			</Route>
		</Routes>
	);
};

export default PublicNavigation;
