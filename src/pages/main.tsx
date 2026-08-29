import styled from "styled-components/macro";

import * as COLORS from "../constants/styles/colors";

import { HomeContainer } from "../containers/home";
import { ProjectsContainer } from "../containers/projects";
import { ExperiencesContainer } from "../containers/experiences";
import { ContactContainer } from "../containers/contact";
import { AboutContainer } from "../containers/about";
import { NavBarContainer } from "../containers/navbar";

export default function Main() {
  return (
    <>
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
  > div:not(:first-child) {
    border-top: 1px solid ${COLORS.BORDER};
  }
`;
