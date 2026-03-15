import { motion } from "framer-motion";
import "@fontsource/inter";
import { useGlobalContext } from "../context/GlobalContext";
import translations from "../locales";

function isCurrentRole(duration, language) {
	if (!duration) return false;
	const currentTokens = language === "lt" ? ["dabar"] : ["present", "current"];
	const normalized = duration.toLowerCase();
	return currentTokens.some((token) => normalized.includes(token));
}

export default function Work() {
	const { language } = useGlobalContext();
	const t = translations[language].work;

	return (
		<div className="flex flex-col min-h-screen font-sans text-black min-w-screen dark:text-white bg-gradient-to-br">
			<main className="flex items-center justify-center flex-1 px-4 py-20 md:px-6">
				<motion.section
					className="relative flex flex-col items-center justify-center w-full max-w-5xl text-center"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="w-full border shadow-lg rounded-2xl border-gray-200/20 bg-white/15 p-6 backdrop-blur-md md:p-8 dark:bg-black/40">
						<div className="mx-auto max-w-2xl">
							<h2 className="text-3xl font-semibold tracking-tight text-accent">{t.roadmap}</h2>
						</div>

						<div className="relative mx-auto mt-8 max-w-2xl text-left md:mt-10">
							<div className="absolute left-3 top-7 h-[calc(100%-10px)] w-px bg-gradient-to-b from-accent/70 via-gray-400/40 to-transparent dark:from-accent/60 dark:via-gray-500/40" />
							<div className="space-y-6">
								{t.list.map((item, index) => (
									<motion.article
										key={item.id}
										className="relative pl-10"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, amount: 0.4 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
									>
										<span className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/70 bg-white/70 text-xs font-bold text-accent shadow-sm dark:bg-black/30">
											{index + 1}
										</span>

										<div className="rounded-xl border border-white/20 bg-white/30 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/40 md:p-5 dark:bg-black/20 dark:hover:bg-black/30">
											<div className="flex flex-wrap items-start justify-between gap-3">
												<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
													{item.position}
												</h3>
												{isCurrentRole(item.duration, language) ? (
													<span className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
														{language === "lt" ? "Šiuo metu" : "Currently"}
													</span>
												) : null}
											</div>
											{item.company ? (
												<p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
											) : null}
											<p className="mt-2 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">{item.duration}</p>
											{item.description ? (
												<p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
													{item.description}
												</p>
											) : null}
										</div>
									</motion.article>
								))}
							</div>
						</div>

						<div className="mx-auto mt-10 flex max-w-2xl flex-col items-center border-t border-white/20 pt-6">
							<div className="flex items-center">
								<p className="text-base text-gray-600 dark:text-gray-400 md:text-lg">
									{t.message}{" "}
									<a
										href="mailto:contact@puv.pm"
										className="font-semibold text-transparent transition-opacity duration-300 bg-gradient-to-r from-primary to-accent bg-clip-text hover:opacity-80"
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