import React, { useState } from "react";
import {
  Container,
  Wrapper,
  TopHeaderRow,
  HeaderLeft,
  Eyebrow,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "machine learning", label: "GenAI, Agents & ML" },
  { id: "web app", label: "Full-Stack & Web" },
  { id: "android app", label: "Mobile" },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <TopHeaderRow data-reveal>
          <HeaderLeft>
            <Eyebrow>Selected Builds</Eyebrow>
            <Title>Featured Engineering &amp; AI Projects</Title>
            <Desc>
              Award-winning multi-agent GenAI architectures, full-stack web platforms, deep learning engines, and cloud-synced applications.
            </Desc>
          </HeaderLeft>

          <ToggleButtonGroup>
            {CATEGORIES.map((cat) => (
              <ToggleButton
                key={cat.id}
                type="button"
                $active={toggle === cat.id}
                onClick={() => setToggle(cat.id)}
              >
                {cat.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </TopHeaderRow>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
