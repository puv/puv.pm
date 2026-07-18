import projectsData from "../data/projects";
import workData from "../data/work";

const formatMonthYear = (dateArray, locale) => {
	if (!dateArray) return "";

	const [year, month, day] = dateArray;
	const date = new Date(year, month - 1, day);

	const parts = new Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric"
	}).formatToParts(date);

	const monthStr = parts.find((part) => part.type === "month")?.value;
	const yearStr = parts.find((part) => part.type === "year")?.value;

	// Capitalize first letter
	const capitalizedMonth = monthStr ? monthStr.charAt(0).toUpperCase() + monthStr.slice(1) : "";

	return [capitalizedMonth, yearStr].filter(Boolean).join(" ");
};

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
		list: projectsData.map((project) => ({
			id: project.id,
			name: project.name.en,
			description: project.description.en,
			image: project.image,
			tech: project.tech,
			links: project.links
		}))
	},
	work: {
		roadmap: "Career Roadmap",
		message: "Open to exciting opportunities. Let's",
		offer: "connect",
		current: "Current",
		list: workData.map((job) => ({
			id: job.id,
			position: job.position.en,
			company: job.company,
			duration: job.duration.end === null
				? `${formatMonthYear(job.duration.start, "en-US")} - Present`
				: `${formatMonthYear(job.duration.start, "en-US")} - ${formatMonthYear(job.duration.end, "en-US")}`,
			description: job.description.en,
			tech: job.tech,
			isCurrent: job.duration.end === null
		})).reverse()
	},
	formatMonthYear: (date) => formatMonthYear(date, "en-US"),
	base: {
		footer: "Built with ❤️ using React, Tailwind, and Framer Motion."
	}
};

export default en;
