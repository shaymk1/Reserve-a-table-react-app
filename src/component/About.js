import img1 from "../images/whiteman-3.jpg"
import img2 from "../images/whiteman-4.jpg";

const About = () => {
	return (
		<>
			<section className="about-section">
				<hr />
				<div className="about-container">
					<div className="about-content">
						<h2>About Us</h2>
						<p className="lorem">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							deleniti impedit est magni eveniet blanditiis nesciunt. Enim,
							assumenda? Facilis, asperiores quam non minus repellendus delectus
							id ducimus molestias pariatur quas. Tempore expedita placeat sint
						</p>
						<br></br>
						<p className="lorem">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							deleniti impedit est magni eveniet blanditiis nesciunt.
							praesentium omnis labore corrupti facilis aliquid soluta! Eaque
							perferendis aspernatur a veritatis, saepe omnis architecto dolorem
							veniam. Ipsum
						</p>
					</div>
					<div className="image-stack">
						<div className="about-images-top">
							<img
								src={img1}
								alt="man wearing glasses folding his arms and smiling "
								srcset=""
								className="image"
							/>
							<h4>Tiego Moon</h4>
						</div>
						<div className="about-images-bottom">
							<img
								src={img2}
								alt="man folding his arms and smiling "
								srcset=""
								className="image"
							/>
							<h4>Sebastian Drake</h4>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
