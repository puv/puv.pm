import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
	HomeIcon,
	UserIcon,
	BriefcaseIcon,
	PencilSquareIcon,
	MoonIcon,
	SunIcon,
	LanguageIcon,
} from "@heroicons/react/24/solid";
import NavButton from "./objects/NavButton";
import { useGlobalContext } from "../context/GlobalContext";

const navItems = [
	{ name: "Home", icon: HomeIcon },
	{ name: "Projects", icon: PencilSquareIcon },
	{ name: "Work", icon: BriefcaseIcon },
];

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
			type: "spring",
			stiffness: 120,
			damping: 20,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.9 },
	show: { opacity: 1, y: 0, scale: 1 },
};

// Animation variants for sliding icons
const iconVariants = {
	enter: { y: -10, opacity: 0, scale: 0.5, position: "absolute" },
	center: { y: 0, opacity: 1, scale: 1, position: "absolute" },
	exit: { y: 10, opacity: 0, scale: 0.5, position: "absolute" },
};

export default function Navbar({ scrollRef }) {
	const [active, setActive] = useState("Home");
	const [showIcons, setShowIcons] = useState(false);
	const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"));
	const { language, setLanguage, activeSection, setActiveSection } = useGlobalContext();
	const controls = useAnimation();

	function scrollToSection(name) {
		if (!scrollRef?.current) return;
		const section = scrollRef.current.querySelector(`#${name}`);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
		}
	}

	useEffect(() => {
		setActive(activeSection || "Home");
	}, [activeSection]);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark", !darkMode);
	}

	useEffect(() => {
		const isMobile = window.innerWidth < 768;
		async function sequence() {
			await controls.start({
				y: 48,
				width: 32,
				height: 32,
				borderRadius: "50%",
				opacity: 1,
				padding: "0.25rem",
				transition: { type: "spring", stiffness: 200, damping: 20 },
			});

			await controls.start({
				y: 32,
				width: isMobile ? window.innerWidth - 40 : 600,
				height: isMobile ? 56 : 64,
				borderRadius: "24px",
				padding: isMobile ? "0.5rem" : "1rem",
				transition: { type: "spring", stiffness: 120, damping: 20 },
			});

			setShowIcons(true);
		}

		sequence();
	}, [controls]);

	return (
		<motion.nav
			className="fixed flex justify-center -translate-x-1/2 border shadow-2xl z-5 border-white/10 backdrop-blur-lg bg-white/5 z-10"
			style={{ top: 0, left: "50%" }}
			initial={{
				y: -100,
				opacity: 0,
				width: 60,
				height: 60,
				borderRadius: "50%",
				padding: "0.25rem",
			}}
			animate={controls}
		>
			{showIcons && (
				<motion.div
					className="relative flex items-center justify-between w-full px-4"
					variants={containerVariants}
					initial="hidden"
					animate="show"
				>
					{/* left-side controls (dark mode + translate toggle) */}
					<div className="relative flex items-center gap-3 text-sm font-medium">
						{/* Moon / Sun toggle */}
						<button
							onClick={() => toggleDarkMode()}
							className="relative flex items-center justify-center w-6 h-6"
						>
							<AnimatePresence mode="wait" initial={false}>
								{darkMode ? (
									<motion.div
										key="sun"
										variants={iconVariants}
										initial="enter"
										animate="center"
										exit="exit"
										transition={{ duration: 0.2 }}
									>
										<SunIcon className="w-5 h-5 text-primary" />
									</motion.div>
								) : (
									<motion.div
										key="moon"
										variants={iconVariants}
										initial="enter"
										animate="center"
										exit="exit"
										transition={{ duration: 0.2 }}
									>
										<MoonIcon className="w-5 h-5 text-accent" />
									</motion.div>
								)}
							</AnimatePresence>
						</button>

						{/* Divider */}
						<span className="w-px h-4 bg-white/30" />

						{/* Translate toggle */}
						<button
							onClick={() => setLanguage(language === 'en' ? 'lt' : 'en')}
							className="relative flex items-center justify-center w-6 h-6 text-black dark:text-white"
						>
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={language}
									variants={iconVariants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{ duration: 0.25 }}
								>
									<LanguageIcon className="w-5 h-5" />
								</motion.div>
							</AnimatePresence>
						</button>
					</div>

					{/* Nav buttons (scroll to sections) */}
					<div className="flex items-center gap-3">
						{navItems.map(({ name, icon: Icon }) => (
							<NavButton
								key={name}
								name={name}
								itemVariants={itemVariants}
								active={active}
								setActive={(val) => {
									setActive(val);
									setActiveSection(val);
									scrollToSection(val); // 👈 scroll when clicked
								}}
								Icon={Icon}
							/>
						))}
					</div>
				</motion.div>
			)}
		</motion.nav>
	);
}
