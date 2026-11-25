import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100svh - var(--nav-h));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(2rem, 4.5vh, 4rem);
  padding: clamp(1.75rem, 4.5vh, 4rem) var(--gutter) clamp(2rem, 5vh, 4.25rem);
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: var(--gutter);
  overflow: hidden;
  pointer-events: none;
  opacity: ${({ theme }) => (theme.mode === "dark" ? 0.5 : 0.22)};

  @media (max-width: 960px) {
    justify-content: center;
    padding-right: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
  gap: clamp(2rem, 5vw, 6.5rem);
  align-items: center;
  width: 100%;
  margin: auto 0;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
    text-align: center;
  }
`;

export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    align-items: center;
  }
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.successSoft};
  border: 1px solid ${({ theme }) => theme.success}40;
  color: ${({ theme }) => theme.success};
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
`;

export const PulseDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.success};
  box-shadow: 0 0 10px ${({ theme }) => theme.success};
  animation: pulseGlow 2s infinite ease-in-out;
`;

export const GreetingTag = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.92rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.55rem;
  letter-spacing: 0.02em;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(2.15rem, 3.8vw + 0.6rem, 4.35rem);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  max-width: 20ch;
`;

export const GradientName = styled.span`
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.1rem, 1.4vw + 0.5rem, 1.7rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1.25rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const Span = styled.span`
  font-family: "JetBrains Mono", monospace;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primarySoft};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  padding: 0.2rem 0.75rem;
  border-radius: 0.55rem;
  font-size: 0.9em;
`;

export const SubTitle = styled.p`
  font-size: clamp(0.98rem, 0.45vw + 0.85rem, 1.18rem);
  line-height: 1.72;
  max-width: 64ch;
  margin-bottom: 1.85rem;
  color: ${({ theme }) => theme.text_secondary};
`;

export const CTAGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1.65rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.9rem 1.65rem;
  color: #ffffff;
  border-radius: 0.8rem;
  font-size: 0.96rem;
  font-weight: 600;
  background: ${({ theme }) => theme.accentGradient};
  box-shadow: 0 14px 30px -10px rgba(56, 189, 248, 0.5);
  transition: all 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px -10px rgba(56, 189, 248, 0.65);
  }
`;

export const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.9rem 1.55rem;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.8rem;
  font-size: 0.96rem;
  font-weight: 600;
  transition: all 0.22s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    background: ${({ theme }) => theme.cardHover};
    transform: translateY(-2px);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.text_muted};
  font-size: 0.85rem;

  @media (max-width: 960px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SocialPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.85rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-1px);
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
  }
`;

export const PortraitFrame = styled.div`
  position: relative;
  padding: clamp(0.65rem, 1vw, 1rem);
  border-radius: 1.75rem;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  width: clamp(220px, 24vw, 490px);
  max-width: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 1.75rem;
    padding: 1px;
    background: ${({ theme }) => theme.accentGradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 1.25rem;
`;

export const FloatingTag = styled.div`
  position: absolute;
  bottom: -0.95rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.05rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  box-shadow: ${({ theme }) => theme.shadow};
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const MetricsGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.85rem, 1.6vw, 1.5rem);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.15rem;
  padding: clamp(1.1rem, 1.5vw, 1.65rem);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: all 0.22s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

export const MetricValue = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.65rem, 2.2vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const MetricLabel = styled.div`
  font-size: 0.92rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const MetricDetail = styled.div`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.text_muted};
`;
