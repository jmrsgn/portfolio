import React from "react";

import { NavBar } from "../components";
import { FaHome, FaPhoneAlt, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

import navigationData from '../fixtures/navigation.json';

export function NavBarContainer(props) {
    const navButtons = {
        "home": <FaHome size={25} />,
        "projects": <FaProjectDiagram size={25} />,
        "experiences": <FaBriefcase size={25} />,
        "contact": <FaPhoneAlt size={25} />
    };

    return ( 
        <>
            <NavBar>
                {navigationData.map((item) => (
                    <NavBar.Nav href={item.to}
                        active={props.visibleTab === item.name? 'true' : 'false'}
                    >
                        {navButtons[item.name]}
                    </NavBar.Nav>
                ))}
            </NavBar>
        </>
    )
};