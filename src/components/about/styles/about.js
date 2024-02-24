import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONT } from '../../../fonts/fonts';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG1};
`;

export const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto 0 auto;
    display: flex;
    padding: 2.25rem 1.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
        flex-direction: row;
    }
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ marginTop }) => (marginTop)};
`;

export const InfoBox = styled.div`
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
`;

export const Link = styled.a`
    font-family: ${FONT.calibreRegular};
    font-size: 1rem;
    color: ${COLORS.COLOR_SURFACE1};
    font-style: italic;
    line-height: ${({ lineHeight }) => (lineHeight? lineHeight : '22px')};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-left: ${({ marginLeft }) => (marginLeft)};

    @media ${VIEWPORT.desktopUp} {
        line-height: ${({ lineHeight }) => (lineHeight? lineHeight : '26px')};
        font-size: 1.2rem;
    }
`;

export const Avatar = styled.img`
    width: 250px;
    height: auto;
    border-radius: 50%;
    border: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
    margin-bottom: 2rem;
`;

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
`;