import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: var(--section-py) var(--gutter);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: clamp(2rem, 4vh, 3rem);
`;

const TitleStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin-bottom: 0.85rem;
`;

const Title = styled.h2`
  font-size: clamp(1.85rem, 2.8vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  max-width: 50ch;
  color: ${({ theme }) => theme.text_secondary};
`;

const EducationGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.15rem, 2vw, 2.25rem);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <HeaderBlock data-reveal>
          <TitleStack>
            <Eyebrow>Academic Foundation</Eyebrow>
            <Title>Education</Title>
          </TitleStack>
          <Desc>
            Formal computer science &amp; information technology training grounding my software engineering practice.
          </Desc>
        </HeaderBlock>

        <EducationGrid>
          {education.map((item) => (
            <EducationCard key={item.id} education={item} />
          ))}
        </EducationGrid>
      </Wrapper>
    </Container>
  );
};

export default Education;
