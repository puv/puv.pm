import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/inter";
import { useGlobalContext } from "../context/GlobalContext";
import translations from "../locales";

export default function Projects() {
	const { language } = useGlobalContext();
	const t = translations[language].projects;
	const projects = t.list;
	const isMobile = window.innerWidth < 768;

	const [selectedProject, setSelectedProject] = useState(projects[0]);
	const detailRef = useRef(null);
	const selectedRef = useRef(null);

	useEffect(() => {
		const currentId = selectedProject.id;
		const newProject = projects.find(p => p.id === currentId) || projects[0];
		setSelectedProject(newProject);
	}, [projects]);

	const handleSelect = (project) => {
		setSelectedProject(project);

		// Smooth scroll to details
		setTimeout(() => {
			detailRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}, 100);

	};

	return (
		<div className="flex flex-col min-h-screen font-sans text-black min-w-screen dark:text-white bg-gradient-to-br">
			{/* Hero Section */}
			<main className="flex items-center justify-center flex-1 px-6">
				<motion.section
					className="relative flex flex-col md:flex-row items-start justify-between w-full max-w-5xl"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Project List (sidebar) */}
					<motion.div className="order-1 md:order-2 flex flex-col w-full md:w-44 mt-6 md:mt-0">
						{projects.map((p) => (
							<motion.button
								key={p.id}
								ref={selectedProject?.id === p.id ? selectedRef : null}
								onClick={() => handleSelect(p)}
								className={`py-2 text-left transition-all duration-500 hover:pl-3 ${selectedProject?.id === p.id
									? "text-accent font-semibold"
									: "text-gray-800 dark:text-gray-400 hover:text-white"
									}`}
							>
								{p.name}
							</motion.button>
						))}
					</motion.div>

					{/* Project Details Panel (fixed width, reserved space) */}
					<div className="order-2 md:order-1 flex-1 pr- md:pr-6 h-auto min-h-[512px] md:h-[640px] w-full md:w-auto flex items-center">
						<div
							ref={detailRef}
							className="flex items-start justify-center w-full h-full"
						>
							<AnimatePresence mode="wait">
								<motion.div
									key={selectedProject.id}
									className="w-full p-6 border shadow-lg mb-6 md:mb-0 rounded-2xl bg-white/10 dark:bg-black/40 border-gray-200/20"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
								>
									<div className="flex items-center justify-center w-full overflow-hidden shadow-md h-48 md:h-96 rounded-xl">
										<img
											src={selectedProject.image}
											alt={selectedProject.name}
											className="object-contain max-w-full max-h-max rounded-lg"
										/>
									</div>

									<h2 className="mt-2 mb-2 text-2xl font-bold line-clamp-1">
										{selectedProject.name}
									</h2>
									<p className="mb-4 text-gray-600 dark:text-gray-300">
										{selectedProject.description}
									</p>
									{/* Tech tags */}
									<div className="flex flex-wrap gap-2 mb-4">
										{selectedProject.tech.map((t, i) => (
											<span
												key={i}
												className="px-3 py-1 text-sm bg-gray-200 rounded-full dark:bg-gray-700"
											>
												{t}
											</span>
										))}
									</div>
									{/* Buttons */}
									<div className="flex gap-4">
										{selectedProject.links.browser && (
											<a
												href={selectedProject.links.browser}
												target="_blank"
												rel="noopener noreferrer"
												className="px-4 py-2 transition rounded-xl text-black bg-primary hover:bg-primary/90"
											>
												{t.openBrowser}
											</a>
										)}
										{selectedProject.links.github && (
											<a
												href={selectedProject.links.github}
												target="_blank"
												rel="noopener noreferrer"
												className="px-4 py-2 transition rounded-xl text-black bg-accent hover:bg-accent/90"
											>
												{t.github}
											</a>
										)}
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</motion.section>
			</main>
		</div>
	);
}
