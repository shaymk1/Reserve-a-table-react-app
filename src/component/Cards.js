// import React from "react";
// const cards = [
// 	{
// 		title: "Pasta",
// 		img: "../images/pasta-0.jpg",
// 		descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 		price: "$18.99",
// 	},

// 	{
// 		title: "Greek Salad",
// 		img: "../images/greek-salad.jpg",
// 		descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 		price: "$5.99",
// 	},

// 	{
// 		title: "Bruchetta",
// 		img: "../images/bruchetta-2.jpg",
// 		descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 		price: "$6.99",
// 	},

// 	{
// 		title: "Grilled Fish",
// 		img: "../images/grilled-fish-2.jpg",
// 		descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 		price: "$20.99",
// 	},
// ];

import img1 from "../images/pasta-0.jpg";
import img2 from "../images/greek-salad.jpg";
import img3 from "../images/pasta-7.jpeg";
import img4 from "../images/grilled-fish-2.jpg";

const cards = [
	{
		id: 1,
		title: "Pasta",
		img: img1,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: "$18.99",
	},

	{
		id: 2,
		title: "Greek Salad",
		img: img2,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: "$5.99",
	},

	{
		id: 3,
		title: "Bruchetta-Pasta",
		img: img3,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: " $16.99",
	},

	{
		id: 4,
		title: "Grilled Fish",
		img: img4,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: "$20.99",
	},
];

/*key={card.id}*/
/* <div key={id}> */

const Cards = () => {
	return (
		<div>
			{cards.map((card, id) => {
				return (
					// <div className="card-containers">
						<div className="card-container">
							<div className="card">
								<div className="card-body">
									<img src={card.img} alt="" className="card-image" />
									<h3>{card.title}</h3>
									<p>{card.description}</p>
									<p>{card.price}</p>
								</div>
							</div>
						</div>
					// </div>
				);
			})}
		</div>
	);
};

export default Cards;
