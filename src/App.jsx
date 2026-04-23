import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context/GlobalContext";
import translations from "./locales";

function Typewriter({ text, className = "" }) {
	return (
		<span>
			{text.split("").map((letter, index) => (
				<motion.span
					key={index}
					className={className}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.25 + index * 0.0325 }}
				>
					{letter}
				</motion.span>
			))}
		</span>
	);
}

function App() {
	const scrollRef = useRef(null);
	const { language } = useGlobalContext();
	const t = translations[language].base;

	const wW = window.innerWidth;
	const wH = window.innerHeight;
	const isMobile = wW < 768;

	// track scroll
	const { scrollXProgress, scrollYProgress } = useScroll({ container: scrollRef });

	// map scroll progress to section index (0,1,2,3)
	const sectionIndex = useTransform(
		scrollXProgress,
		[0, 0.5, 1],
		[0, 2, 3]
	);

	const mobileSectionIndex = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0, 1, 2]
	);

	const currentSection = isMobile ? mobileSectionIndex : sectionIndex;

	const [isFooterHidden, setIsFooterHidden] = useState(false);

	useMotionValueEvent(currentSection, "change", (latest) => {
		console.log(isMobile, latest);
		setIsFooterHidden(Math.round(latest) === 1 && isMobile);
	});

	// 4 orb colors
	const orbs = [
		"bg-yellow-500/30",
		"bg-green-500/30",
		"bg-cyan-500/30",
	];

	// define orb layouts for each section (4 orbs per section)
	const orbLayouts = [
		// Home
		[
			{ x: wW * 0.525, y: wH * 0.2 },
			{ x: wW * 0.275, y: wH * 0.5 },
			{ x: wW * 0.6, y: wH * 0.5 }
		],
		// Projects
		[
			{ x: 250, y: 250 },
			{ x: 700, y: 400 },
			{ x: 1000, y: 200 }
		],
		// Work
		[
			{ x: 400, y: 150 },
			{ x: 500, y: 150 },
			{ x: 850, y: 450 }
		],
	];

	return (
		<div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 from-gray-100 via-gray-300 to-gray-100">
			{/* Foreground */}
			{/* <LoadingScreen /> */}
			<Navbar scrollRef={scrollRef} />

			<motion.div
				ref={scrollRef}
				className="relative z-1 flex flex-col md:flex-row w-screen h-screen overflow-y-auto md:overflow-x-hidden snap-x md:snap-mandatory"
			>
				<section id="Home" className="flex-shrink-0 w-screen h-auto md:h-screen snap-center">
					<Home />
				</section>
				<section id="Projects" className="flex-shrink-0 w-screen h-auto md:h-screen snap-center">
					<Projects />
				</section>
				<section id="Work" className="flex-shrink-0 w-screen h-auto md:h-screen snap-center">
					<Work />
				</section>
			</motion.div>

			<footer className={`absolute bottom-0 py-6 flex place-content-center text-sm w-full text-gray-800 dark:text-gray-400 ${isFooterHidden ? 'hidden' : ''}`}>
				<div className="flex text-center place-self-center justify-center max-w-[320px] md:max-w-auto">
					<Typewriter key={`© ${new Date().getFullYear()} puv. ${t.footer}`} text={`© ${new Date().getFullYear()} puv. ${t.footer}`} className="text-gray-800 dark:text-gray-400" />
				</div>
			</footer>
		</div>
	);
}

export default App;
