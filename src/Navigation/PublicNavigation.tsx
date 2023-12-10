import { Route, Routes } from 'react-router-dom';
import GeneralTemplate from '../pageTemplate/GeneralTemplate';
import Home from '../pages/Home/Home';
import Book from '../pages/Book/Book';
import Login from '../pages/LoginSignup/Login';
import Signup from '../pages/LoginSignup/Signup';
import NoRoute from '../pages/NoRoute';
import AdminTemplate from '../pageTemplate/AdminTemplate';
import LargeTemplate from '../pageTemplate/LargeTemplate';

const PublicNavigation = () => {
	return (
		<Routes>
			<Route path='/' element={<GeneralTemplate />}>
				<Route path='/' element={<Home />} />
				<Route path='/book/:bookId' element={<Book />} />
			</Route>
			<Route path='/login' element={<LargeTemplate />}>
				<Route path='/login' element={<Login />} />
			</Route>
			<Route path='/signup' element={<LargeTemplate />}>
				<Route path='/signup' element={<Signup />} />
			</Route>
			<Route path='*' element={<NoRoute />} />
		</Routes>
	);
};

export default PublicNavigation;
