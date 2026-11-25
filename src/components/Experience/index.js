import React from "react";
import styled from "styled-components";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";

const Container = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: var(--section-py) var(--gutter);
`;

const SplitLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(260px, 0.36fr) minmax(0, 0.64fr);
  gap: clamp(2rem, 5vw, 5.5rem);
  align-items: start;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

const StickyIntro = styled.div`
  position: sticky;
  top: calc(var(--nav-h) + 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1040px) {
    position: static;
  }
`;

const Eyebrow = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primarySoft};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 0.9rem;
`;

const Title = styled.h2`
  font-size: clamp(1.85rem, 2.8vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.85rem;
  line-height: 1.15;
`;

const Desc = styled.p`
  font-size: 1rem;
  line-height: 1.68;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 44ch;
`;

const HighlightBox = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  padding: 1.15rem 1.25rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  @media (max-width: 1040px) {
    display: none;
  }
`;

const HighlightTitle = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const HighlightText = styled.p`
  font-size: 0.88rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_secondary};
`;

const TimelineList = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 2.2vw, 2rem);
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.55rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.primary} 0%,
      ${({ theme }) => theme.secondary} 65%,
      transparent 100%
    );
  }

  @media (max-width: 640px) {
    padding-left: 1.35rem;
    &::before {
      left: 0.3rem;
    }
  }
`;

const TimelineEntry = styled.div`
  position: relative;
  width: 100%;
`;

const TimelineNode = styled.span`
  position: absolute;
  left: -1.9rem;
  top: 1.65rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  border: 3px solid ${({ theme, $first }) => ($first ? theme.primary : theme.secondary)};
  box-shadow: ${({ $first, theme }) =>
    $first ? `0 0 0 5px ${theme.primarySoft}` : "none"};

  @media (max-width: 640px) {
    left: -1.45rem;
    width: 0.88rem;
    height: 0.88rem;
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <SplitLayout>
        <StickyIntro data-reveal>
          <Eyebrow>Career Trajectory</Eyebrow>
          <Title>Professional Experience</Title>
          <Desc>
            Delivering measurable impact across enterprise manufacturing platforms, full-stack web products, and agile engineering teams.
          </Desc>
          <HighlightBox>
            <HighlightTitle>Enterprise Focus</HighlightTitle>
            <HighlightText>
              Currently shipping mission-critical React &amp; .NET workflows at Tata Consultancy Services for 500+ Jaguar Land Rover plant users.
            </HighlightText>
          </HighlightBox>
        </StickyIntro>

        <TimelineList>
          {experiences.map((experience, index) => (
            <TimelineEntry key={experience.id} data-reveal>
              <TimelineNode $first={index === 0} />
              <ExperienceCard experience={experience} isCurrent={index === 0} />
            </TimelineEntry>
          ))}
        </TimelineList>
      </SplitLayout>
    </Container>
  );
};

export default Experience;
