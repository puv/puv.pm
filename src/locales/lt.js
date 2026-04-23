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
		list: [
			{
				id: 1,
				name: "CaptionFlow",
				description: "Internetinė programa, skirta generuoti tiesiogines subtitrus ir vertimus iš mikrofono įvesties.",
				image: "/images/project1.png",
				tech: ["React", "Tailwind"],
				links: {
					browser: "https://subs.puv.pm",
					github: "https://github.com/puv/livesubs"
				}
			},
			{
				id: 2,
				name: "Orų Agregavimo Sistema",
				description: "Internetinė programa, kuri agreguoja orų duomenis iš įvairių šaltinių ir juos pateikia patogia forma.",
				image: "/images/gwas.png",
				tech: ["React", "Vite"],
				links: {
					browser: "https://gwas.puv.pm"
				}
			},
			{
				id: 3,
				name: "Kažkas naujo",
				description: "Naujas projektas, prie kurio dirbu.",
				image: "/images/project3.png",
				tech: ["React", "Android"],
				links: {
					browser: "https://spont.party"
				}
			}
		]
	},
	work: {
		roadmap: "Karjiera",
		message: "Atviras įkvepiančioms galimybėms.",
		offer: "Susisiekime",
		current: "Dabartinis",
		list: [
			{
				id: 1,
				position: "Įrenginių Testavimo Praktika",
				company: "Teltonika Networks",
				duration: "Vasaris 2026 - Dabar",
				description: "Testavau ir vertinau tinklo įrenginius, diagnozavau aparatinės ir programinės įrangos problemas bei sukūriau automatizuotą testavimo sistemą QA procesams optimizuoti.",
				tech: ["Python", "Playwright"]
			}
		]
	},
	base: {
		footer: "Sukurta su ❤️ naudojant React, Tailwind ir Framer Motion."
	}
};

export default lt;
