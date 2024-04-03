import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Typewriter from 'typewriter-effect';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
// import ContactForm from "../components/form/form";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							<div className="header-container">
								<div className="title-box">
									<p className="text">I'm open to</p>
								</div>
								<div className="subtitle-box">
									<p className="text"><Typewriter
									options={{
										strings: ['Opportunities', 'Suggestions', 'Collaboration', 'Feedback', 'Networking'],
										autoStart: true,
										pauseFor: 100,
										loop: true,
									}}
								/>  </p>
								</div>
							</div>							
						</div>

						<div className="subtitle contact-subtitle">
						Thank you for expressing your interest in reaching out to me. I'm excited about new opportunities, feedback/suggestions, collaborations, and networking.
						<br />
						For specific inquiries or comments, please don't hesitate to email me directly at &nbsp;{" "}
						<a href={`mailto:${INFO.main.email}`}>
							{INFO.main.email}
						</a>. I strive to respond to all messages within 24 hours, although it may take a bit longer during busy periods.
						<br />
						Additionally, if you prefer connecting via social media, you can find me on &nbsp;{" "}
						<a
							href={INFO.socials.instagram}
							target="_blank" rel="noreferrer"
						>
							{INFO.socials.instagram}
						</a>.
							
						</div>
						{/* <div>
							<ContactForm />
						</div> */}
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
