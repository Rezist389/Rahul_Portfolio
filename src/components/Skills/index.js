import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { AutoAwesomeRounded } from "@mui/icons-material";

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
  margin-bottom: clamp(2rem, 4vh, 3.25rem);
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

export const Title = styled.h2`
  font-size: clamp(1.85rem, 2.8vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

export const Desc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  max-width: 52ch;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.15rem, 2vw, 2rem);

  @media (min-width: 1850px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.25rem;
  padding: clamp(1.35rem, 2vw, 2rem);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.22rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.35rem;
`;

const SkillSubtitle = styled.p`
  font-size: 0.86rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_muted};
  margin-bottom: 1.35rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const SkillItem = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.65rem;
  padding: 0.55rem 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    background: ${({ theme }) => theme.primarySoft};
    transform: translateY(-1px);
  }
`;

const SkillImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <HeaderBlock data-reveal>
          <TitleStack>
            <Eyebrow>Technical Stack</Eyebrow>
            <Title>Core Engineering &amp; AI Capabilities</Title>
          </TitleStack>
          <Desc>
            Production-tested technologies across Multi-Agent GenAI, MERN &amp; .NET full-stack engineering, and cloud workflows.
          </Desc>
        </HeaderBlock>

        <SkillsGrid>
          {skills.map((category) => (
            <SkillCard key={category.title} data-reveal>
              <SkillTitle>{category.title}</SkillTitle>
              <SkillSubtitle>{category.subtitle}</SkillSubtitle>
              <SkillList>
                {category.skills.map((item) => (
                  <SkillItem key={item.name}>
                    {item.image ? (
                      <SkillImage
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <AutoAwesomeRounded
                        sx={{ fontSize: "1.05rem", color: "#38BDF8" }}
                      />
                    )}
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
