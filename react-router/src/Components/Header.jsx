import { Link, NavLink } from "react-router-dom";
import { ActiveStyle, ActiveAnim } from "./ActiveStyle";
import icon from "../assets/person-circle-outline.svg";

const Header = () => {
	return (
		<header>
			<Link className="site-logo" to="/">
				#VanLife
			</Link>
			<nav>
				<NavLink
					to="/host"
					end
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Host
				</NavLink>
				<NavLink
					to="/About"
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					About
				</NavLink>
				<NavLink
					to="/vans"
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Vans
				</NavLink>
				<NavLink
					to="/contacts"
					//className={({ isActive }) => (isActive ? "my-link" : null)}
					// className={(obj) => (obj.isActive ? "my-link" : null)}
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Contacts
				</NavLink>
				<Link
					to="/login"
					className={(obj) => (obj.isActive ? ActiveAnim : null)}
				>
					<img src={icon} className="login-icon" />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
