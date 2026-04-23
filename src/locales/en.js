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
			},
			{
				id: 3,
				name: "Spont",
				description: "A social gathering app that helps travelers and locals meet through activities happening right now. This app is in early development, but you can check out the landing page now.",
				image: "/images/project3.png",
				tech: ["React", "Android"],
				links: {
					browser: "https://spont.party"
				}
			}
		]
	},
	work: {
		roadmap: "Career Roadmap",
		message: "Open to exciting opportunities. Let's",
		offer: "connect",
		current: "Current",
		list: [
			{
				id: 1,
				position: "Device Testing Internship",
				company: {
					name: "Teltonika Networks",
					url: "https://teltonika-networks.com/",
					color: "#0061fc"
				},
				duration: "February 2026 - Present",
				description: "Tested and evaluated networking devices, diagnosed hardware and software issues, and developed an automated testing framework to streamline QA workflows.",
				tech: ["Python", "Playwright"]
			}
		]
	},
	base: {
		footer: "Built with ❤️ using React, Tailwind, and Framer Motion."
	}
};

export default en;
