import React from "react";

import star from "../img/airbnb-star.png";

export default function Contact(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}

	return (
		<div className="card--host">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img className="card--photo" src={`../img/${props.coverImg}`} alt="" />
			<div className="card--rating">
				<div className="card--rating-stars">
					<img className="card--rating-star-photo" src={star} alt="" />
					{props.stats.rating}
				</div>
				<div className="card--rating-count">({props.stats.reviewCount})</div>
				<div className="card--rating-country">{props.location}</div>
			</div>
			<div className="card--info">{props.title}</div>
			<div className="card--price">
				<b>From ${props.price}</b> / person
			</div>
		</div>
	);
}
