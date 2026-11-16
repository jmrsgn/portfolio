import styled from "styled-components";
import * as COLORS from "../../../constants/styles/colors";
import { FONTS } from "../../../fonts/fonts";

export const Container = styled.header.attrs({ className: "nav" })`
  position: relative;
  z-index: 1000;
  color: ${COLORS.TEXT_PRIMARY};

  .skip-link {
    position: fixed;
    top: -5rem;
    left: 1rem;
    z-index: 1100;
    padding: 0.75rem 1rem;
    background: ${COLORS.PRIMARY};
    color: ${COLORS.TEXT_INVERSE};
  }
  .skip-link:focus { top: 0.75rem; }

  .nav-resume {
    flex: 0 0 auto;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    padding: 0 0.75rem;
    background: ${COLORS.PRIMARY};
    color: ${COLORS.TEXT_INVERSE};
    font: 0.7rem ${FONTS.sfMonoRegular};
    text-decoration: none;
  }
  .nav-resume:hover { background: ${COLORS.PRIMARY_HOVER}; }
`;

export const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 1280px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 72px;
    z-index: 1000;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 2rem;
    padding: 0 max(80px, calc((100vw - 1280px) / 2));
    border-bottom: 1px solid ${COLORS.BORDER};
    background: ${COLORS.BACKGROUND};
  }
`;

export const TabletContainer = styled.div`
  display: none;
  @media (min-width: 768px) and (max-width: 1279px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 64px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 24px;
    border-bottom: 1px solid ${COLORS.BORDER};
    background: ${COLORS.BACKGROUND};
  }
`;

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px;
  border-bottom: 1px solid ${COLORS.BORDER};
  background: ${COLORS.BACKGROUND};
  @media (min-width: 768px) { display: none; }
`;

export const DesktopNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-self: center;
`;

export const TabletNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 850px) {
    a { padding: 0 0.4rem; font-size: 0.65rem; }
  }
`;

export const NavigationItem = styled.a<{ $active?: boolean }>`
  position: relative;
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0 0.75rem;
  color: ${({ $active }) => $active ? COLORS.TEXT_PRIMARY : COLORS.TEXT_TERTIARY};
  font: 0.75rem ${FONTS.sfMonoRegular};
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0.75rem;
    right: 0.75rem;
    bottom: -1px;
    height: 2px;
    background: ${COLORS.PRIMARY_LIGHT};
    transform: scaleX(${({ $active }) => $active ? 1 : 0});
    transform-origin: left;
    transition: transform 0.2s ease;
  }
  &:hover { color: ${COLORS.PRIMARY_LIGHT}; }
  &:hover::after { transform: scaleX(1); }
  @media (max-width: 767px) {
    padding: 0;
    &::after { left: 12px; right: 12px; }
  }
`;

export const NavigationNumber = styled.span`display: none;`;
export const NavigationLabel = styled.span`line-height: 1;`;

export const MobileIcon = styled.span`
  display: flex;
  align-items: center;
  line-height: 0;
  svg { width: 18px; height: 18px; }
  @media (min-width: 1280px) { display: none; }
`;

export const Version = styled.span`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.7rem ${FONTS.sfMonoRegular};

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 0.85rem;
    background: ${COLORS.PRIMARY};
    color: ${COLORS.TEXT_INVERSE};
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  a:hover { background: ${COLORS.PRIMARY_HOVER}; }
`;
