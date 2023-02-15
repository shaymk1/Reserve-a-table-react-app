
import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/images/logo.png";
// import { BsCartFill } from "react-icons/bs";
 
import {FaTimes} from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import {useState} from "react";
import { links } from "../../data";
import "./navbar.css";

const Navbar = () => {
	const[isNavShowing, setIsNavShowing] = useState(false);
	return (
		<>
			<nav>
				<div className="container nav__container">
					<Link to="/" className="logo">
						<img
							src={logo}
							alt="little lemon logo "
							srcSet=""
							className="logo"
						/>
					</Link>
					<ul
						className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
					>
						{links.map((link) => {
							const { id, page, path } = link;
							return (
								<li key={id}>
									<NavLink
										to={path}
										className={({ isActive }) => (isActive ? "active-nav" : "")}
									>
										{page}
									</NavLink>
								</li>
							);
						})}
					</ul>
					{/* <a href="#Login" className="btn-secondary">
						Login
					</a> */}

					<button className="nav__toggle-btn" onClick={() => setIsNavShowing (!isNavShowing)}>
						{
							isNavShowing ? <FaTimes/> : <HiOutlineMenu /> 
						}
						{/* */}
					</button>
				</div>

				{/* <button className="">
					<FaTimes size={25} />
				</button> */}
			</nav>

			{/* <header>
				<div className="logo-container">
			// 		<a href="#Home"> */}
			{/* require("../images/logo.png") */}
			{/* <img
							src={logo}
							alt="little lemon logo "
							srcSet=""
							className="logo"
						/>
					</a>
				</div>
				<nav className="navbar">
					{Links.map((link) => {
						const { id, page, path } = link;
						return (
							<ul key={id} className="nav-items">
								<Link to={path} className="nav-links">
									{page}
								</Link>
							</ul>
						);
					})} */}

			{/* <div className="right-menu-container">
						<button href="#Login" className="btn-secondary">
							Login
						</button>
					</div>
				</nav>
			</header> */}
		</>
	);
};
export default Navbar;
