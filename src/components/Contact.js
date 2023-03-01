import React from "react";

import star from "../img/airbnb-star.png";

export default function Contact(props) {
	const { id, img, title, description, price, rating, reviewCount, location, openSpots } = props;

	return (
		<div className="card--host">
			{openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
			<img className="card--photo" src={`../img/${img}`} alt="" />
			<div className="card--rating">
				<div className="card--rating-stars">
					<img className="card--rating-star-photo" src={star} alt="" />
					{rating}
				</div>
				<div className="card--rating-count">({reviewCount})</div>
				<div className="card--rating-country">{location}</div>
			</div>
			<div className="card--info">{title}</div>
			<div className="card--price">
				<b>From ${price}</b> / person
			</div>
		</div>
	);
}
