import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../src/images/logo.png";
// import { BsCartFill } from "react-icons/bs";
// import {FaTimes} from "react-icons/fa";
// import { HiOutlineMenu } from "react-icons/hi";
// import {useState} from "react";
import { navLinks } from "../../data";



const Navbar = () => {
	
	return (
		<>
			<header>
				<div className="logo-container">
					<a href="#Home">
						{/* require("../images/logo.png") */}
						<img
							src={logo}
							alt="little lemon logo "
							srcSet=""
							className="logo"
						/>
					</a>
				</div>
				<nav className="navbar">
					
					{navLinks.map((link) => {
						const { id, page, path } = link;
						return (
							<ul key={id} className="nav-items">
								<Link to={path} className="nav-links">
									{page}
								</Link>
							</ul>
						);
					})}
					<div className="right-menu-container">
						<a href="#Login" className="btn-secondary">
							Login
						</a>
						
					</div>
				</nav>

				
			</header>
		</>
	);
};
export default Navbar;


