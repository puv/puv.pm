import { motion } from "framer-motion";
import "@fontsource/inter";
import { useGlobalContext } from "../context/GlobalContext";
import translations from "../locales";

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
					<div className="w-full p-6 md:p-8">
						{/* <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center border-b border-white/20 pb-6 md:mb-12">
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
						</div> */}

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
										<span className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/100 bg-white/70 text-xs font-bold text-accent shadow-sm dark:bg-black/30">
											{index + 1}
										</span>

										<div className="rounded-xl border border-white/20 bg-white/30 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/40 md:p-5 dark:bg-black/20 dark:hover:bg-black/30">
											{/* Header with image and title/company info */}
											<div className="flex gap-4">
												{/* Company Image */}
												{item.company?.image && (
													<div className="flex-shrink-0">
														<img
															src={item.company.image}
															alt={item.company.name}
															className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
														/>
													</div>
												)}

												{/* Title, Company, and Current Badge */}
												<div className="flex-1">
													<div className="flex flex-wrap items-start justify-between gap-3">
														<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
															{item.position}
														</h3>
														{item.isCurrent ? (
															<span className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
																{t.current}
															</span>
														) : null}
													</div>
													{item.company ? (
														<a
															href={item.company.url}
															target="_blank"
															rel="noopener noreferrer"
															style={{
																color: item.company.color
															}}
															className="mt-1 text-sm font-medium hover:underline"
														>
															{item.company.name}
														</a>
													) : null}
													<p className="mt-2 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">{item.duration}</p>
												</div>
											</div>

											{/* Description - Full Width */}
											{item.description ? (
												<p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
													{item.description}
												</p>
											) : null}

											{/* Tech Tags - Full Width */}
											{item.tech && item.tech.length > 0 ? (
												<div className="mt-3 flex flex-wrap gap-2">
													{item.tech.map((tag, i) => (
														<span
															key={i}
															className="px-3 py-1 text-xs font-medium bg-gray-200 rounded-full dark:bg-gray-700"
														>
															{tag}
														</span>
													))}
												</div>
											) : null}
										</div>
									</motion.article>
								))}
							</div>
						</div>
					</div>
				</motion.section>
			</main>
		</div>
	);
}