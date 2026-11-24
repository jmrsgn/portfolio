import styled from "styled-components";

import * as COLORS from "../../constants/styles/colors";
import { FONTS } from "../../fonts/fonts";

const CODE_TYPE = "#87B8E7";
const CODE_VARIABLE = "#9CC7BC";
const CODE_METHOD = "#E3C979";
const TERMINAL_CURRENT_DIRECTORY = "#5FAEFF";
const TERMINAL_BRANCH = "#8FCFA3";

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
  margin: 0;
  padding: 1.15rem 1rem 0.85rem;
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
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: ${COLORS.BACKGROUND};
`;

export const CodeSnippet = styled.div`
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: center;
  row-gap: 0.45rem;
  padding: 1.25rem 1rem;
  color: ${COLORS.TEXT_SECONDARY};
  font: 0.65rem/1.55 ${FONTS.sfMonoRegular};

  code { white-space: pre; }
  .line-number { color: ${COLORS.TEXT_TERTIARY}; user-select: none; }
  .type { color: ${CODE_TYPE}; }
  .variable { color: ${CODE_VARIABLE}; }
  .method { color: ${CODE_METHOD}; }
  .keyword { color: ${COLORS.TEXT_PRIMARY}; }
  .comment { color: ${COLORS.TEXT_TERTIARY}; }

  .comment-line {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    min-width: 0;
    white-space: normal;
  }

  .comment-line .comment {
    flex-shrink: 0;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: color-mix(in srgb, ${COLORS.WARNING} 55%, ${COLORS.BACKGROUND});
    text-decoration-thickness: 0.5px;
    text-underline-offset: 3px;
  }

  .inline-hint {
    color: ${COLORS.WARNING};
    font-size: 0.6rem;
  }
`;

export const IdeWindow = styled.aside`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 540px;
  border: 1px solid ${COLORS.BORDER};
  background: ${COLORS.SURFACE};

  @media (max-width: 767px) { min-height: 410px; }
`;

export const IdeTitleBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 0.5rem;
  min-height: 38px;
  padding: 0 0.8rem;
  border-bottom: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.58rem ${FONTS.sfMonoRegular};

  .window-controls { display: flex; gap: 0.35rem; }
  .window-controls span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
  .window-controls span:nth-child(1) { background: #FF5F57; }
  .window-controls span:nth-child(2) { background: #FEBC2E; }
  .window-controls span:nth-child(3) { background: #28C840; }
`;

export const IdeWorkspace = styled.div`
  display: grid;
  grid-template-columns: 36px 108px minmax(0, 1fr);
  flex: 1;
  min-height: 0;

  @media (max-width: 767px) {
    grid-template-columns: 32px minmax(0, 1fr);
  }
`;

export const IdeActivityBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 0;
  border-right: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT_DISABLED};

  svg { width: 16px; height: 16px; }
  svg.active { color: ${COLORS.PRIMARY_LIGHT}; }
`;

export const IdeExplorer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
  padding: 0.9rem 0;
  border-right: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.56rem ${FONTS.sfMonoRegular};

  .explorer-heading { padding: 0 0.7rem 0.65rem; letter-spacing: 0.06em; }
  .folder { padding: 0 0.7rem; color: ${COLORS.TEXT_SECONDARY}; }
  .file {
    padding: 0.4rem 0.4rem 0.4rem 1.25rem;
    background: ${COLORS.SURFACE_ELEVATED};
    color: ${COLORS.TEXT_PRIMARY};
    white-space: nowrap;
  }

  @media (max-width: 767px) { display: none; }
`;

export const IdeMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
`;

export const IdeTabBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: fit-content;
  min-height: 36px;
  padding: 0 0.85rem;
  border-top: 2px solid ${COLORS.PRIMARY_LIGHT};
  border-right: 1px solid ${COLORS.BORDER};
  border-bottom: 1px solid ${COLORS.BACKGROUND};
  color: ${COLORS.TEXT_PRIMARY};
  font: 0.6rem ${FONTS.sfMonoRegular};

  .file-mark { color: ${COLORS.PRIMARY_LIGHT}; font-size: 0.55rem; }
  .file-state {
    width: 5px;
    height: 5px;
    margin-left: 0.8rem;
    border-radius: 50%;
    background: ${COLORS.PRIMARY_LIGHT};
  }
`;

export const IdeOutput = styled.div`
  min-height: 148px;
  border-top: 1px solid ${COLORS.BORDER};
  background: ${COLORS.BACKGROUND};

  .output-heading {
    display: block;
    padding: 0.65rem 1rem;
    border-bottom: 1px solid ${COLORS.BORDER};
    color: ${COLORS.TEXT_SECONDARY};
    font: 0.57rem ${FONTS.sfMonoRegular};
    letter-spacing: 0.07em;
  }

  .terminal-directory,
  .terminal-command {
    display: block;
    padding: 0.55rem 1rem 0;
    color: ${COLORS.TEXT_PRIMARY};
    font: 0.65rem ${FONTS.sfMonoRegular};
  }

  .terminal-directory {
    padding-top: 0.8rem;
    overflow-wrap: anywhere;

    .terminal-parent-path { color: ${CODE_TYPE}; }
    .terminal-current-directory {
      color: ${TERMINAL_CURRENT_DIRECTORY};
      font-weight: 700;
    }
    .terminal-branch { color: ${TERMINAL_BRANCH}; }
  }

  .terminal-command {
    padding-top: 0.15rem;

    span { color: ${COLORS.TEXT_TERTIARY}; }
  }

  @media (max-width: 767px) { min-height: 136px; }
`;

export const IdeStatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 26px;
  padding: 0 0.7rem;
  border-top: 1px solid ${COLORS.BORDER};
  background: ${COLORS.SURFACE_ELEVATED};
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.55rem ${FONTS.sfMonoRegular};
`;
