import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme, $highlight }) => ($highlight ? theme.borderStrong : theme.border)};
  padding: clamp(1.25rem, 2.2vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LeftInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const LogoBox = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  min-width: 3.25rem;
  border-radius: 0.85rem;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.primary};
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.35rem;
  background: #ffffff;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Role = styled.h3`
  font-size: clamp(1.08rem, 1.3vw, 1.3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Company = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const ClientNote = styled.div`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_muted};
`;

const MetaBadges = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const DatePill = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  font-weight: 500;
  padding: 0.38rem 0.78rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_secondary};
`;

const TypePill = styled.span`
  font-size: 0.76rem;
  font-weight: 600;
  padding: 0.34rem 0.7rem;
  border-radius: 999px;
  background: ${({ theme, $current }) => ($current ? theme.successSoft : theme.primarySoft)};
  color: ${({ theme, $current }) => ($current ? theme.success : theme.primary)};
`;

const Summary = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.58rem;
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const SkillTag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.32rem 0.7rem;
  border-radius: 0.5rem;
`;

const ExperienceCard = ({ experience, isCurrent }) => {
  const [imgError, setImgError] = useState(!experience.img);

  return (
    <Card $highlight={isCurrent}>
      <HeaderRow>
        <LeftInfo>
          <LogoBox>
            {!imgError && experience.img ? (
              <LogoImg
                src={experience.img}
                alt={experience.company}
                onError={() => setImgError(true)}
              />
            ) : (
              experience.monogram || experience.company.slice(0, 2).toUpperCase()
            )}
          </LogoBox>
          <TitleBlock>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            {experience.client && <ClientNote>{experience.client}</ClientNote>}
          </TitleBlock>
        </LeftInfo>

        <MetaBadges>
          {experience.type && <TypePill $current={isCurrent}>{experience.type}</TypePill>}
          <DatePill>{experience.date}</DatePill>
        </MetaBadges>
      </HeaderRow>

      {experience.desc && <Summary>{experience.desc}</Summary>}

      {experience.bullets && experience.bullets.length > 0 && (
        <BulletList>
          {experience.bullets.map((point, idx) => (
            <BulletItem key={idx}>{point}</BulletItem>
          ))}
        </BulletList>
      )}

      {experience.skills && (
        <SkillsRow>
          {experience.skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </SkillsRow>
      )}
    </Card>
  );
};

export default ExperienceCard;
