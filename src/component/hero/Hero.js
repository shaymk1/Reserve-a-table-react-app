import "./hero.css"
import heroImg from "../../images/pasta-0.jpg";
import { Link } from "react-router-dom";

import React from "react";

const Hero = () => {
	return (
		<>
			<section>
				<div className="container">
					<h1>
						{" "}
						Welcome to Little<span className="lemon"> Lemon</span> , Chicago
					</h1>
					<div className="header__content">
						<div>
							<p>
								Pastaranian, our most popular pasta dish with a with a
								Mediterranean twist. It is made out of the most delicious
								cheddar cheese flown especially from Greece. Today, you can get
								it with a free soft drink of your choice. Perfect for lunch.{" "}
							</p>

							<p className="price"> $12.99</p>
							<Link to="/menu">
								<button className="btn"> Reserve a Table </button>
							</Link>
						</div>
						<div className="hero-img-container">
							<img
								className="hero-img"
								src={heroImg}
								alt="pasta with seafood on a plate with fork and knive on the side"
							></img>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
