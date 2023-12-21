import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import AdminTemplate from '../pageTemplate/AdminTemplate';
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
			</Route>
			<Route path='*' element={<NoRoute />} />
		</Routes>
	);
};

export default AdminNavigation;
