import App from './App';
import { GlobalStyles } from './globalStyles';
import { GlobalFonts } from './globalFonts';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root element not found');
}

const app = createRoot(container);

app.render(
	<>
    	<GlobalFonts />
    	<GlobalStyles />
    	<App /> 
  	</>
);