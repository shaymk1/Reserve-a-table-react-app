
import "./navbar.css";
import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, navIcons } from "../../data";
import logo from "../../../src/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
 const [showLinks, setShowLinks] = useState(false);
 //to control the height of the navbar dynamically by using the height of the links
 const linksContainerRef = useRef(null);//for the links container
 const linksRef = useRef(null);//for the ul

  const toggleLinks = () => {
		setShowLinks(!showLinks);
	}
  // linksRef.current.getBoundingClientRect

  useEffect(() => {
		const linksHeight = linksContainerRef.current.scrollHeight;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);


  return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/" className="logo">
						<img src={logo} className="logo" alt="logo of Little Lemon restaurant" />
					</Link>

					<button
						className="nav-toggle"
						onClick={toggleLinks}
						alt="icon to toggle the navbar menu on small screen devices"
					>
						<FaBars />
					</button>
				</div>
				{/* <div className= {`${showLinks?"links-container show-container" :"links-container" }`}> */}
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, page, path,alt } = link;
							return (
								<li key={id}>
									<NavLink
										to={path}
										alt={alt}
										className={({ isActive }) => (isActive ? "active-nav" : "")}
										end
									>
										{page}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="nav-icons">
					{navIcons.map((navIcon) => {
						const { id, text, url, icon,alt } = navIcon;
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
		</nav>
	);
};

export default Navbar;
