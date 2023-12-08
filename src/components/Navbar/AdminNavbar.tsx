import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>AdminNavbar</h1>
			<button onClick={() => navigate('/')}>Home</button>
			<button onClick={() => navigate('/profile')}>Profile</button>
			<button onClick={() => navigate('/inventory')}>Inventory</button>
			<button onClick={() => navigate('/orders')}>Orders</button>
		</div>
	);
};

export default AdminNavbar;
