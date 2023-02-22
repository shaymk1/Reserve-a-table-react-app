// import "./footer.css";
import "./footer.css"
import { links, socials,legals } from "../../data";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/images/logo-white.png";
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {
	return (
		<>
			<hr></hr>
			<section className="footer__section">
				<div className="container footer__container">
					<div className="footer-links-container">
						<ul className="footer-links">
							{links.map((link) => {
								const { id, page, path } = link;
								return (
									<li key={id}>
										<NavLink to={path}>{page}</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="legal-container">
						<ul className="legal-links">
							{
						legals.map((legal)=>{
							const { id, page, path } = legal;
							return (
								<li key={id}>
									<NavLink to={path}>{page}</NavLink>
								</li>
							);
						})
						
						
						}</ul>
					</div>

					<div className="icons-container">
						<h4>Contact Us</h4>
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

					<div className="btn-and-logo">
						<Link to="/" className="logo">
							<img src={logo} className="logo" alt="logo" />
						</Link>
						<Link to="/menu">
							<button className="btn"> Reserve a Table </button>
						</Link>
					</div>
				</div>
				<small>
					<AiOutlineCopyrightCircle /> all rights reserved <span>Little</span>
					Lemon
				</small>
			</section>
		</>
	);
};
export default Footer;
