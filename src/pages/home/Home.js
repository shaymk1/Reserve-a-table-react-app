import "./home.css";
//import { Outlet } from "react-router-dom";
import Hero from "../../component/hero/Hero";
import Footer from "../../component/footer/Footer";
import Cards from "../../component/cards/Cards";
import Testimonials from "../../component/testimonials/Testimonials";
import About from "../../component/about/About";

const Home = () => {
	return (
		<div className="home">
			{/* <Outlet /> */}
			<Hero />
			<Cards />
			<About />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Home;
