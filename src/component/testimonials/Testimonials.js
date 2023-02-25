import "./testimonials.css";

import React from "react";
import { useState, useEffect } from "react";
// import {humans} from "../../data";
// import data from "../../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import personOne from "../../images/person-1.jpg";
import personTwo from "../../images/person-6.jpg";
import personThree from "../../images/person-3.jpg";
import personFour from "../../images/person-4.jpg";

const humans = [
	{
		id: 1,
		image: personOne,
		name: "Peter Kekae",
		title: "UX Designer",
		quote:
			"The Ubuntu hospitality they are famous for, really makes you feel at home",
		alt: "a white guy with a black fedora hat smiling",
		areaLabel: "slide 1 of 4",
	},
	{
		id: 2,
		image: personTwo,
		name: "Thato dekae",
		title: "Digital Marketing Specialist",
		quote:
			"I love it here, they have the most awesome grilled salmon in the whole of Chicago",
		alt: "a lady smiling with her eyes closed",
		areaLabel: "slide 2 of 4",
	},
	{
		id: 3,
		image: personThree,
		name: "Lerato Mokae",
		title: "product designer",
		quote:
			"I love their organic pasta with organic tomatoes on top, delicious!",
		alt: "a black guy with a black fedora hat looking up",
		areaLabel: "slide 3 of 4",
	},
	{
		id: 4,
		image: personFour,
		name: "Susan Andersen",
		title: "Java Developer",
		quote: "The atmosphere is very welcoming!",
		alt: "a lady with an orange blouse looking sideways",
		areaLabel: "slide 4 of 4",
	},
];

// export default people;

const Testimonials = () => {
	const [people, setPeople] = useState(humans);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const lastIndex = humans.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);
	
// automatic playing
	// useEffect(() => {
	// 	let slider = setInterval(() => {
	// 		setIndex(index + 1);
	// 	}, 5000);
	// 	return () => {
	// 		clearInterval(slider);
	// 	};
	// }, [index]);

	return (
		<>
			<hr></hr>
			<section
				className="testimonials__section"
				aria-label="testimonial carousel"
			>
				<h2>Testimonials</h2>
				<div className="section-center">
					{humans.map((human, personIndex) => {
						const { id, image, name, title, quote, alt, areaLabel } = human;
						let position = "nextSlide";
						if (personIndex === index) {
							position = "activeSlide";
						}
						if (
							personIndex === index - 1 ||
							(index === 0 && personIndex === humans.length - 1)
						) {
							position = "lastSlide";
						}
						return (
							<article
								key={id}
								className={position}
								area-label={areaLabel}
								role="group"
							>
								<img src={image} alt={alt} className="person-img" />
								<h3>{name}</h3>
								<p className="job-title">{title}</p>
								<p className="text">{quote}</p>
								<FaQuoteRight className="icon" />
							</article>
						);
					})}

					<button
						aria-label="previous"
						className="prev"
						onClick={() => setIndex(index - 1)}
					>
						<FiChevronLeft />
					</button>

					<button
						aria-label="next"
						className="next"
						onClick={() => setIndex(index + 1)}
					>
						<FiChevronRight />
					</button>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
