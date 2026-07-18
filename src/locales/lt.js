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

const lt = {
	home: {
		greeting: "Sveiki! Aš esu",
		name: "puv",
		tagline: [
			{ text: "Aš kuriu", bg: "" },
			{ text: "šaunius dalykus", bg: "bg-yellow-600/50 dark:bg-yellow-400/30 px-2 rounded" },
			{ text: "skirtus", bg: "" },
			{ text: "internetui", bg: "bg-blue-600/50 dark:bg-blue-400/30 px-2 rounded" }
		],
		description: "full-stack programuotojas, kuriantis interaktyvius internetinius sprendimus. Dirbu su",
		react: "React",
		tailwind: "Tailwind",
		and: "ir",
		motionDesign: "judėjimo dizainu",
		description2: "kurdamas sąsajas, kurios yra ir vizualiai patrauklios, ir funkcionalios.",
		description3: "Man patinka tyrinėti naujas technologijas, eksperimentuoti su dizaino modeliais ir rasti elegantiškus sprendimus sudėtingoms problemoms.",
		viewProjects: "PROJEKTAI",
	},
	about: {
		greeting: "Sveiki, aš",
		name: "puv",
		tagline: [
			{ text: "Aš kuriu", bg: "" },
			{ text: "šaunius dalykus", bg: "bg-yellow-600/50 dark:bg-yellow-400/30 px-2 rounded" },
			{ text: "skirtus", bg: "" },
			{ text: "internetui", bg: "bg-blue-600/50 dark:bg-blue-400/30 px-2 rounded" }
		],
	},
	projects: {
		title: "Projektai",
		openBrowser: "Atidaryti Naršyklėje",
		github: "GitHub",
		list: projectsData.map((project) => ({
			id: project.id,
			name: project.name.lt,
			description: project.description.lt,
			image: project.image,
			tech: project.tech,
			links: project.links
		}))
	},
	work: {
		roadmap: "Karjera",
		message: "Atviras įkvepiančioms galimybėms.",
		offer: "Susisiekime",
		current: "Dabartinis",
		list: workData.map((job) => ({
			id: job.id,
			position: job.position.lt,
			company: job.company,
			duration: job.duration.end === null
				? `${formatMonthYear(job.duration.start, "lt-LT")} - Dabar`
				: `${formatMonthYear(job.duration.start, "lt-LT")} - ${formatMonthYear(job.duration.end, "lt-LT")}`,
			description: job.description.lt,
			tech: job.tech,
			isCurrent: job.duration.end === null
		})).reverse()
	},
	formatMonthYear: (date) => formatMonthYear(date, "lt-LT"),
	base: {
		footer: "Sukurta su ❤️ naudojant React, Tailwind ir Framer Motion."
	}
};

export default lt;
