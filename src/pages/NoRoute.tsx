import { useNavigate } from "react-router-dom";

export const NoRoute = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>404 page not found</h1>
			<button onClick={() => navigate("/")}>Home</button>
		</div>
	);
};
