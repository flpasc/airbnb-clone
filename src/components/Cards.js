import React from "react";
import Contact from "./Contact";
import dataArray from "../data";

export default function Cards() {
	const dataMapped = dataArray.map((host) => {
		return (
			<Contact
				key={host.id}
				title={host.title}
				img={host.coverImg}
				rating={host.stats.rating}
				reviewCount={host.stats.reviewCount}
				location={host.location}
				price={host.price}
				openSpots={host.openSpots}
			/>
		);
	});

	return <div className="cards">{dataMapped}</div>;
}
