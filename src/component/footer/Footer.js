import "./footer.css";
import { links, socials } from "../../data";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<hr></hr>
			<section className="section">
				<div className="footer">
					<div className="links-container">
						<ul className="footer-links">
							{links.map((link) => {
								const { id, page, path } = link;
								return (
									<li key={id}>
										<NavLink
											to={path}
											className={({ isActive }) =>
												isActive ? "active-nav" : ""
											}
											end
										>
											{page}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="icons-container">
						<ul className="footer-icons">
							{socials.map((social) => {
								const { id, text, url, icon } = social;
								return (
									<li key={id}>
										<Link to={url}>{icon}</Link>
										<Link to={url}>{text}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
export default Footer;
