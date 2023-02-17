import "./cards.css";
import { Link } from "react-router-dom";

import { cards } from "../../data";
const Cards = () => {
	return (
		<>
			<section>
				<div className="container card__container">
					<div className="cards">
						{cards.map((card) => {
							const { id, title, img, description, price } = card;
							return (
								<div key={id} className="single-card">
									
									<img src={img} alt="" className="card-image" />
									
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
