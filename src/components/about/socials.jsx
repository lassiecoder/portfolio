import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faMedium,
	faInstagram,
	faDev,
	faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedinIn}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Twitter</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.medium}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faMedium}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Medium</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.dev}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faDev}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on DEV Community</div>
				</a>
			</div>
			

			<div className="social">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Instagram</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
