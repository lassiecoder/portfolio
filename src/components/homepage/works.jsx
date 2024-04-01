import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./the_adecco_group.png"
								alt="the_adecco_group"
								className="work-image"
							/>
							<div className="work-title">The Adecco Group</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">May 2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="./torum.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Torum Technology Sdn. Bhd.</div>
							<div className="work-subtitle">
								Mobile Application Developer
							</div>
							<div className="work-duration">May 2022 - May 2023</div>
						</div>
						<div className="work">
							<img
								src="./edufund.png"
								alt="edufund"
								className="work-image"
							/>
							<div className="work-title">EduFund</div>
							<div className="work-subtitle">
								Product Engineer
							</div>
							<div className="work-duration">Aug 2020 - May 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
