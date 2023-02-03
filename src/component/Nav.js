import React from "react";
import { BsCartFill } from "react-icons/bs";

const Nav = () => {
	return (
		<>
			<header>
				<div>
					<img src="../images/logo.png" alt="little lemon logo " srcset="" />
				</div>

				<nav>
					<ul>
						<li>
							<a href="#Home">Home</a>
							<a href="#Home">About</a>
							<a href="#Home">Menu</a>
							<a href="#Home">Reservations</a>
							<a href="#Home">Order</a>
						</li>
					</ul>

					<div>
						<a href="#Login">Login</a>
					</div>

					<div>
						<BsCartFill />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Nav;
