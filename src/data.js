import img1 from "./images/pasta-0.jpg";
import img2 from "./images/greek-salad.jpg";
import img3 from "./images/pasta-7.jpeg";
import img4 from "./images/griled-fish.jpg";

export const links = [
	{
		id: 1,
		page: "Home",
		path: "/",
	},

	// {
	// 	id: 2,
	// 	page: "About",
	// 	href: "/about",
	// },

	{
		id: 2,
		page: "Menu",
		path: "/menu",
	},

	{
		id: 3,
		page: "Reservation",
		path: "/reservation",
	},

	{
		id: 4,
		page: "Order",
		path: "/order",
	},
];

export const cards = [
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
		price: " $20.99",
	},
];
