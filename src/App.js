import React from 'react';
import Main from './pages/main';
import AboutMore from './pages/about-more';

import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectsExpressoContainer } from './containers/projects-expresso';
import { ProjectsCarkilahanContainer } from './containers/projects-carkilahan';
import ScrollToTop from './helpers/scroll-to-top';
import { CertificatesAllContainer } from './containers/certificates-all';

export default function App() {
  document.title = "em";

  return (
    <Router>
      <ScrollToTop />
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
          element={ <ProjectsExpressoContainer /> }
        />

        <Route
          path={ROUTES.PROJECT_CARKILAHAN}
          element={ <ProjectsCarkilahanContainer /> }
        />

        <Route
          path={ROUTES.ALL_CERTIFICATES}
          element={ <CertificatesAllContainer /> }
        />
      </Routes>
    </Router>
  );
}
  