import React from "react";
import photo1 from "../img/vacation1.jpeg";
import photo2 from "../img/vacation2.jpeg";
import photo3 from "../img/vacation3.jpeg";
import Contact from "./Contact";

export default function Cards() {
	return (
		<div className="cards">
			<Contact image={photo1} rating="4" count="9" country="USA" info="Learn React today" price="300" />
			<Contact image={photo2} rating="3" count="53" country="Austria" info="Nice here" price="120" />
			<Contact image={photo3} rating="5" count="21" country="Switzerland" info="Feature packed!" price="246" />
		</div>
	);
}
