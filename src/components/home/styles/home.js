import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { _Box, _Container, Title } from '../../../globalComponents';


export const Container = styled(_Container)`
    background-color: ${COLORS.COLOR_BG1};
`;

export const Box = styled(_Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 0 auto;
    padding: 1.5rem;

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem;

        flex-direction: row;

        position: absolute;
        top: 50%; 
        right: 50%;
        transform: translate(50%,-50%);
    }
`;

export const InfoBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`;

export const GreetingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 3rem;
    }
`;

export const Greeting = styled(Title)`
    color: ${COLORS.COLOR_ON_BACKGROUND};

    @media ${VIEWPORT.desktopUp} {
        margin-top: 2rem;
    }
`;

export const Image = styled.img`
    height: auto;
    width: 90%;
    transform: translateX(20%);
`;
