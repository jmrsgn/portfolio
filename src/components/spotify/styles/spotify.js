import styled from "styled-components";
import * as COLORS from '../../../constants/colors';
import { DescriptionText } from "../../../globalComponents";

export const Container = styled.div`
    max-width: 300px;
    min-width: 250px;
    min-height: 75px;
    background-color: #121212;
    justify-content: space-around;
    border-radius: 8px;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0 2rem 2rem 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    cursor: pointer;
`;

export const Image = styled.img`
    border-radius: 5px;
    height: 50px;
`;

export const TrackInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 2rem;
    height: 100%;
    text-align: left;
    justify-content: center;
`;

export const TrackName = styled(DescriptionText)`
    font-weight: bold;
    font-size: 18px !important;
    color: #FEFEFE;
    line-height: 20px !important;
`;

export const TrackInfoText = styled(DescriptionText)`
    font-size: 14px !important;
    color: #ABABAB;
    line-height: 12px !important;
    margin-top: .25rem;
`;

export const Text = styled(DescriptionText)`
    font-size: .85rem;
    color: ${COLORS.COLOR_ON_SURFACE};
    font-weight: bold;
    margin-top: .25rem;
    line-height: 20px !important;
`;