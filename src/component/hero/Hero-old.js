import "./hero.css";
import heroImg from "../../images/pasta-0.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<section>
				<div className="container hero__container">
					<div className="hero-content">
						<h1>
							Welcome to Little<span className="lemon"> Lemon</span> , Chicago
						</h1>
						<h2>Today 'Special</h2>
						<p>
							Pastaranian, our most popular pasta dish with a with a
							Mediterranean twist. It is made out of the most delicious cheddar
							cheese flown especially from Greece. Today, you can get it with a{" "}
							free soft drink of your choice. Perfect for lunch.{" "}
						</p>
						<Link to="/reservations" className="btn">
							Reserve A Table{" "}
						</Link>
						
					</div>

					<div className="hero-image-container">
						<img
							src={heroImg}
							alt="pasta on a plate with sea food and a fork and knife"
							className="hero-image"
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default Hero;
