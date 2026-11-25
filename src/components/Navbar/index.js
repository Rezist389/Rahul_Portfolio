import React, { useState, useEffect } from "react";
import {
  Nav,
  ScrollProgressBar,
  NavLink,
  NavbarContainer,
  BrandBadge,
  BrandTextWrap,
  Span,
  BrandSub,
  NavLogo,
  NavItems,
  GitHubButton,
  ResumeNavButton,
  ThemeToggleBtn,
  ButtonContainer,
  MobileRightControls,
  MobileIcon,
  MobileMenu,
  MobileLink,
  MobileActionsRow,
} from "./NavbarStyledComponent";
import { FaBars, FaGithub } from "react-icons/fa";
import {
  CloseRounded,
  LightModeRounded,
  DarkModeRounded,
  NorthEastRounded,
} from "@mui/icons-material";
import { Bio } from "../../data/constants";

const NAV_SECTIONS = [
  { id: "about", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0
      );

      const scrollPos = scrollTop + window.innerHeight * 0.25;
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_SECTIONS[i].id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BrandBadge>RW</BrandBadge>
          <BrandTextWrap>
            <Span>Rahul Wankhede</Span>
            <BrandSub>Full Stack &amp; GenAI Engineer</BrandSub>
          </BrandTextWrap>
        </NavLogo>

        <NavItems>
          {NAV_SECTIONS.map((item) => (
            <li key={item.id}>
              <NavLink href={`#${item.id}`} $active={activeSection === item.id}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <ThemeToggleBtn
            type="button"
            aria-label="Toggle color theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <LightModeRounded fontSize="small" />
            ) : (
              <DarkModeRounded fontSize="small" />
            )}
          </ThemeToggleBtn>
          <GitHubButton href={Bio.github} target="_blank" rel="noreferrer">
            <FaGithub size="1em" />
            GitHub
          </GitHubButton>
          <ResumeNavButton href={Bio.resume} target="_blank" rel="noreferrer">
            Resume
            <NorthEastRounded sx={{ fontSize: "1.05em" }} />
          </ResumeNavButton>
        </ButtonContainer>

        <MobileRightControls>
          <ThemeToggleBtn
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <LightModeRounded fontSize="small" />
            ) : (
              <DarkModeRounded fontSize="small" />
            )}
          </ThemeToggleBtn>
          <MobileIcon
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseRounded /> : <FaBars size="1em" />}
          </MobileIcon>
        </MobileRightControls>

        {isOpen && (
          <MobileMenu>
            {NAV_SECTIONS.map((item) => (
              <MobileLink
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileLink>
            ))}
            <MobileActionsRow>
              <GitHubButton href={Bio.github} target="_blank" rel="noreferrer">
                <FaGithub size="1em" />
                GitHub Profile
              </GitHubButton>
              <ResumeNavButton
                href={Bio.resume}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
                <NorthEastRounded sx={{ fontSize: "1.05em" }} />
              </ResumeNavButton>
            </MobileActionsRow>
          </MobileMenu>
        )}
      </NavbarContainer>
      <ScrollProgressBar $progress={scrollProgress} />
    </Nav>
  );
};

export default Navbar;
