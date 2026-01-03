import { NavBar } from "../components";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineSquares2X2,
    HiOutlineBriefcase,
    HiOutlineEnvelope
} from "react-icons/hi2";

import navigationData from '../fixtures/navigation.json';
import * as COLORS from '../constants/styles/colors';

export function NavBarContainer(props) {
    const navButtons = {
        "home": <HiOutlineHome size={25} />,
        "about": <HiOutlineUser size={25} />,
        "projects": <HiOutlineSquares2X2 size={25} />,
        "experiences": <HiOutlineBriefcase size={25} />,
        "contact": <HiOutlineEnvelope size={25} />
    };

    return (
        <>
            <NavBar>
                {navigationData.map((item) => (
                    <NavBar.Nav
                        href={item.to}
                        active={props.visibleTab === item.name ? 'true' : 'false'}
                        color={COLORS.PRIMARY}
                    >
                        {navButtons[item.name]}
                    </NavBar.Nav>
                ))}
            </NavBar>
        </>
    )
};