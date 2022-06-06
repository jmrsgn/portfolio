import React from 'react';
import Main from './pages/main';
import AboutMore from './pages/about-more';

import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={ <Main /> }
        />

        <Route
          path={ROUTES.ABOUT_MORE}
          element={ <AboutMore /> }
        />
      </Routes>
    </Router>
  );
}
  