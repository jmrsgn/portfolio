import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { SmallText, BigText } from '../../../globalComponents';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem 10rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${VIEWPORT.tabletLandscapeUp} {
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media ${VIEWPORT.desktopUp} {
        margin: 0;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;
`;

export const ProjectsContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        div {
            &:nth-child(even) {
                ${SubBox} {
                    flex-direction: row-reverse;
                }
            }
        }
    }

    @media ${VIEWPORT.desktopUp} {
        margin-top: 0;
    }
`;

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${STYLES.COLOR_SURFACE3};
    padding: 1.5rem;
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
    min-width: 300px; 
    min-height: 200px;
    width: 300px;
    box-shadow: 0px 5px 5px #161C24;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 20px;
        width: 500px;
        min-width: 500px;
        padding: 2rem;
    }

    @media ${VIEWPORT.desktopUp} {
        width: 700px;
        min-width: 700px;
    }
`;

export const ProjectTitle = styled(BigText)`
    color: ${STYLES.COLOR_ON_SURFACE};
    font-size: 1.5rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 2.25rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.85rem;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }
`;

export const Tag = styled.div`
    background-color: ${STYLES.COLOR_LIGHT_RED};
    margin: 0.15rem;
    border-radius: 5px;
    padding: .01rem .5rem;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 7px;
        padding: .05rem .75rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        padding: 0.1rem 0.5rem;
    }
`;

export const TagText = styled(SmallText)`
    color: ${STYLES.COLOR_RED};
    font-size: .55rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: .80rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: .75rem;
    }
`;

export const DevelopmentTag = styled.div`
    border-radius: 50%;
    padding: 1rem;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${STYLES.COLOR_SURFACE1};
    position: absolute;
    top: -5%;
    right: -5%;

    @media ${VIEWPORT.tabletUp} {
        width: 100px;
        height: 100px;
    }
`;

export const DevelopmentText = styled(SmallText)`
    font-size: .65rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    position: absolute;
    margin: auto;

    @media ${VIEWPORT.tabletUp} {
        font-size: .8rem;
    }
`;
