import React from "react";
import styled from "styled-components";
import {
  EmojiEventsRounded,
  RocketLaunchRounded,
  WorkspacePremiumRounded,
} from "@mui/icons-material";
import { achievements } from "../../data/constants";

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

const Title = styled.h2`
  font-size: clamp(1.85rem, 2.8vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  max-width: 54ch;
  color: ${({ theme }) => theme.text_secondary};
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.15rem, 2vw, 2rem);

  @media (min-width: 1850px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  position: relative;
  background: ${({ theme }) => theme.card};
  border: 1px solid
    ${({ $featured, theme }) => ($featured ? "rgba(245, 158, 11, 0.45)" : theme.border)};
  border-radius: 1.3rem;
  padding: clamp(1.4rem, 2vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  overflow: hidden;
  transition: all 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $accent }) => $accent};
    opacity: 0.85;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $accent }) => $accent};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const IconWrap = styled.div`
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 0.85rem;
  background: ${({ $accent }) => `${$accent}18`};
  border: 1px solid ${({ $accent }) => `${$accent}45`};
  color: ${({ $accent }) => $accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const BadgeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HighlightPill = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.74rem;
  font-weight: 600;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}18`};
  border: 1px solid ${({ $accent }) => `${$accent}40`};
  padding: 0.32rem 0.75rem;
  border-radius: 999px;
`;

const PeriodText = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.text_muted};
`;

const CardTitle = styled.h3`
  font-size: clamp(1.12rem, 1.35vw, 1.32rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
`;

const OrgName = styled.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: -0.45rem;
`;

const CardDesc = styled.p`
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 0.55rem;
`;

const Tag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.25rem 0.6rem;
  border-radius: 0.45rem;
`;

const renderIcon = (iconType) => {
  if (iconType === "trophy") return <EmojiEventsRounded fontSize="medium" />;
  if (iconType === "rocket") return <RocketLaunchRounded fontSize="small" />;
  return <WorkspacePremiumRounded fontSize="medium" />;
};

const Achievements = () => {
  return (
    <Container id="achievements">
      <Wrapper>
        <HeaderBlock data-reveal>
          <TitleStack>
            <Eyebrow>Honors &amp; Milestones</Eyebrow>
            <Title>Achievements &amp; Recognitions</Title>
          </TitleStack>
          <Desc>
            Hackathon victories, accelerated full-stack certifications, and highest-tier appraisal honors across 2+ years (5-Star Rating in Year 1 &amp; &apos;A&apos; Band in Year 2) at Tata Consultancy Services.
          </Desc>
        </HeaderBlock>

        <Grid>
          {achievements.map((item, idx) => (
            <Card
              key={item.id}
              $accent={item.accent}
              $featured={idx === 0}
              data-reveal
            >
              <CardTop>
                <IconWrap $accent={item.accent}>
                  {renderIcon(item.icon)}
                </IconWrap>
                <BadgeGroup>
                  <HighlightPill $accent={item.accent}>
                    {item.badge}
                  </HighlightPill>
                </BadgeGroup>
              </CardTop>

              <PeriodText>{item.period}</PeriodText>
              <CardTitle>{item.title}</CardTitle>
              <OrgName>{item.organization}</OrgName>
              <CardDesc>{item.description}</CardDesc>

              <TagsRow>
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsRow>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Achievements;

