import { motion } from "framer-motion";
import "@fontsource/inter";
import { useGlobalContext } from "../context/GlobalContext";
import translations from "../locales";

export default function Work() {
	const { language } = useGlobalContext();
	const t = translations[language].work;

	return (
		<div className="flex flex-col min-h-screen font-sans text-black min-w-screen dark:text-white bg-gradient-to-br">
			<main className="flex items-center justify-center flex-1 px-6">
				<motion.section
					className="relative flex flex-col items-center justify-center w-full max-w-4xl text-center"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="bg-white/10 dark:bg-black/40 p-8 rounded-2xl shadow-lg border border-gray-200/20">
						<h2 className="text-2xl font-semibold mb-4 text-accent">{t.roadmap}</h2>

						<div className="flex flex-col items-center space-y-4">
							<div className="flex items-center space-x-4">
								<p className="text-lg text-gray-600 dark:text-gray-400">
									{t.message}{" "}
									<a
										href="mailto:contact@puv.pm"
										className="font-semibold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text hover:opacity-80 transition-all duration-300"
									>
										{t.offer}
									</a>
								</p>
							</div>
						</div>
					</div>
				</motion.section>
			</main>
		</div>
	);
}