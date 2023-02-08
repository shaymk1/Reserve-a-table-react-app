import React from "react";

const Menu = () => {
	return (
		<>
			<section>
				<h2>Order For Delivery</h2>
				<div id="menu-outer">
					<div className="table">
						<ul className="menu-items">
							<li className="menu-list">
								<a href="#Lunch" className="btn">
									Lunch
								</a>
							</li>
							<li className="menu-list">
								<a href="#Mains" className="btn">
									Mains
								</a>
							</li>
							<li className="menu-list">
								<a href="#Reserve a table" className="btn">
									Desserts
								</a>
							</li>
							<li className="menu-list">
								<a href="#A LA Carte" className="btn">
									A LA Carte
								</a>
							</li>
							<li className="menu-list">
								<a href="#Specials" className="btn">
									Specials
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		
		</>
	);
};

export default Menu;
