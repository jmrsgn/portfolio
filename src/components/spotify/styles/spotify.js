import styled from "styled-components";
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { DescriptionText } from "../../../globalComponents";

export const Container = styled.div`
    width: 250px;
    height: 75px;
    background-color: #121212;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0 2rem 2rem 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
`;

export const Image = styled.img`
    border-radius: 15px;
    height: 40px;
`;

export const TrackInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    height: 100%;
    text-align: left;
    justify-content: center;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 5px;
    background: #ffe0e6;
    border-radius: 10px;
    margin-top: 15px;
    position: relative;

    ::before {
        content: '';
        height: 100%;
        width: 50%;
        background: #ff6f61;
        border-radius: 10px;
        position: absolute;
    }
`;

export const TrackName = styled(DescriptionText)`
    font-weight: bold;
    font-size: 18px !important;
    color: #FEFEFE;
`;

export const TrackInfoText = styled(DescriptionText)`
    font-size: 14px !important;
    color: #ABABAB;
    line-height: 12px !important;
`;