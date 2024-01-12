import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { SmallText, BigText } from '../../../globalComponents';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_BG1}` : `${STYLES.COLOR_BG2}`)};
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem
    }

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem 10rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    width: 100%;
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
    border-radius: 50%;
    border: solid 3px ${STYLES.COLOR_SURFACE2};

    @media ${VIEWPORT.tabletUp} {
        width: 300px;
        height: 300px
    }

    @media ${VIEWPORT.desktopUp} {
        width: 250px;
        height: 250px;
    }
`;

export const Skill = styled.div`
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE2}` : `${STYLES.COLOR_SURFACE3}`)};
    border-radius: 10px;
    display: flex;
    padding: 1.5rem;
    width: 300px;
    min-width: 300px;
    min-height: 300px;
    height: 300px;
    flex-direction: column;
    align-items: left;
    margin: 1rem;
    box-shadow: 0px 5px 5px #161C24;

    &:last-of-type {
        img {
            width: 35px;
        }
    }
 
    @media ${VIEWPORT.tabletUp} {
        border-radius: 20px;
        width: 500px;
        min-width: 500px;
        min-height: 450px;
        padding: 2rem;

        &:last-of-type {
            img {
                width: 50px;
            }
        }
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        min-width: 400px;
        width: 400px;
        height: 450px;
    }

    @media ${VIEWPORT.desktopUp} {
        min-width: 350px;
        width: 350px;
        height: 430px;
        min-height: 430px;
    }
`;

export const SkillsContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
        width: 100%;
        flex-wrap: wrap;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        flex-direction: row;
        justify-content: center;
    }
`;

export const DescriptionContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    text-align: center;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    @media ${VIEWPORT.desktopUp} {
        width: 80%;
    }
`

export const AvatarDescription = styled(SmallText)`
    @media ${VIEWPORT.tabletLandscapeUp} {
        width: 60%;
    }

    @media ${VIEWPORT.desktopUp} {
        width: 70%;
    }
`

export const AvatarDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70%;
`; 

export const SkillTitle = styled(BigText)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-size: 1.5rem;
    line-height: 36px;
    font-weight: bold;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
        line-height: 56px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 2.25rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.85rem;
        line-height: 42px;
    }
`;

export const Image = styled.img`
    height: 30px;
    width: 30px;

    @media ${VIEWPORT.tabletUp} {
        height: 45px;
        width: 45px;
        margin-bottom: 1rem;
    }
`;

export const QuoteContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
`;

export const MiniDivider = styled.div`
    height: 1px;
    width: 50px;
    background-color: ${STYLES.COLOR_SURFACE1};
`;

export const Quote = styled.p`
    margin-left: 5px;
    margin-right: 5px;
    width: 50%;
    font-family: Arial, Helvetica, sans-serif;
    color: ${STYLES.COLOR_SURFACE1};
    font-style: italic;
    font-size: 1rem;
`