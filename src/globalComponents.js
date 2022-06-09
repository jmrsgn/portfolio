import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import * as STYLES from './constants/styles';
import { VIEWPORT } from './constants/viewports';

export const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 3rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 2.5rem;
    }
`;

export const BigText = styled(Text)`
    font-size: 3rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 5rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 4rem;
    }
`;

export const SmallText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: ${STYLES.COLOR_LIGHT_GRAY};
    font-size: .85rem;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-bottom: ${({ marginBottom }) => (marginBottom? marginBottom : '0')};
    line-height: 24px;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
        line-height: 32px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.15rem;
        line-height: 30px;
    }
`;

export const Title = styled(Text)`
    font-size: 2rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 3rem;
    }
`;

export const SubTitle = styled(Title)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-size: 2rem;
`

export const Button = styled.button`
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE2}`)};
    margin-top: 2rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    border: none;
    outline: none;
    width: 130px;
    font-size: 1rem;
    padding: .65rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    cursor: pointer;

    @media ${VIEWPORT.tabletUp} {
        width: 200px;
        font-size: 1.5rem;
        padding: 1rem;
        border-radius: 15px;
        margin-top: 4rem;
    } 

    @media ${VIEWPORT.tabletLandscapeUp} {
        width: 180px;
        font-size: 1.25rem;
        padding: .8rem;
    }
`;

export const Divider = styled.div`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    width: 60px;
    height: 7px;
    border-radius: 50px;
    background-color: ${({ type }) => (type === '1'? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE2}`)};

    @media ${VIEWPORT.tabletUp} {
        width: 90px;
        height: 9px;
    }
`;

export const MiniDivider = styled(Divider)`
    height: 2px;
    border-radius: 10px;
    width: 50px;
    margin-left: ${({ marginLeft }) => (marginLeft? marginLeft : '0')};
`;

export const TextLink = styled(Link)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE2}`)};
    letter-spacing: 2px;
    font-size: .85rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.5rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.25rem;
    }
`;

export const FilterCell = styled.div`
    border-radius: 10px;
    background-color: ${({ type }) => (type === '1'? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE3}`)};
    padding: .75rem .95rem;
    cursor: ${({ cursor }) => (cursor? cursor : "pointer")};
    transition: .3s ease-in;
    margin: 0.5rem;

    &:hover {
        background-color: ${STYLES.COLOR_SURFACE1};
    }

    @media ${VIEWPORT.tabletUp} {
        border-radius: 15px;
        padding: 1.35rem 1.65rem;
    }
`;

export const FilterText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: .85rem;
    color: ${STYLES.COLOR_ON_SURFACE};

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
    }
`;

export const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin: .5rem 0 .5rem 0;

    svg {
        width: 20px;
        height: 20px;
        color: ${STYLES.COLOR_ON_SURFACE};
    }

    &:hover {
        background-color: ${STYLES.COLOR_SURFACE1};
        border-color: ${STYLES.COLOR_SURFACE1};
  
        svg {
          color: ${STYLES.COLOR_ON_SURFACE};
        }
    }

    @media ${VIEWPORT.tabletUp} {
        width: 55px;
        height: 55px;
        margin: .5rem 0 .5rem 0;

        svg {
            width: 35px;
            height: 35px;
        }
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        margin: 0 .5rem 0 .5rem;
        width: 50px;
        height: 50px;

        &:first-of-type {
            margin-left: 0;
        }

        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

export const ProjectMobileAppImage = styled.img`
    width: 250px;
    height: auto;

    @media ${VIEWPORT.tabletUp} {
        width: 320px;
        margin: 1rem 0 1rem 0;
    }
`;

export const ProjectWebAppImage = styled.img`
    width: auto;
    height: 200px;

    @media ${VIEWPORT.tabletUp} {
        height: 320px;
        margin: 1rem 0 1rem 0;
    }
`

export const BoxFlex = styled.div`
    width: ${({ width }) => (width)};
    display: flex;
    text-align: ${({ textAlign }) => (textAlign)};
    margin: ${({ margin }) => (margin)};
    margin-left: ${({ marginLeft }) => (marginLeft)};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    justify-content: ${({ justifyContent }) => (justifyContent)};
    align-items: ${({ alignItems }) => (alignItems)};
    flex-direction: ${({ flexDirection }) => (flexDirection === "column"? "column" : "row")};
`;

export const SpanBoldText = styled.span`
    font-weight: bold;
    color: ${({ color }) => (color? color : `${STYLES.COLOR_LIGHT_GRAY}`)};
`;