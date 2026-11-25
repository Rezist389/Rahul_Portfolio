import { ThemeProvider } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100svh;
  overflow-x: hidden;
  position: relative;
  transition: background-color 0.25s ease, color 0.25s ease;
`;

const AmbientBackdrop = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(
      650px circle at var(--spot-x, 50%) var(--spot-y, 20%),
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(56, 189, 248, 0.08)"
          : "rgba(37, 99, 235, 0.05)"},
      transparent 60%
    ),
    radial-gradient(
      circle at 12% 8%,
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(56, 189, 248, 0.09)"
          : "rgba(37, 99, 235, 0.06)"} 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 88% 24%,
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(99, 102, 241, 0.09)"
          : "rgba(79, 70, 229, 0.06)"} 0%,
      transparent 42%
    ),
    radial-gradient(
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(148, 163, 184, 0.07)"
          : "rgba(15, 23, 42, 0.045)"} 1px,
      transparent 1px
    );
  background-size: 100% 100%, 100% 100%, 100% 100%, 32px 32px;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const SectionDivider = styled.div`
  width: calc(100% - (var(--gutter) * 2));
  height: 1px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.border} 20%,
    ${({ theme }) => theme.border} 80%,
    transparent 100%
  );
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const backdropRef = useRef(null);

  // Interactive cursor spotlight across any viewport size
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!backdropRef.current) return;
      backdropRef.current.style.setProperty("--spot-x", `${e.clientX}px`);
      backdropRef.current.style.setProperty("--spot-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  // Dynamic scroll-reveal observer (also catches dynamically filtered items)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <AmbientBackdrop ref={backdropRef} />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <MainContent>
            <HeroSection />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Achievements />
            <SectionDivider />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Contact />
          </MainContent>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
