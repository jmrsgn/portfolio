import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'

import { HiMenuAlt4, HiX  } from 'react-icons/hi'

import { NavBar } from "../components";

import NavigationData from "../fixtures/navigation.json";

export function NavBarContainer() {
    const [toggle, setToggle] = useState(false);
    const [showNavBar, setshowNavBar] = useState(true);

    var prevScrollpos = window.pageYOffset;
  
    const controlNavBar = () => {
      var currentScrollPos = window.pageYOffset;
      
      if (prevScrollpos > currentScrollPos) {
        setshowNavBar(true);
      } else {
        setshowNavBar(false);
      }
  
      prevScrollpos = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);
      
        return () => {
          window.removeEventListener('scroll', controlNavBar);
        }
      }, []);

    return ( 
        <>
            <NavBar showNavBar={showNavBar}>
                <NavBar.ImageLink to="/">
                    <NavBar.Image src="../images/other/logo.png" />
                </NavBar.ImageLink>

                <NavBar.Menu>
                    {!toggle && (
                        <HiMenuAlt4 onClick={() => setToggle(!toggle)}/>
                    )}

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.3, ease: 'easeIn' }}
                        >

                            <HiX onClick={() => setToggle(!toggle)}/>

                            <ul>
                                {NavigationData.map((item) => (
                                    <li key={item.id}>
                                        <a href={`${item.navigateTo}`} onClick={() => setToggle(!toggle)}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}      
                </NavBar.Menu>
            </NavBar>
        </>
    )
}