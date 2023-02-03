import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
		<>
			<div>
				<ul>
					<li>
						<a href="#Home">Home</a>
						<a href="#Home">About</a>
						<a href="#Home">Menu</a>
						<a href="#Home">Reservations</a>
						<a href="#Home">Order</a>
					</li>
				</ul>
			</div>

			<div>
				<h1>Contact Us</h1>
				<BsFacebook />
				<BsTwitter />
				<AiFillInstagram />
			</div>

			<div>
				<div>
					<img src="../images/logo.png" alt="little lemon logo " srcset="" />
				</div>
				<div>
					<a href="#Login">Login</a>
				</div>
			</div>
		</>
	);
}

export default Footer
