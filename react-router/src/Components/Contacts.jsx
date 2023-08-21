import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../App.css"; // Import your CSS file for styling

const Contacts = () => {
	return (
		<div className="contacts-container">
			<h1>Contact Information</h1>
			<ul className="contacts-list">
				<li className="contact-item">
					<Link to="https://github.com/NelsonMALGAS">
						<GitHubIcon />
					</Link>
				</li>
				<li className="contact-item">
					<a href="tel:0627500236">
						<LocalPhoneIcon />
					</a>
				</li>
				<li className="contact-item">
					<Link to="https://twitter.com/yourusername">
						<TwitterIcon />
					</Link>
				</li>
				<li className="contact-item">
					<Link to="https://linkedin.com/in/yourusername">
						<LinkedInIcon />
					</Link>
				</li>
				<li className="contact-item">
					<Link to="https://facebook.com/yourusername">
						<FacebookIcon />
					</Link>
				</li>
				<li className="contact-item">
					<Link to="mailto:zmalgas69@gmail.com">
						<MailIcon />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Contacts;
