import React from "react";

function article_1() {
	return {
		date: "24 Feb 2024",
		title: `Git <> Common Developer Pitfalls and Solutions`,
		description:
			"This article highlights common Git pitfalls encountered by developers and offers practical solutions to address them. By mastering Git, developers can enhance version control and streamline collaboration in coding projects.",
		keywords: [
			"Git <> Common Developer Pitfalls and Solutions",
			"git",
			"developer",
			"git pull",
			"git push",
			"git commit",
			"version control",
			"git merge",
			"lassiecoder",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		link: "https://dev.to/lassiecoder/git-common-developer-pitfalls-and-solutions-5aim",
	};
}

function article_2() {
	return {
		date: "28 Dec 2023",
		title: "Navigating the Upgrade Odyssey: A Journey Through React Native Project Upgrades and helpful tools",
		description:
			"A guide to upgrading React Native projects seamlessly with tools like Renovate, React Native CLI, npm-check-updates, Dependabot, and react-native-template-upgrade, ensuring smooth sailing and staying current with innovations.",
		style: ``,
		link: "https://medium.com/@sharmapriyanka84510/navigating-the-upgrade-odyssey-a-journey-through-react-native-project-upgrades-and-helpful-tools-1b4384dc7f6d",
		keywords: [
			"React native upgrade",
			"project upgrade",
			"upgrade tools",
			"React Native CLI",
			"npm-check-updates",
			"Renovate",
			"react native template",
			"react native upgrade helper",
			"Troubleshooting",
			"react native community",
			"Dependabot",
			"lassiecoder"
		],
	};
}


// function article_3() {
// 	return {
// 		date: "6 Jun 2020",
// 		title: "JavaScript: Array, mutability & immutability",
// 		description:
// 			"The article provides insights into JavaScript arrays, emphasizing mutability and immutability concepts, alongside methods like map(), push(), pop(), filter(), shift(), unshift(), reduce(), and reduceRight(), with practical examples and explanations.",
// 		style: ``,
// 		link: "https://medium.com/@sharmapriyanka84510/javascript-array-mutability-immutability-93d366c90751",
// 		keywords: [
// 			"JavaScript: Array, mutability & immutability",
// 			"JavaScript",
// 			"Array",
// 			"Mutability",
// 			"Immutability",
// 			"lassiecoder"
// 		],
// 	};
// }

const myArticles = [article_1, article_2];

export default myArticles;
