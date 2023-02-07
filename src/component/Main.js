import React from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import Cards from "./Cards";


const Main = () => {
	

	return (
		<>
		
			<div>
				<Hero />
				<Menu />
				<Cards/>
				
			</div>
		</>
	);
};

export default Main;

// const Cards = () => {
// 	const [cards, setCards] = useState([
// 		{
// 			title: "Pasta",
// 			img: "../images/pasta-0.jpg",
// 			descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 			price: "$18.99",
// 		},

// 		{
// 			title: "Greek Salad",
// 			img: "../images/greek-salad.jpg",
// 			descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 			price: "$5.99",
// 		},

// 		{
// 			title: "Bruchetta",
// 			img: "../images/bruchetta-2.jpg",
// 			descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 			price: "$6.99",
// 		},

// 		{
// 			title: "Grilled Fish",
// 			img: "../images/grilled-fish-2.jpg",
// 			descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 			price: "$20.99",
// 		},
// 	]);
// 	return (
// 		<div>
// 			{cards.map((card) => {
// 				console.log(card);
// 			})}
// 		</div>
// 	);
// };
