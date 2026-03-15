import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [activeSection, setActiveSection] = useState('Home');
	const [language, setLanguage] = useState('en');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<GlobalContext.Provider
			value={{
				activeSection, setActiveSection,
				language, setLanguage,
				isMobileMenuOpen, setIsMobileMenuOpen
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};