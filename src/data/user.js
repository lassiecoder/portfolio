import { faHandSpock } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const INFO = {
	main: {
		logo: "../logo.png",
		title: "Portfolio | Priyanka Sharma (lassiecoder) | Software Developer",
		name: "Priyanka Sharma (lassiecoder)",
		email: "sharmapriyanka84510@gmail.com",
	},

	socials: {
		twitter: "https://twitter.com/lassiecoder",
		github: "https://github.com/lassiecoder",
		linkedin: "https://linkedin.com/in/priyanka-s-b79401142/",
		instagram: "https://instagram.com/lassiecoder",
		medium: "https://medium.com/@sharmapriyanka84510",
		dev: "https://dev.to/lassiecoder",
		linkedin: "https://www.linkedin.com/in/priyanka-s-b79401142/",
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "MERN Stack Developer",
		description: (
			<>
				I'm a <b>Software Developer</b>, skilled at crafting both <b>mobile</b> and <b>web</b> solutions.<br />I thrive on challenges, love learning new skills, and aim to write clean, professional code. I constantly seek opportunities to grow as a developer.
			</>
		),
	},

	about: {
		title: (
			<>
				Hello, I'm Priyanka Sharma
			</>
		),
		// "Hello! I’m Priyanka Sharma",
		description: (
			<>
				Also known as <b>lassiecoder</b> on various tech platforms, I am a <b>Software Developer</b> with <u>four years of experience</u>.
				I specialize in crafting mobile applications and web development.
				<br />
				Proficient in JavaScript, React Native, React.js, Next.js, Node.js, MongoDB, AWS, Websocket, Firebase, Storybook, Redux, Rematch, React Query including Fastlane for app deployment.
				<br /><br />
				Currently, I am part of the dynamic team at <b>The Adecco Group</b>, a Swiss-based company known for its innovative solutions.
				<br /><br />
				At <b>Torum</b>, I played a pivotal role in enhancing user engagement through strategic implementations, such as in-app and push notifications with deep linking for seamless redirections. Additionally, I focused on developing user-friendly components, establishing deployment processes for efficient app distribution, and optimizing data management by transitioning key features from React Query to Redux.
				<br /><br />
				I've made significant contributions at <b>Edufund</b>, including the introduction of KYC verification for account creation and the integration of third-party tools for secure data access. Moreover, I spearheaded initiatives to boost user engagement, streamline app building and deployment workflows, and developed a white-label solution for ICICI, a banking partner, leveraging NextJS technology.
				<br /><br />
				With a passion for innovation and a track record of delivering impactful solutions, I am committed to pushing boundaries and driving success in every project I undertake.
			</>
		  ),
			
	},

	articles: {
		title: "Insights and Musings on Tech and Development",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "EduFund - Mutual Funds & SIP",
			description:
				"EduFund is India's pioneering investment app tailored to assist parents in saving and investing for their children's education. Combatting rising education expenses, it ensures a brighter future for students.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.educationfund.edufund",
		},
		{
			title: "Torum: Your Crypto Social App",
			description:
				"Torum's mobile app fosters a vibrant SocialFi ecosystem, connecting over 230,000 cryptocurrency enthusiasts since its 2018 inception. Join to network and share crypto-related content!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.torum.app&hl=en_IN&gl=US",
		},
		{
			title: "`npx lassiecoder` in your terminal?",
			description:
				"A personalized command-line business card. This innovative tool allows you to showcase your professional profile, skills, and contact information directly in the terminal.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com/lassiecoder/npx-lassiecoder",
		},
		{
			title: "Mutual funding app",
			description:
				"This project demonstrates a proof-of-concept for a mutual fund listing app with both frontend and backend components",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/lassiecoder/mutual-funding-app",
		},
		{
			title: "Shoplane – E-commerce website",
			description:
				"With over 340 stars and 250 forks on GitHub, Shoplane is making a significant contribution to the open-source e-commerce landscape.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/lassiecoder/E-CommerceWebsite",
		},
		{
			title: "Adecco",
			description:
				"The Adecco mobile app revolutionizes job placement with precision, speed, and rigorous testing. Connecting over 700,000 individuals daily to top-tier opportunities worldwide, it's a gateway to career excellence.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.adecco.app20&hl=en_IN&gl=US",
		},
	],
};

export default INFO;
