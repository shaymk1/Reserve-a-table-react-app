import React from "react";
// import Image from "../images/logo.png";
// import ProfilePicture from "./Images/Profile_picture.jpeg";
import { BsCartFill } from "react-icons/bs";

const Nav = () => {
	return (
		<>
			<header>
				<nav className="nav">
					<div className="logo-container">
						<a href="#Home">
							<img
								src={require("../images/logo.png")}
								alt="little lemon logo "
								srcSet=""
								className="logo"
							/>
						</a>
					</div>

					<ul className="nav-items">
						<li className="nav-list">
							<a href="#Home" className="nav-link">
								Home
							</a>
						</li>

						<li className="nav-list">
							<a href="#About" className="nav-link">
								About
							</a>
						</li>

						<li className="nav-list">
							<a href="#menu" className="nav-link">
								Menu
							</a>
						</li>

						<li className="nav-list">
							<a href="#Reservations" className="nav-link">
								Reservations
							</a>
						</li>

						<li className="nav-list">
							<a href="#Order" className="nav-link">
								Order
							</a>
						</li>
					</ul>

					<div>
						<a href="#Login" className="btn">
							Login
						</a>
					</div>

					<div className="icon">
						<BsCartFill />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Nav;
