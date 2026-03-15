import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaGithub, FaArrowRight } from "react-icons/fa";
import "@fontsource/inter";
import { useGlobalContext } from "../context/GlobalContext";
import translations from "../locales";

const blocks = [
	{ w: 3, h: 3, mW: 1, mH: 3, color: "rgba(0, 0, 255, 0.2)", component: IconBlock, side: "left" },
	{ w: 5, h: 2, mW: 3, mH: 3, color: "rgba(255, 0, 0, 0.2)", component: NameBlock, side: "right" },
	{ w: 5, h: 5, mW: 4, mH: 7, color: "rgba(0, 255, 0, 0.2)", component: AboutBlock, side: "bottom" },
	{ w: 1, h: 1, mW: 2, mH: 2, color: "rgba(255, 255, 0, 0.2)", component: TwitterBlock, side: "bottom" },
	{ w: 2, h: 1, mW: 2, mH: 2, color: "rgba(128, 0, 128, 0.2)", component: GithubBlock, side: "bottom" },
	{ w: 2, h: 1, mW: 0, mH: 0, color: "rgba(255, 192, 203, 0.2)", component: PlaceholderBlock, side: "bottom" },
	{ w: 1, h: 1, mW: 0, mH: 0, color: "rgba(75, 0, 130, 0.2)", component: PlaceholderBlock, side: "bottom" },
	{ w: 3, h: 3, mW: 0, mH: 0, color: "rgba(255, 165, 0, 0.2)", component: PlaceholderBlock, side: "left" },
	{ w: 5, h: 1, mW: 0, mH: 0, color: "rgba(128, 128, 128, 0.2)", component: ProjectsBlock, side: "bottom" },
];


function Typewriter({ text }) {
	return (
		<span>
			{text.split("").map((letter, index) => (
				<motion.span
					key={index}
					className="text-primary"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 + index * 0.1 }}
				>
					{letter}
				</motion.span>
			))}
		</span>
	);
}

export function IconBlock() {
	return <img src="https://avatars.githubusercontent.com/u/16114858" alt="Avatar" className="w-16 h-16 md:w-32 md:h-32 border-2 border-white rounded-full shadow-lg" />;
}


export function NameBlock() {
	return <h1 className="text-2xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">puv</h1>;
}


export function AboutBlock() {
	const { language } = useGlobalContext();
	const t = translations[language].home;
	const isMobile = window.innerWidth <= 768;

	return (
		<p className="px-4 text-sm leading-relaxed text-gray-700 md:text-base dark:text-gray-300">
			{t.greeting} <span className="font-bold">{t.name}</span>, {t.description}{" "}
			<span className="text-accent">{t.react}</span>, <span className="text-primary">{t.tailwind}</span>, {t.and} <Typewriter key={t.motionDesign} text={t.motionDesign} /> {t.description2}
			{!isMobile ? <><br /><br />{t.description3}<br /></> : null}
		</p>
	);
}


export function TwitterBlock() {
	return <a href="https://x.com/puvdev" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 w-full h-full"><FaTwitter className="text-2xl text-blue-400" /></a>;
}


export function GithubBlock() {
	return <a href="https://github.com/puv" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 w-full h-full"><FaGithub className="text-xl" /><span className="text-sm">puv</span></a>;
}


export function ProjectsBlock() {
	const { language, setActiveSection } = useGlobalContext();
	const t = translations[language].home;

	return (
		<div className="flex items-center justify-center w-full h-full" onClick={() => {
			setActiveSection("Projects");
			document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
		}}>
			<div className="flex items-center gap-2 text-lg font-bold tracking-wide uppercase">
				{t.viewProjects}
				<motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
					<FaArrowRight className="text-xl" />
				</motion.div>
			</div>
		</div>
	);
}


export function PlaceholderBlock() {
	return <div className="text-gray-800 dark:text-gray-400">TBD</div>;
}

const blockVariants = {
	left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
	right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
	bottom: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
};

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.2 } },
};

export default function Home({ scrollRef }) {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const containerRef = useRef(null);
	const { language } = useGlobalContext();
	const t = translations[language].home;

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				setMousePos({
					x: e.clientX - rect.left, // relative to container
					y: e.clientY - rect.top,
				});
			}
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="relative flex flex-col min-h-screen font-sans text-black min-w-screen dark:text-white">
			<main className="flex items-center justify-center flex-1 px-6">
				<motion.section
					className="relative flex flex-col items-center justify-center w-full max-w-6xl text-center"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					<div
						ref={containerRef}
						className="relative grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 grid-rows-12 md:grid-rows-8 w-80 md:w-136 h-80 md:h-136"
					>
						{blocks.map((block, idx) => (
							<HoverBlock key={idx} block={block} mousePos={mousePos} containerRef={containerRef} />
						))}
					</div>
				</motion.section>
			</main>
		</div>
	);
}

function HoverBlock({ block, mousePos, containerRef }) {
	const ref = useRef(null);
	const [localPos, setLocalPos] = useState({ x: 0, y: 0 });
	const isMobile = window.innerWidth < 768;

	useEffect(() => {
		if (ref.current && containerRef.current) {
			const rect = ref.current.getBoundingClientRect();
			const cRect = containerRef.current.getBoundingClientRect();
			setLocalPos({
				x: mousePos.x - rect.left + cRect.x,
				y: mousePos.y - rect.top + cRect.y,
			});
		}
	}, [mousePos]);

	if (block.w == 0 || block.h == 0 || (isMobile && (block.mW == 0 || block.mH == 0))) return <></>;


	return (
		<motion.div
			className={`col-span-${isMobile ? block.mW : block.w} row-span-${isMobile ? block.mH : block.h} flex rounded-lg items-center justify-center relative overflow-hidden`}
			variants={blockVariants[block.side]}
			transition={{ duration: 0.6, ease: "easeOut" }}
			ref={ref}
		>
			{/* Block content */}
			<div className="relative z-10 flex items-center justify-center w-full h-full border rounded-lg shadow-inner bg-white/10 border-white/20">
				<block.component />
			</div>

			{/* Block-specific shine */}
			<div
				className="absolute inset-0 z-0 pointer-events-none"
				style={{
					background: `radial-gradient(circle 184px at ${localPos.x}px ${localPos.y}px, ${block.color} 0%, transparent 100%)`,
					mixBlendMode: "screen",
				}}
			/>
		</motion.div>
	);
}
