import App from './App';
import { GlobalStyles } from './globalStyles';
import { GlobalFonts } from './globalFonts';
import { createRoot } from 'react-dom/client';
import { SpotifyNowPlaying } from './spotify/spotify-now-playing';

const container = document.getElementById('root');
const app = createRoot(container);

app.render(
  <>
    <GlobalFonts />
    <GlobalStyles />
    <App />
    {/* <SpotifyNowPlaying /> */}
  </>
);