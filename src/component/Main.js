import React from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import Cards from "./Cards";
import Testimonials from "./Testimonials";
import About from "./About";

const Main = () => {
	return (
		<>
			<div>
				<Hero />
				<Menu />
				<Cards />
				<Testimonials/>
				< About/>
			</div>
		</>
	);
};

export default Main;
