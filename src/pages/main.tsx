import styled from "styled-components";

import * as COLORS from "../constants/styles/colors";

import { HomeContainer } from "../containers/home";
import { ProjectsContainer } from "../containers/projects";
import { ExperiencesContainer } from "../containers/experiences";
import { ContactContainer } from "../containers/contact";
import { AboutContainer } from "../containers/about";
import { NavBarContainer } from "../containers/navbar";
import { SpotifyPlayer } from "../containers/spotify";

export default function Main() {
  return (
    <>
      <SpotifyPlayer />
      <NavBarContainer />

      <MainWrapper>
        <HomeContainer />

        <AboutContainer />

        <ProjectsContainer />

        <ExperiencesContainer />

        <ContactContainer />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  > * {
    position: relative;
  }

  > * + *::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 1px;

    background: ${COLORS.BORDER};

    z-index: 10;
  }
`;
