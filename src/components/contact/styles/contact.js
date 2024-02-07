import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { Text } from '../../../globalComponents';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG2};
`;

export const Box = styled.div`
    width: 85%;
    height: 100vh;
    margin: 0 auto 0 auto;
    padding: 5rem;
    display: flex;
    flex-direction: column;  
    text-align: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
`;

export const SubBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ImagesContainer = styled.div`
    
`;

export const Image = styled.img`
    
`;

export const ButtonText = styled(Text)`
    
`

export const Button = styled(Link)`
    
`;

