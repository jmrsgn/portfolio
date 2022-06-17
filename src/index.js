import App from './App';
import { GlobalStyles } from './globalStyles';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const app = createRoot(container);

app.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

// TODO: 
// ? refactor codes