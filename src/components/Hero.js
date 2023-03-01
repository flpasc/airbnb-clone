import React from "react";
import pictures from "../img/Screenshot 2023-03-01 at 11.27.48.png";

export default function Hero() {
	return (
		<div className="hero">
			<img className="hero--photo" src={pictures} alt="" />
			<h1 className="hero--heading">Online Experiences</h1>
			<p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home</p>
		</div>
	);
}
