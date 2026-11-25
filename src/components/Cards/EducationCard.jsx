import React from "react";
import styled from "styled-components";
import { SchoolRounded } from "@mui/icons-material";

const Card = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  padding: clamp(1.35rem, 2vw, 1.9rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.22s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const TopMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
`;

const IconBadge = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  min-width: 2.8rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.primarySoft};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
`;

const GradeBadge = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.primarySoft};
  color: ${({ theme }) => theme.primary};
`;

const DateBadge = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.74rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_muted};
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Degree = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
`;

const School = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  line-height: 1.45;
`;

const Description = styled.p`
  font-size: 0.88rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: auto;
`;

const EducationCard = ({ education }) => {
  return (
    <Card data-reveal>
      <TopMeta>
        <IconBadge>
          <SchoolRounded fontSize="small" />
        </IconBadge>
        <RightMeta>
          <GradeBadge>{education.grade}</GradeBadge>
          <DateBadge>{education.date}</DateBadge>
        </RightMeta>
      </TopMeta>
      <TitleInfo>
        <Degree>{education.degree}</Degree>
        <School>{education.school}</School>
      </TitleInfo>
      {education.desc && <Description>{education.desc}</Description>}
    </Card>
  );
};

export default EducationCard;
