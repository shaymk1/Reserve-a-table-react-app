import "./cards.css";
import { Link } from "react-router-dom";

import { cards } from "../../data";
const Cards = () => {
	return (
		<>
			<hr></hr>
			<section className="cards__section">
				<h2>Order for delivery</h2>
				<div className="container card__container">
					<div className="cards">
						{cards.map((card) => {
							const { id, title, img, description, price, alt } = card;
							return (
								<div key={id} className="single-card">
									<img src={img} alt={alt} className="card-image" />

									<h3>{title}</h3>
									<p>{description}</p>
									<p className="price">{price}</p>
									<Link to="/order" className="btn">
										Place Order{" "}
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};
export default Cards;
