import { Link } from "react-router-dom";
const HostNav = () => {
	return (
		<nav className="host">
			<Link to="/host/income">Income</Link>
			<Link to="/host/review">Review</Link>
		</nav>
	);
};

export default HostNav;
