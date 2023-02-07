import React from "react";

const Hero = () => {
	return (
		<>
			<div className="container">
				<div className="hero-content">
					<h1>
						Welcome to Little<span className="lemon"> Lemon</span> , Chicago
					</h1>
					<h2>Today 'Special</h2>
					<p>
						Pastaranian-Our most popular pasta dish with a with a Mediterranean
						twist. It is made out of the most delicious cheddar cheese flown
						especially from Greece. Today, you can get it with a{" "}
						<span className="free">Free</span> soft drink of your choice.
						Perfect for lunch.{" "}
					</p>
					<a href="#Reserve a table" className="btn">
						Reserve A Table
					</a>
				</div>

				<div>
					{/* className="hero-image-container" */}
					<img
						src={require("../images/pasta-3.jpg")}
						alt=""
						srcSet=""
						className="hero-image"
					/>
				</div>
				<div className="btn-container">
					{/* <a href="#Login" className="btn-hero">
						Reserve a table
					</a> */}
				</div>
			</div>
		</>
	);
};

export default Hero;
