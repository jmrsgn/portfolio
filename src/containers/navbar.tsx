import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

import { NavBar } from "../components";

import {
  BsHouse,
  BsPerson,
  BsGrid,
  BsBriefcase,
  BsEnvelope,
} from "react-icons/bs";

import type { IconType } from "react-icons";

/**
 * Navigation configuration
 */

const navigation: {
  id: string;
  label: string;
  number: string;
  icon: IconType;
}[] = [
  {
    id: "home",
    label: "HOME",
    number: "01",
    icon: BsHouse,
  },
  {
    id: "about",
    label: "ABOUT",
    number: "02",
    icon: BsPerson,
  },
  {
    id: "projects",
    label: "PROJECTS",
    number: "03",
    icon: BsGrid,
  },
  {
    id: "experiences",
    label: "EXPERIENCE",
    number: "04",
    icon: BsBriefcase,
  },
  {
    id: "contact",
    label: "CONTACT",
    number: "05",
    icon: BsEnvelope,
  },
];

export function NavBarContainer() {
  const [activeSection, setActiveSection] = useState("home");

  /**
   * Determine the section closest to the viewport's
   * visual center.
   *
   * This is more reliable for a portfolio where
   * each section occupies a large portion of the page.
   */

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const viewportPosition = window.innerHeight * 0.45;

      let closestSection = sections[0];
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        /**
         * Ignore sections that are completely outside
         * the viewport.
         */

        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          return;
        }

        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(sectionCenter - viewportPosition);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      setActiveSection(closestSection.id);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /**
   * Smooth scroll
   */

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    setActiveSection(id);

    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <NavBar>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {/* =========================================
          Desktop
          ========================================= */}

      <NavBar.DesktopContainer role="navigation" aria-label="Primary">
        <NavBar.DesktopNavigation>
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavBar.NavigationItem
                key={item.id}
                href={`#${item.id}`}
                $active={activeSection === item.id}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(event, item.id)
                }
              >
                <NavBar.MobileIcon>
                  <Icon />
                </NavBar.MobileIcon>

                <NavBar.NavigationNumber>{item.number}</NavBar.NavigationNumber>

                <NavBar.NavigationLabel>{item.label}</NavBar.NavigationLabel>
              </NavBar.NavigationItem>
            );
          })}
        </NavBar.DesktopNavigation>

        <NavBar.Version>
          <a href="/resume/RESUME_JohnMartinMarasigan.pdf" target="_blank" rel="noopener noreferrer">View resume ↗</a>
        </NavBar.Version>
      </NavBar.DesktopContainer>

      {/* =========================================
          Tablet
          ========================================= */}

      <NavBar.TabletContainer role="navigation" aria-label="Primary">
        <NavBar.TabletNavigation>
          {navigation.map((item) => (
            <NavBar.NavigationItem
              key={item.id}
              href={`#${item.id}`}
              $active={activeSection === item.id}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(event, item.id)
              }
            >
              {item.label}
            </NavBar.NavigationItem>
          ))}
        </NavBar.TabletNavigation>
        <a className="nav-resume" href="/resume/RESUME_JohnMartinMarasigan.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </NavBar.TabletContainer>

      {/* =========================================
          Mobile
          ========================================= */}

      <NavBar.MobileContainer role="navigation" aria-label="Primary">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavBar.NavigationItem
              key={item.id}
              href={`#${item.id}`}
              $active={activeSection === item.id}
              aria-current={activeSection === item.id ? "location" : undefined}
              aria-label={item.label}
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(event, item.id)
              }
            >
              <NavBar.MobileIcon>
                <Icon />
              </NavBar.MobileIcon>
            </NavBar.NavigationItem>
          );
        })}
      </NavBar.MobileContainer>
    </NavBar>
  );
}
