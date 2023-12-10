import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/Navbar/AdminNavbar';

const AdminTemplate = () => {
	return (
		<>
			<AdminNavbar />
			<Outlet />
		</>
	);
};

export default AdminTemplate;
