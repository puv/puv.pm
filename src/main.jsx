import './index.css';

import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalProvider } from './context/GlobalContext';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</StrictMode>
);