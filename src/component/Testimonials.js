import img1 from "../images/blackman-2.jpg";
import img2 from "../images/woman-1.jpg";
import img3 from "../images/woman-2.jpg";

const testimonials = [
	{
		id: 1,
		title: "Lesego",
		img: img1,
		description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit."`,
		
	},

	{
		id: 2,
		title: "Amy",
		img: img2,
		description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit."`,
		
	},

	{
		id: 3,
		title: "Thandi",
		img: img3,
		description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit."`,
		
	},
];

const Testimonials = () => {
	return (
		<>
			<section className="testimonial-section">
				<hr />
				<div className="center">
					<h3>Testimonials</h3>
				</div>

				<div className="row">
					{testimonials.map((testimonial, id) => {
						return (
							<div key={id}>
								<div className="column">
									<div className="single-card-testimonials">
										<div className="card">
											<div className="card-content-testimonials">
												<img
													src={testimonial.img}
													alt=""
													className="card-image-testimonials"
												/>
												<h3>{testimonial.title}</h3>
												<p>{testimonial.description}</p>
												{/* <p className="price">{testimonial.stars}</p> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Testimonials;
