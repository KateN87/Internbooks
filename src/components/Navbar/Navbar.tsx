import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Navbar</h1>
			<button onClick={() => navigate("/")}>Home</button>
			<button onClick={() => navigate("/profile")}>Profile</button>
			<button onClick={() => navigate("/book/2")}>Book</button>
		</div>
	);
};

export default Navbar;
