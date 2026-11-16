import styled from "styled-components";

import * as COLORS from "../../constants/styles/colors";
import { FONTS } from "../../fonts/fonts";

export const Hero = styled.section`
  min-height: 100svh;
  background: ${COLORS.BACKGROUND};
  color: ${COLORS.TEXT_PRIMARY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const HeroInner = styled.div`
  width: min(1400px, calc(100% - 48px));
  margin: auto;
  padding: 8rem 0 4rem;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: center;
  gap: clamp(3rem, 6vw, 7rem);

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-top: 7rem;
  }

  @media (max-width: 767px) {
    padding: 5rem 0 1rem;
    gap: 1.5rem;
  }

  @media (min-width: 1280px) {
    width: min(1280px, calc(100% - 160px));
  }
`;

export const Identity = styled.div`
  min-width: 0;
`;

export const Kicker = styled.p`
  margin: 0 0 2.5rem;
  color: ${COLORS.PRIMARY_LIGHT};
  font: 0.78rem/1.5 ${FONTS.sfMonoRegular};

  @media (max-width: 767px) {
    margin-bottom: 1.25rem;
    font-size: 0.7rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font: normal clamp(4.5rem, 8vw, 9rem)/0.82 ${FONTS.calibreBlack};
  letter-spacing: -0.01em;
  word-spacing: 0.02em;

  span { color: ${COLORS.TEXT_SECONDARY}; }

  @media (max-width: 1023px) { font-size: clamp(5.5rem, 12vw, 8rem); }
  @media (max-width: 767px) { font-size: clamp(3.45rem, 14.5vw, 5.5rem); }
  @media (max-width: 359px) { font-size: 3.2rem; }
`;

export const Introduction = styled.p`
  max-width: 33rem;
  margin: 2.5rem 0 0;
  color: ${COLORS.TEXT_SECONDARY};
  font: clamp(1.2rem, 1.7vw, 1.55rem)/1.3 ${FONTS.calibreRegular};

  @media (max-width: 767px) { margin-top: 1rem; }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;

  @media (max-width: 767px) { margin-top: 1.5rem; }
  @media (max-width: 479px) { > a { flex: 1 1 100%; } }
`;

export const ActionBase = styled.a`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.75rem 1.15rem;
  font: 0.75rem ${FONTS.sfMonoRegular};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`;

export const PrimaryAction = styled(ActionBase)`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.TEXT_INVERSE};

  &:hover { background: ${COLORS.PRIMARY_HOVER}; }
`;

export const SecondaryAction = styled(ActionBase)`
  border: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT_PRIMARY};

  &:hover { background: ${COLORS.SURFACE_ELEVATED}; }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 767px) { margin-top: 1rem; }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: ${COLORS.TEXT_TERTIARY};
    font: 0.68rem ${FONTS.sfMonoRegular};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover { color: ${COLORS.PRIMARY_LIGHT}; }
`;

export const Status = styled.p`
  margin-top: 0.5rem;
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.65rem ${FONTS.sfMonoRegular};

  &::after {
    content: "_";
    color: ${COLORS.PRIMARY_LIGHT};
    animation: cursor-blink 1s steps(1, end) infinite;
  }

  @keyframes cursor-blink { 50% { opacity: 0; } }

  @media (prefers-reduced-motion: reduce) {
    &::after { animation: none; }
  }
`;

export const CodeEditor = styled.div`
  margin-top: 1.25rem;
  border: 1px solid ${COLORS.BORDER};
  background: ${COLORS.BACKGROUND};

  .file-tab {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    min-height: 32px;
    padding: 0 0.75rem;
    border-bottom: 1px solid ${COLORS.BORDER};
    color: ${COLORS.TEXT_SECONDARY};
    font: 0.6rem ${FONTS.sfMonoRegular};
  }

  .file-mark { color: ${COLORS.PRIMARY_LIGHT}; font-size: 0.55rem; }

  .file-state {
    width: 6px;
    height: 6px;
    margin-left: auto;
    border-radius: 50%;
    background: ${COLORS.PRIMARY};
  }

  @media (max-width: 767px) { margin-top: 1rem; }
`;

export const CodeSnippet = styled.div`
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: center;
  row-gap: 0.2rem;
  padding: 0.7rem 0.75rem;
  color: ${COLORS.TEXT_SECONDARY};
  font: 0.65rem/1.55 ${FONTS.sfMonoRegular};

  code { white-space: pre; }
  .line-number { color: ${COLORS.TEXT_TERTIARY}; user-select: none; }
  .type { color: ${COLORS.PRIMARY_LIGHT}; }
  .keyword, .method { color: ${COLORS.TEXT_PRIMARY}; }
  .comment { color: ${COLORS.TEXT_TERTIARY}; }
`;

export const WorkIndex = styled.aside`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 2.5rem;
  border: 1px solid ${COLORS.BORDER};
  background: ${COLORS.SURFACE};

  @media (max-width: 767px) { padding: 1rem; }
`;

export const IndexHeading = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.7rem ${FONTS.sfMonoRegular};
`;

export const WorkRow = styled.a`
  min-height: 94px;
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr) auto 1rem;
  align-items: center;
  gap: 0.75rem;
  border-top: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT_PRIMARY};
  text-decoration: none;
  transition: padding-left 0.2s ease, color 0.2s ease;

  &:hover, &:focus-visible { padding-left: 0.5rem; color: ${COLORS.PRIMARY_LIGHT}; }

  @media (max-width: 1023px) {
    min-height: 72px;
    grid-template-columns: 1.5rem minmax(0, 1fr) auto;
  }
`;

export const WorkNumber = styled.span`
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.7rem ${FONTS.sfMonoRegular};
`;

export const WorkName = styled.span`
  font: normal clamp(1.8rem, 2.5vw, 2.5rem)/1 ${FONTS.calibreBold};
`;

export const WorkType = styled.span`
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.65rem ${FONTS.sfMonoRegular};

  @media (max-width: 1023px) { display: none; }
`;

export const IndexFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.65rem ${FONTS.sfMonoRegular};

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: ${COLORS.PRIMARY_LIGHT};
    text-decoration: none;
  }

  a:hover { text-decoration: underline; }

  @media (max-width: 479px) { span { display: none; } }
`;
