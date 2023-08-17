import { Link, Outlet, NavLink } from "react-router-dom";
import { ActiveStyle } from "./ActiveStyle";

const HostLayout = () => {
	return (
		<>
			<nav className="host-nav">
				<Link to="/host/">Dashboard</Link>
				<Link to="/host/income">Income</Link>
				<Link to="/host/review">Review</Link>
				<NavLink
					to="/host/vans"
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Vans
				</NavLink>
			</nav>

			<Outlet />
		</>
	);
};

export default HostLayout;
