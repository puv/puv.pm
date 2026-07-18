const projects = [
	{
		id: 1,
		name: {
			en: "CaptionFlow",
			lt: "CaptionFlow"
		},
		description: {
			en: "Web application for generating real-time subtitles and translations from microphone input.",
			lt: "Internetinė programa, skirta generuoti tiesiogines subtitrus ir vertimus iš mikrofono įvesties."
		},
		image: "/images/livesubs.png",
		tech: ["React", "Tailwind"],
		links: {
			browser: "https://subs.puv.pm",
			github: "https://github.com/puv/livesubs"
		}
	},
	{
		id: 2,
		name: {
			en: "Share.Me",
			lt: "Share.Me"
		},
		description: {
			en: "A simple and intuitive file-sharing platform that allows users to upload and share files with others.",
			lt: "Paprasta ir intuityvi failų dalinimosi platforma, leidžianti vartotojams įkelti ir dalintis failais su kitais."
		},
		image: "/images/shareme.png",
		tech: ["React", "Node.js"],
		links: {
			browser: "https://share.puv.pm",
			github: "https://github.com/puv/share.me"
		}
	},
	{
		id: 4,
		name: {
			en: "Weathersite",
			lt: "Weathersite"
		},
		description: {
			en: "Web application for aggregating weather data from various sources and presenting it in a user-friendly format.",
			lt: "Internetinė programa, kuri agreguoja orų duomenis iš įvairių šaltinių ir juos pateikia patogia forma."
		},
		image: "/images/weathersite.png",
		tech: ["React", "Vite"],
		links: {
			browser: "https://weathersite.puv.pm",
			github: "https://github.com/puv/weathersite"
		}
	},
	{
		id: 3,
		name: {
			en: "Spont",
			lt: "Spont"
		},
		description: {
			en: "Social networking app for travelers and locals to connect through events happening now. This app is in its early development stage, but you can already view its presentation page.",
			lt: "Socialinių susibūrimų programėlė, padedanti keliautojams ir vietiniams susipažinti per veiklas, vykstančias dabar. Ši programėlė dar ankstyvoje kūrimo stadijoje, tačiau jau dabar galite peržiūrėti jos pristatymo puslapį."
		},
		image: "/images/project3.png",
		tech: ["React", "Android"],
		links: {
			browser: "https://spont.party"
		}
	}
]

export default projects;