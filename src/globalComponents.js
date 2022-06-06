import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import * as STYLES from './styles';

export const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
`;

export const BigText = styled(Text)`
    font-size: 4rem;
`;

export const BigBoldText = styled(BigText)`
    font-weight: bold;
`

export const Title = styled(Text)`
    font-size: 2.5rem;
`;

export const SmallText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: ${STYLES.COLOR_LIGHT_GRAY};
    font-size: 1rem;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-bottom: ${({ marginBottom }) => (marginBottom? marginBottom : '0')};
    line-height: 24px;
`;

export const Button = styled.button`
    background-color: ${({ buttonType }) => (buttonType === '1' ? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE2}`)};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-family: 'Poppins', sans-serif;
    border-radius: 15px;
    border: none;
    outline: none;
    padding: 1rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-size: 1.15rem;
    cursor: pointer;
`;

export const Divider = styled.div`
    width: 70px;
    height: 10px;
    border-radius: 50px;
    background-color: ${({ type }) => (type === '1'? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE2}`)};
`;

export const TextLink = styled(Link)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE2}`)};
    letter-spacing: 2px;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
`;