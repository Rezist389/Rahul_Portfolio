import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { ArrowOutwardRounded, EmojiEventsRounded } from "@mui/icons-material";

const Card = styled.article`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid
    ${({ $award, theme }) =>
      $award ? "rgba(245, 158, 11, 0.45)" : theme.border};
  border-radius: 1.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $award, theme }) =>
      $award ? "#F59E0B" : theme.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.bgLight};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: relative;
`;

const AwardOverlayBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.32rem 0.7rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(245, 158, 11, 0.65);
  color: #fbbf24;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const Content = styled.div`
  padding: clamp(1.2rem, 1.8vw, 1.65rem);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
`;

const ImpactBadge = styled.span`
  align-self: flex-start;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primarySoft};
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
`;

const Title = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.62;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const Tag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.25rem 0.58rem;
  border-radius: 0.45rem;
`;

const FooterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.9rem;
  margin-top: 0.35rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const ViewDetailsBtn = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.32rem 0.65rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.borderStrong};
  }
`;

const EnterprisePill = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.35);
  padding: 0.28rem 0.6rem;
  border-radius: 0.45rem;
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card
      $award={Boolean(project.award)}
      data-reveal
      onClick={() => setOpenModal({ state: true, project })}
    >
      <ImageWrap>
        {project.award && (
          <AwardOverlayBadge>
            <EmojiEventsRounded sx={{ fontSize: "1.1em" }} />
            1st Prize Winner
          </AwardOverlayBadge>
        )}
        <Image src={project.image} alt={project.title} loading="lazy" />
      </ImageWrap>
      <Content>
        {project.impact && <ImpactBadge>{project.impact}</ImpactBadge>}
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <FooterBar>
          <ViewDetailsBtn>
            Architecture &amp; Details <ArrowOutwardRounded sx={{ fontSize: "1.1em" }} />
          </ViewDetailsBtn>
          {project.github ? (
            <IconLink
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size="1em" /> Code
            </IconLink>
          ) : (
            <EnterprisePill>TCS Nagpur Win</EnterprisePill>
          )}
        </FooterBar>
      </Content>
    </Card>
  );
};

export default ProjectCards;
