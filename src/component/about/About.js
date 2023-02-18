import React from "react";

import "./about.css";
import ownerImgOne from "../../images/woman-1.jpg";
import ownerImgTwo from "../../images/woman-2-old.jpg";



const About = () => {
	return (
		<>
			<hr></hr>
			<section>
				<h2 >About Us</h2>

				<div className="container about__container">
					<div className="about-content-container">
						<h4 className="sub-title">Our Humble Beginnings..</h4>
						<p>
							The first Little Lemon restuarant opened it's doors in 2010 in
							Cape Town, South Africa. It was a brain child of two best friends,
							who wanted to showcase <span className="italic">Ubuntu</span> to
							2010 FIFA Soccer World Cup visitors. Ubuntu is a South African
							philosophy which means <span className="italic">Humanity</span>.
						</p>
					</div>

					{/* images */}

					<div className="about-images-container">
						{/* images-1 */}
						<div className="image-container">
							<img
								className="about-image-1"
								src={ownerImgTwo}
								alt="A lady standing outside  at the balcony with her arms folded at night with her eyes closed smiling or just breathing "
							></img>{" "}
							<h4 className="img-title">Thandi Kekae </h4>
						</div>

						{/* content-images-2 */}

						{/* images-2 */}

						<div className="image-container">
							<img
								className="about-image-2"
								src={ownerImgOne}
								alt="A lady standing outside  at the balcony with her arms folded at night with her eyes closed smiling or just breathing "
							></img>{" "}
							<h4 className="img-title">Shay Brown </h4>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
