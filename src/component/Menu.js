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
			{/*///////////////////// cards ///////////// */}

		

			{/* <div className="card-container">
					<div className="grid"> */}
			{/* card-1 */}
			{/* <div className="card">
							<div className="card-image">
								<img src={require("../images/pasta-0.jpg")} alt="" srcset="" />
							</div>

							<div className="card-content">
								<h3>Pasta</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p>$ 18.99</p>
							</div>
						</div> */}

			{/* card-2 */}
			{/* <div className="card">
							<div className="card-container">
								<div className="card-image">
									<img
										src={require("../images/greek-salad-2.jpg")}
										alt=""
										srcset=""
									/>
								</div>

								<div className="card-content">
									<h3>Greek Salad</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Facilis deleniti nostrum necessitatibus facere nobis a
										doloribus eius voluptate, ullam rem maiores libero pariatur
										voluptatem unde adipisci nam sunt sed optio.
									</p>
									<p>$ 9.99</p>
								</div>
							</div>
						</div> */}

			{/* card-3 */}
			{/* <div className="card">
							<div className="card-container">
								<div className="card-image">
									<img
										src={require("../images/bruchetta-2.jpg")}
										alt=""
										srcset=""
									/>
								</div>

								<div className="card-content">
									<h3>Bruchetta</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Facilis deleniti nostrum necessitatibus facere nobis a
										doloribus eius voluptate, ullam rem maiores libero pariatur
										voluptatem unde adipisci nam sunt sed optio.
									</p>
									<p>$ 9.99</p>
								</div>
							</div>
						</div> */}

			{/* card-4 */}
			{/* <div className="card">
							<div className="card-container">
								<div className="card-image">
									<img
										src={require("../images/griled-fish.jpg")}
										alt=""
										srcset=""
									/>
								</div>

								<div className="card-content">
									<h3>Pasta</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Facilis deleniti nostrum necessitatibus facere nobis a
										doloribus eius voluptate, ullam rem maiores libero pariatur
										voluptatem unde adipisci nam sunt sed optio.
									</p>
									<p>$ 25.99</p>
								</div>
							</div>
						</div>
					</div>
				</div> */}
		</>
	);
};

export default Menu;
