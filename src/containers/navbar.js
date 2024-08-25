import React from "react";

import { NavBar } from "../components";
import { FaHome, FaBriefcase, FaNetworkWired } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

import navigationData from '../fixtures/navigation.json';

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
                    >
                        {navButtons[item.name]}
                    </NavBar.Nav>
                ))}
            </NavBar>
        </>
    )
};