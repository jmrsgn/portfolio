export const BREAKPOINTS = {
    mobile: 360,
    mobileLarge: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1280,
    desktopLarge: 1440,
    ultraWide: 1920,
};

export const VIEWPORT = {
    mobileUp: `(min-width: ${BREAKPOINTS.mobile}px)`,
    mobileLargeUp: `(min-width: ${BREAKPOINTS.mobileLarge}px)`,
    tabletUp: `(min-width: ${BREAKPOINTS.tablet}px)`,
    tabletLandscapeUp: `(min-width: ${BREAKPOINTS.tabletLandscape}px)`,
    desktopUp: `(min-width: ${BREAKPOINTS.desktop}px)`,
    desktopLargeUp: `(min-width: ${BREAKPOINTS.desktopLarge}px)`,
    ultraWideUp: `(min-width: ${BREAKPOINTS.ultraWide}px)`,
};
