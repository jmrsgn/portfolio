const BREAKPOINTS = {
    tablet: 600,
    tabletLandscape: 900,
    desktop: 1200,
};

export const VIEWPORT = {
    tabletUp: `(min-width: ${BREAKPOINTS.tablet}px)`,
    tabletLandscapeUp: `(min-width: ${BREAKPOINTS.tabletLandscape}px)`,
    desktopUp: `(min-width: ${BREAKPOINTS.desktop}px)`,
};