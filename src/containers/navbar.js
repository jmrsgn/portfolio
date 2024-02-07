import React, { useState } from "react";

import { NavBar } from "../components";

import { FaHome, FaPhoneAlt, FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

import navigationData from '../fixtures/navigation.json';


export function NavBarContainer(props) {
    // const [activeTab, setActiveTab] = useState(navigationData[0].name);

    console.log("ANG VISIBLE AY: " + props.visibleTab);
    
    const navButtons = {
        "home": <FaHome size={25} />,
        "projects": <FaProjectDiagram size={25} />,
        "experiences": <GiSkills size={25} />,
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