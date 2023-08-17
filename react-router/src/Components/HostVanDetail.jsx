import { NavLink, Outlet } from "react-router-dom";
import { ActiveStyle } from "./ActiveStyle";

export default function HostVanDetail() {
	return (
		<>
			<h1>Host Van Detail Page</h1>
			<nav className="host-van-detail-nav">
				<NavLink
					to="."
					end
					style={(obj) => (obj.isActive ? ActiveStyle : null)}
				>
					Details
				</NavLink>
				<NavLink
					to="pricing"
					style={(obj) => (obj.isActive ? ActiveStyle : null)}
				>
					Pricing
				</NavLink>
				<NavLink
					to="photos"
					style={(obj) => (obj.isActive ? ActiveStyle : null)}
				>
					Photos
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
