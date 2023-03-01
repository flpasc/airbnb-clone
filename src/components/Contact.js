import React from "react";

import star from "../img/airbnb-star.png";

export default function Contact(props) {
	const { image, rating, count, country, info, price } = props;

	return (
		<div className="card--host">
			<img className="card--photo" src={image} alt="" />
			<div className="card--rating">
				<div className="card--rating-stars">
					<img className="card--rating-star-photo" src={star} alt="" />
					{rating}
				</div>
				<div className="card--rating-count">({count})</div>
				<div className="card--rating-country">{country}</div>
			</div>
			<div className="card--info">{info}</div>
			<div className="card--price">
				<b>From ${price}</b> / person
			</div>
		</div>
	);
}
