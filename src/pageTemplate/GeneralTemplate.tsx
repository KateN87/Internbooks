import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const GeneralTemplate = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default GeneralTemplate;
