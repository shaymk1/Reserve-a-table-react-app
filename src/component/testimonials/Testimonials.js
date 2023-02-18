import "./testimonials.css";

import React from "react";
//import { useState, useEffect } from "react";
import {people} from "../../data";
// import data from "../../data";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
	//const [people, setPeople] = useState(people);
	// const[index,setIndex] = useState(0)
	return (
		<>
			<hr></hr>
			<section className="section">
				<h2>Testimonials</h2>
				<div className="container section__container">
					<div className="cards">
						{people.map((person, personIndex) => {
							const { id, image, name, title, quote } = person;
							return (
								<div key={id} className="card">
									<img src={image} alt={name} className="person-img" />
									<h4 className="title">{name}</h4>
									<p className="job">{title}</p>
									<p className="text">{quote}</p>
									<FaQuoteRight className="icon" />
								</div>
							);
						})}
					</div>


				</div>
			</section>
		</>
	);
};

export default Testimonials;
