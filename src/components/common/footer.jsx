import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	const [lastUpdated, setLastUpdated] = useState("");

	useEffect(() => {
		// Fetch the last modified date of your project here
		const lastModifiedDate = new Date(document.lastModified);
		// Format the date as needed (e.g., "Month Day, Year")
		const formattedDate = lastModifiedDate.toLocaleDateString("en-US", {
		  year: "numeric",
		  month: "long",
		  day: "numeric"
		});
		// Set the formatted date to the state
		setLastUpdated(formattedDate);
	}, []);



	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						Last updated at {lastUpdated} | <a href="https://github.com/lassiecoder" target="_blank">@lassiecoder</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
