import  "./about.css"
import ownerImgOne from "../../images/woman-1.jpg";
import ownerImgTwo from "../../images/woman-2.jpg";
import {FaHandPointer} from "react-icons/fa"
import { Link } from "react-router-dom";

const About = () => {
  return (
		<>
			<hr></hr>
			<section>
				<h2 className="title">About Us</h2>
				<h4 className="sub-title">A Little Story..</h4>
				<div className="container about__container">
					<div className="about-content">
						<div className="about-para">
							<p>
								The first Little Lemon restuarant opened it's doors in 2010 in
								Cape Town, South Africa. It was a brain child of two best
								friends, who wanted to showcase{" "}
								<span className="ubuntu">Ubuntu</span> to 2010 FIFA Soccer World
								Cup visitors. Ubuntu is a South African philosophy which means{" "}
								<span className="humanity">Humanity</span>.
							</p>
							{/* <p>
								{" "}
								Ubuntu has now been woven into the culture and hospitality of
								all Little Lemon Chain Restaurants around the world , because we
								celebrate humanity and human spirit everywhere! Our Little Lemon
								Chicago branch opened its doors in 2018 and it's has been
								serving millions of Chicago residents with beautiful delicious
								dishes!
							</p>{" "} */}
							<Link to="/menu">
								<button className="btn-primary"> Learn More About Us </button>
							</Link>
						</div>

						<div className="about-images-container">
							<div className="flex-img-and-title">
								<div className="flex-icon and-title">
									{" "}
									<h4 className="img-title-1">
										Thandi Kekae{" "}
										<span className="img-pointer">
											<FaHandPointer className="icon-pointer-1" />
										</span>
									</h4>
								</div>
							</div>

							<div className="overlap-1">
								<img
									className="about-image-2"
									src={ownerImgTwo}
									alt="A lady standing outside  at the balcony with her arms folded at night with her eyes closed smiling or just breathing "
								></img>
							</div>

							<div className="flex-img-and-title">
								<div className="flex-icon and-title">
									<h4 className="img-title-2">
										Shay Brown{" "}
										<span className="img-pointer">
											<FaHandPointer className="icon-pointer-2" />
										</span>
									</h4>
								</div>
							</div>
							<div className="overlap-2">
								<img
									className="about-image-1"
									src={ownerImgOne}
									alt="smiling lady with her hair tied up and a white t-shirt "
								></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default About