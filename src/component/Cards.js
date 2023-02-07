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

const cards = [
	{
		id: 1,
		title: "Pasta",
		img: "../images/pasta-0.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: "$18.99",
	},

	{
		id: 2,
		title: "Greek Salad",
		img: "../images/greek-salad.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: "$5.99",
	},

	{
		id: 3,
		title: "Bruchetta",
		img: "../images/bruchetta-2.jpg",
		descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: " $6.99",
	},

	{
		id: 4,
		title: "Grilled Fish",
		img: "../images/grilled-fish-2.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		price: "$20.99",
	},
];

const Cards = () => {
	return (
		<div>
			{cards.map((card,id) => {
				return (
					<div className="wrapper">
						<div className="card-body">
							<div key={id}>
								{/* key={card.id} */}
								{/* <img alt="">{card.img}</img> */}
								<h3>{card.title}</h3>
								<p>{card.description}</p>
								<p>{card.price}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
