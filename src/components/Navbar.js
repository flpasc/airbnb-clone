import React from "react";
import airbnbLogo from "../img/airbnb-logo.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<img src={airbnbLogo} alt="airbnb" className="navbar--logo" />
			<h2 className="navbar--logo-text">airbnb</h2>
		</nav>
	);
}
