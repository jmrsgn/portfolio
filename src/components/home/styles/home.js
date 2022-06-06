import styled from 'styled-components/macro';
import * as STYLES from '../../../styles';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    display: flex;
    justify-content: space-around;
`;

export const Box = styled.div`
    flex: 1;
    padding: 5rem;
    position: relative;
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: auto;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    min-width: 200px;
    margin-top: 24px;
`;

export const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    transition: all 0.3s ease-in-out;

    svg {
        width: 15px;
        height: 15px;
        color: ${STYLES.COLOR_ON_SURFACE};
    }

    &:hover {
        background-color: ${STYLES.COLOR_SURFACE1};
        border-color: ${STYLES.COLOR_SURFACE1};
  
        svg {
          color: ${STYLES.COLOR_ON_SURFACE};
        }
    }
`;

export const Image = styled.img`
    width: 300px;
    height: auto;
    margin: auto;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
`;

export const TechBubbleContainer= styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 500px;
`;

export const TechBubble = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: relative;
    background-color: ${STYLES.COLOR_SURFACE3};
    transition: .2s ease-in;

    &:first-of-type,
    &:last-of-type {
        transform: translateY(50%);
    }
`;

export const TechImage = styled.img`
    width: 30px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;