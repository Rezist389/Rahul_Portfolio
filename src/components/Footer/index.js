import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { Bio } from "../../data/constants";

const FooterContainer = styled.footer`
  width: 100%;
  padding: clamp(2rem, 4vh, 3.25rem) var(--gutter);
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgLight};
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

const BrandGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Logo = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 1.18rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Tagline = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_muted};
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Copyright = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.text_muted};
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

const SocialMediaIcon = styled.a`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-2px);
  }
`;

const BackToTop = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  background: ${({ theme }) => theme.primarySoft};
  color: ${({ theme }) => theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.35rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TopRow>
          <BrandGroup>
            <Logo>{Bio.name}</Logo>
            <Tagline>Full Stack &amp; GenAI Engineer • MERN, .NET &amp; Multi-Agent Systems</Tagline>
          </BrandGroup>

          <Nav>
            <NavLink href="#about">Overview</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </TopRow>

        <BottomRow>
          <Copyright>
            &copy; {new Date().getFullYear()} {Bio.name}. Crafted with React.
          </Copyright>

          <RightGroup>
            <SocialMediaIcon
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </SocialMediaIcon>
            <SocialMediaIcon
              href={Bio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </SocialMediaIcon>
            <SocialMediaIcon
              href={Bio.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon fontSize="small" />
            </SocialMediaIcon>
            <SocialMediaIcon
              href={Bio.insta}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon fontSize="small" />
            </SocialMediaIcon>
            <BackToTop
              type="button"
              aria-label="Back to top"
              title="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <KeyboardArrowUpRoundedIcon fontSize="small" />
            </BackToTop>
          </RightGroup>
        </BottomRow>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
