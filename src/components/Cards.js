import React from "react";
import Contact from "./Contact";
import dataArray from "../data";

export default function Cards() {
	const dataMapped = dataArray.map((host) => {
		// alternative use:  {...host} instead of item={host}
		return <Contact key={host.id} {...host} />;
	});

	return <div className="cards">{dataMapped}</div>;
}
