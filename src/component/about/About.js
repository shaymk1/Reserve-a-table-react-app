import React from "react";

import "./about.css";
import ownerImgOne from "../../images/woman-1.jpg";
import ownerImgTwo from "../../images/woman-2-old.jpg";
//import { FaHandPointer } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<hr></hr>
			<section>
				<h2 className="title">About Us</h2>
				<h4 className="sub-title">A Little Story..</h4>
				<div className="container about__container">
					<div className="about-content-container">
						<p>
							The first Little Lemon restuarant opened it's doors in 2010 in
							Cape Town, South Africa. It was a brain child of two best friends,
							who wanted to showcase <span className="ubuntu">Ubuntu</span> to
							2010 FIFA Soccer World Cup visitors. Ubuntu is a South African
							philosophy which means <span className="humanity">Humanity</span>.
						</p>
						<Link to="/menu">
							<button className="btn-primary"> Learn More About Us </button>
						</Link>
					</div>

					{/* images */}

					<div className="about-images-container">
						{/* images-1 */}
						<div className="image-container">
							<img
								className="about-image-1"
								src={ownerImgTwo}
								alt="A lady standing outside  at the balcony with her arms folded at night with her eyes closed smiling or just breathing "
							></img>
						
						
							{" "}
							<h4 className="img-title-1">Thandi Kekae </h4>
						</div>

						{/* content-images-2 */}

						{/* images-2 */}
						<div className="image-container">
							<img
								className="about-image-2"
								src={ownerImgOne}
								alt="A lady standing outside  at the balcony with her arms folded at night with her eyes closed smiling or just breathing "
							></img>
					
							{" "}
							<h4 className="img-title-1">Shay Brown </h4>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
