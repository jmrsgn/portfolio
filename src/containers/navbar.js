import React from "react";

import { NavBar } from "../components";
import { FaHome, FaBriefcase, FaNetworkWired } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

import navigationData from '../fixtures/navigation.json';
import { COLOR_SURFACE1, COLOR_SURFACE2 } from "../constants/styles/colors";

export function NavBarContainer(props) {
    const navButtons = {
        "home": <FaHome size={25} />,
        "about": <BiInfoCircle size={25} />,
        "projects": <FaNetworkWired size={25} />,
        "experiences": <FaBriefcase size={25} />,
        "contact": <IoCall size={25} />
    };

    return ( 
        <>
            <NavBar>
                {navigationData.map((item, index) => (
                    <NavBar.Nav 
                        href={item.to}
                        active={props.visibleTab === item.name? 'true' : 'false'}
                        color={index % 2 === 0 ? COLOR_SURFACE1 : COLOR_SURFACE2}
                    >
                        {navButtons[item.name]}
                    </NavBar.Nav>
                ))}
            </NavBar>
        </>
    )
};