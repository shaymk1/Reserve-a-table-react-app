import "./home.css";
import { Outlet } from "react-router-dom";
import Hero from "../../component/hero/Hero";
//import Specials from "../../component/specials/Specials";
//import Testimonials from "../../component/testimonials/Testimonials";
//import About from "../../component/about/About"

const Home = () => {
	return (
		<div>
			<Outlet />
			<Hero />
			 {/* <Specials/>  */}
			{/* <Testimonials/>
            <About/>  */}
		</div>
	);
};

export default Home;
