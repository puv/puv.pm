const en = {
	home: {
		greeting: "Hey! I'm",
		name: "puv",
		tagline: [
			{ text: "I make", bg: "" },
			{ text: "cool things", bg: "bg-yellow-600/50 dark:bg-yellow-400/30 px-2 rounded" },
			{ text: "for", bg: "" },
			{ text: "the internet", bg: "bg-blue-600/50 dark:bg-blue-400/30 px-2 rounded" }
		],
		description: "a full-stack developer passionate about crafting creative, interactive web experiences. I work with",
		react: "React",
		tailwind: "Tailwind",
		and: "and",
		motionDesign: "motion design",
		description2: "to build interfaces that are both visually engaging and highly functional.",
		description3: "I enjoy exploring new technologies, experimenting with design patterns, and finding elegant solutions to complex problems.",
		viewProjects: "PROJECTS",
	},
	about: {
		greeting: "Hi, I'm",
		name: "puv",
		tagline: [
			{ text: "I make", bg: "" },
			{ text: "cool things", bg: "bg-yellow-600/50 dark:bg-yellow-400/30 px-2 rounded" },
			{ text: "for", bg: "" },
			{ text: "the internet", bg: "bg-blue-600/50 dark:bg-blue-400/30 px-2 rounded" }
		],
	},
	projects: {
		title: "Projects",
		openBrowser: "Open in Browser",
		github: "GitHub",
		list: [
			{
				id: 1,
				name: "CaptionFlow",
				description: "A web app for generating live captions and translations from microphone input.",
				image: "/images/project1.png",
				tech: ["React", "Tailwind"],
				links: {
					browser: "https://subs.puv.pm",
					github: "https://github.com/puv/livesubs"
				}
			},
			{
				id: 2,
				name: "Weather Aggregation System",
				description: "A web-app that aggregates weather data from various sources and displays it in a user-friendly manner.",
				image: "/images/gwas.png",
				tech: ["React", "Vite"],
				links: {
					browser: "https://gwas.puv.pm"
				}
			}
		]
	},
	work: {
		roadmap: "Career Roadmap",
		message: "Open to exciting opportunities. Let's",
		offer: "connect",
		list: [
			{
				id: 1,
				position: "Device Testing Internship",
				company: "",
				duration: "February 2026 - Present",
				description: "Testing and providing feedback on software."
			}
		]
	},
	base: {
		footer: "Built with ❤️ using React, Tailwind, and Framer Motion."
	}
};

export default en;
