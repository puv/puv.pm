import { motion, AnimatePresence } from "framer-motion";

export default function NavButton({ name, itemVariants, active, setActive, Icon }) {
	const isMobile = window.innerWidth < 768;

	return (
		<motion.div
			key={name}
			className="relative flex flex-col items-center group"
			variants={itemVariants}
		>
			<AnimatePresence>
				{active === name && (
					<motion.div
						layoutId="active-bg"
						className="absolute inset-0 z-0 rounded-lg shadow-md bg-primary/85"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}
					/>
				)}
			</AnimatePresence>

			<motion.button
				onClick={() => setActive(name)}
				className={`relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg transition-colors ${active === name ? "text-black dark:text-white" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
					}`}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				<Icon className="w-6 h-6" />
			</motion.button>

			<motion.span
				className="absolute px-2 py-1 text-xs transition-all duration-200 -translate-x-1/2 rounded-md opacity-0 bg-secondary/90 -top-8 left-1/2 group-hover:opacity-100 group-hover:-translate-y-1"
			>
				{name}
			</motion.span>
		</motion.div>
	)
}