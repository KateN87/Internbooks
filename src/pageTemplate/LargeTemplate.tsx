import { Outlet } from 'react-router-dom';
import LargeNavbar from '../components/Navbar/LargeNavbar';

const LargeTemplate = () => {
	return (
		<>
			<LargeNavbar />
			<Outlet />
		</>
	);
};

export default LargeTemplate;
