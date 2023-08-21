import { Outlet, NavLink } from "react-router-dom";
import { ActiveStyle } from "./ActiveStyle";

const HostLayout = () => {
	return (
		<>
			<nav className="host-nav">
				<NavLink
					to="/host"
					end
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Dashboard
				</NavLink>
				<NavLink
					to="/host/income"
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Income
				</NavLink>
				<NavLink
					to="/host/review"
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Review
				</NavLink>
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
