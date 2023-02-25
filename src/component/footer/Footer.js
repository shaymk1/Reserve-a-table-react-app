// import "./footer.css";
import "./footer.css"
import { links, socials } from "../../data";
import { Link} from "react-router-dom";
import logo from "../../../src/images/logo-white.png";
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {
	return (
		<>
			{/* <hr></hr> */}
			<footer>
				<div className=" footer__container">
					<div className="footer-links-container">
						<ul className="footer-links">
							{links.map((link) => {
								const { id, page, path, alt } = link;
								return (
									<li key={id}>
										<Link to={path} alt={alt}>
											{page}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="icons-container">
						{/* <h4>Contact Us</h4> */}
						<ul className="footer-icons">
							{socials.map((social) => {
								const { id, text, url, icon, alt } = social;
								return (
									<li key={id}>
										<Link to={url} alt={alt}>
											{icon}
										</Link>
										<Link to={url} alt={alt}>
											{text}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="btn-and-logo">
						<Link to="/" className="logo">
							<img src={logo} className="logo" alt="logo" />
						</Link>
						<Link to="/menu">
							<button className="btn-primary"> Reserve a Table </button>
						</Link>
					</div>
				</div>
				<small className="copyright">
					<AiOutlineCopyrightCircle /> all rights reserved{" "}
					<span className="little">Little</span>
					<span className="lemon">Lemon</span>
				</small>
			</footer>
		</>
	);
};
export default Footer;
