import React from 'react';
import Main from './pages/main';
import AboutMore from './pages/about-more';

import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectExpressoContainer } from './containers/project-expresso';
import { ProjectCarkilahanContainer } from './containers/project-carkilahan';

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

        <Route
          path={ROUTES.PROJECT_EXPRESSO}
          element={ <ProjectExpressoContainer /> }
        />

        <Route
          path={ROUTES.PROJECT_CARKILAHAN}
          element={ <ProjectCarkilahanContainer /> }
        />
      </Routes>
    </Router>
  );
}
  