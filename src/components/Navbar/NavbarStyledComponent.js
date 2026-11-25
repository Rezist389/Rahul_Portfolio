import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.header`
  background-color: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  height: var(--nav-h);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.25s ease, border-color 0.25s ease;
`;

export const ScrollProgressBar = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  width: ${({ $progress }) => `${$progress}%`};
  background: ${({ theme }) => theme.accentGradient};
  transition: width 0.1s linear;
  pointer-events: none;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 var(--gutter);
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
`;

export const BrandBadge = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: -0.03em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px -6px rgba(56, 189, 248, 0.45);
`;

export const BrandTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

export const Span = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

export const BrandSub = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.text_muted};
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.3rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  list-style: none;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme, $active }) => ($active ? theme.text_primary : theme.text_secondary)};
  background: ${({ theme, $active }) => ($active ? theme.card : "transparent")};
  box-shadow: ${({ $active }) => ($active ? "0 2px 8px rgba(0,0,0,0.12)" : "none")};
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.42rem 0.82rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (max-width: 1260px) {
    padding: 0.38rem 0.62rem;
    font-size: 0.8rem;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.65rem;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const ThemeToggleBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

export const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.4rem;
  border-radius: 0.65rem;
  cursor: pointer;
  padding: 0 0.95rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    background: ${({ theme }) => theme.primarySoft};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

export const ResumeNavButton = styled.a`
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  height: 2.4rem;
  border-radius: 0.65rem;
  cursor: pointer;
  padding: 0 1rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  box-shadow: 0 8px 20px -8px rgba(56, 189, 248, 0.55);

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }
`;

export const MobileRightControls = styled.div`
  display: none;
  @media screen and (max-width: 1080px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const MobileIcon = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: var(--nav-h);
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem var(--gutter) 1.5rem;
  background: ${({ theme }) => theme.card};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 999;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.65rem 0.75rem;
  border-radius: 0.65rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primarySoft};
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileActionsRow = styled.div`
  display: flex;
  gap: 0.65rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;
