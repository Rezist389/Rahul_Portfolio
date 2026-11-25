import {
  CloseRounded,
  NorthEastRounded,
  EmojiEventsRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background-color: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2.5rem);
  overflow-y: auto;
`;

const Wrapper = styled.div`
  width: min(94vw, 58rem);
  max-height: 90svh;
  overflow-y: auto;
  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text_primary};
  padding: clamp(1.25rem, 2.5vw, 2.25rem);
  display: flex;
  flex-direction: column;
  gap: 1.05rem;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    color: ${({ theme }) => theme.primary};
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 8.2;
  object-fit: cover;
  border-radius: 0.9rem;
  border: 1px solid ${({ theme }) => theme.border};
`;

const AwardBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  border-radius: 0.85rem;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.4);
  color: #f59e0b;
  font-weight: 700;
  font-size: 0.9rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
`;

const CategoryPill = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primarySoft};
  padding: 0.32rem 0.75rem;
  border-radius: 999px;
`;

const DateText = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_muted};
`;

const Title = styled.h2`
  font-size: clamp(1.35rem, 2.2vw, 1.9rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
`;

const SectionLabel = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.text_muted};
  margin-top: 0.25rem;
`;

const ArchFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 1rem;
  border-radius: 0.9rem;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
`;

const ArchStep = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  padding: 0.4rem 0.75rem;
  border-radius: 0.55rem;
`;

const HighlightsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0;
`;

const HighlightItem = styled.li`
  position: relative;
  padding-left: 1.15rem;
  font-size: 0.92rem;
  line-height: 1.62;
  color: ${({ theme }) => theme.text_secondary};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.52rem;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  padding: 0.32rem 0.7rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  flex: 1;
  min-width: 11rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.85rem 1.15rem;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${({ $secondary, theme }) =>
    $secondary ? theme.card_light : theme.accentGradient};
  color: ${({ $secondary, theme }) =>
    $secondary ? theme.text_primary : "#ffffff"};
  border: 1px solid
    ${({ $secondary, theme }) => ($secondary ? theme.border : "transparent")};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ $secondary, theme }) =>
      $secondary ? theme.borderStrong : "transparent"};
  }
`;

const EnterpriseNote = styled.div`
  width: 100%;
  text-align: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  if (!project) return null;

  const hasLiveDemo =
    Boolean(project.webapp) && project.webapp !== project.github;

  const close = () => setOpenModal({ state: false, project: null });

  return (
    <Modal open={true} onClose={close}>
      <Overlay onClick={close}>
        <Wrapper onClick={(e) => e.stopPropagation()}>
          <CloseBtn type="button" aria-label="Close modal" onClick={close}>
            <CloseRounded fontSize="small" />
          </CloseBtn>

          <Image src={project.image} alt={project.title} />

          {project.award && (
            <AwardBanner>
              <EmojiEventsRounded fontSize="small" />
              {project.award}
            </AwardBanner>
          )}

          <MetaRow>
            {project.impact && <CategoryPill>{project.impact}</CategoryPill>}
            {project.date && <DateText>{project.date}</DateText>}
          </MetaRow>

          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>

          {project.architecture && project.architecture.length > 0 && (
            <>
              <SectionLabel>Multi-Agent System Flow</SectionLabel>
              <ArchFlow>
                {project.architecture.map((step, i) => (
                  <React.Fragment key={step}>
                    <ArchStep>{step}</ArchStep>
                    {i < project.architecture.length - 1 && (
                      <ArrowForwardRounded
                        sx={{ fontSize: "1rem", opacity: 0.6 }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </ArchFlow>
            </>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <>
              <SectionLabel>Engineering Highlights</SectionLabel>
              <HighlightsList>
                {project.highlights.map((item, idx) => (
                  <HighlightItem key={idx}>{item}</HighlightItem>
                ))}
              </HighlightsList>
            </>
          )}

          <SectionLabel>Technologies &amp; Models Used</SectionLabel>
          <Tags>
            {project.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>

          <ButtonGroup>
            {project.github ? (
              <ActionButton
                $secondary={hasLiveDemo}
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="1.1em" />
                Explore Source Code
              </ActionButton>
            ) : (
              <EnterpriseNote>
                Enterprise Hackathon Architecture • Built &amp; Presented Live at TCS Nagpur (1st Prize)
              </EnterpriseNote>
            )}
            {hasLiveDemo && (
              <ActionButton
                href={project.webapp}
                target="_blank"
                rel="noreferrer"
              >
                Live Application
                <NorthEastRounded sx={{ fontSize: "1.15em" }} />
              </ActionButton>
            )}
          </ButtonGroup>
        </Wrapper>
      </Overlay>
    </Modal>
  );
};

export default ProjectDetails;
