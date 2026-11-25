import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  PortraitFrame,
  Img,
  FloatingTag,
  HeroRightContainer,
  HeroInnerContainer,
  StatusBadge,
  PulseDot,
  GreetingTag,
  TextLoop,
  Title,
  GradientName,
  Span,
  SubTitle,
  CTAGroup,
  PrimaryCTA,
  SecondaryCTA,
  SocialRow,
  SocialPill,
  MetricsGrid,
  MetricCard,
  MetricValue,
  MetricLabel,
  MetricDetail,
} from "./HeroStyle";
import HeroImg from "../../images/Rahul Pic  (1).jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { NorthEastRounded, WorkOutlineRounded } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>

      <HeroInnerContainer>
        <HeroLeftContainer data-reveal>
          <StatusBadge>
            <PulseDot />
            {Bio.availability}
          </StatusBadge>

          <GreetingTag>Hi, I&apos;m {Bio.name}</GreetingTag>

          <Title>
            Building <GradientName>enterprise-grade</GradientName> web experiences &amp; scalable systems.
          </Title>

          <TextLoop>
            <span>Specialized as a</span>
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 32,
                }}
              />
            </Span>
          </TextLoop>

          <SubTitle>{Bio.description}</SubTitle>

          <CTAGroup>
            <PrimaryCTA href="#projects">Explore Selected Work</PrimaryCTA>
            <SecondaryCTA href={Bio.resume} target="_blank" rel="noreferrer">
              View Resume
              <NorthEastRounded sx={{ fontSize: "1.15em" }} />
            </SecondaryCTA>
          </CTAGroup>

          <SocialRow>
            <SocialPill href={Bio.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size="1.05em" />
              LinkedIn
            </SocialPill>
            <SocialPill href={Bio.github} target="_blank" rel="noreferrer">
              <FaGithub size="1.05em" />
              GitHub
            </SocialPill>
            <SocialPill as="span" style={{ cursor: "default" }}>
              <FaMapMarkerAlt size="0.95em" />
              {Bio.location}
            </SocialPill>
          </SocialRow>
        </HeroLeftContainer>

        <HeroRightContainer data-reveal>
          <PortraitFrame>
            <Img src={HeroImg} alt={Bio.name} />
            <FloatingTag>
              <WorkOutlineRounded sx={{ fontSize: "1.15em", color: "#38BDF8" }} />
              SWE @ {Bio.currentCompany}
            </FloatingTag>
          </PortraitFrame>
        </HeroRightContainer>
      </HeroInnerContainer>

      <MetricsGrid data-reveal>
        {Bio.metrics.map((metric) => (
          <MetricCard key={metric.label}>
            <MetricValue>{metric.value}</MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
            <MetricDetail>{metric.detail}</MetricDetail>
          </MetricCard>
        ))}
      </MetricsGrid>
    </HeroContainer>
  );
};

export default HeroSection;
