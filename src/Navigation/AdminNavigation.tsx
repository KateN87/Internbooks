import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import AdminTemplate from '../pageTemplate/AdminTemplate';
import AdminHome from '../pages/Home/AdminHome/AdminHome';
import Inventory from '../pages/Inventory/Inventory';
import Orders from '../pages/Orders/Orders';
import NoRoute from '../pages/NoRoute';

const AdminNavigation = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminTemplate />}>
				<Route path='/' element={<Inventory />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='*' element={<NoRoute />} />
			</Route>
		</Routes>
	);
};

export default AdminNavigation;
