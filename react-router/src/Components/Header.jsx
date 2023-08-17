import { Link, NavLink } from "react-router-dom";
import { ActiveStyle } from "./ActiveStyle";

const Header = () => {
	return (
		<header>
			<Link className="site-logo" to="/">
				#VanLife
			</Link>
			<nav>
				<Link to="/host">Host</Link>
				<Link to="/About">About</Link>
				<Link to="/vans">Vans</Link>
				<NavLink
					to="/contacts"
					//className={({ isActive }) => (isActive ? "my-link" : null)}
					// className={(obj) => (obj.isActive ? "my-link" : null)}
					style={({ isActive }) => (isActive ? ActiveStyle : null)}
				>
					Contacts
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
