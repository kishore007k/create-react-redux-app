import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
	const activeStyle = { color: "#F15B2A" };
	return (
		<div>
			<h1>Oops! Page Not Found</h1>
			<button className="btn btn-lg btn-dark">
				<NavLink to="/" activeStyle={activeStyle} exact>
					Home
				</NavLink>
			</button>
		</div>
	);
};

export default PageNotFound;
