import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SendRounded, DescriptionRounded } from "@mui/icons-material";

const Container = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: var(--section-py) var(--gutter);
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(2rem, 5vw, 5.5rem);
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

const LeftPitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
`;

const Title = styled.h2`
  font-size: clamp(1.85rem, 2.8vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.18;
`;

const Desc = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  max-width: 54ch;
  color: ${({ theme }) => theme.text_secondary};
`;

const ConnectStack = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 0.65rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ConnectCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.1rem;
  border-radius: 0.95rem;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const IconCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  border-radius: 0.65rem;
  background: ${({ theme }) => theme.primarySoft};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConnectLabel = styled.div`
  font-size: 0.74rem;
  color: ${({ theme }) => theme.text_muted};
`;

const ConnectValue = styled.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  padding: clamp(1.35rem, 2.4vw, 2.35rem);
  border-radius: 1.4rem;
  box-shadow: ${({ theme }) => theme.shadow};
  gap: 1rem;
`;

const FormHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.2rem;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const FieldLabel = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 0.94rem;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 0.75rem;
  padding: 0.8rem 0.95rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 7.5rem;
  background-color: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 0.94rem;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 0.75rem;
  padding: 0.8rem 0.95rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.accentGradient};
  padding: 0.92rem 1.25rem;
  margin-top: 0.25rem;
  border-radius: 0.8rem;
  border: none;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 0.96rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 12px 26px -10px rgba(56, 189, 248, 0.5);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_ausgwnc",
        "template_t0zqjpb",
        form.current,
        "qLX4CFfFz2pXa3jd6"
      )
      .then(
        () => {
          setOpen(true);
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          setErrorOpen(true);
          setLoading(false);
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <LeftPitch data-reveal>
          <Eyebrow>Get In Touch</Eyebrow>
          <Title>Let&apos;s build impactful software together.</Title>
          <Desc>
            Whether you&apos;re hiring for a Full-Stack / Frontend Engineering role, discussing enterprise architecture, or exploring a collaboration, I&apos;d love to hear from you.
          </Desc>

          <ConnectStack>
            <ConnectCard href={Bio.linkedin} target="_blank" rel="noreferrer">
              <IconCircle>
                <FaLinkedin size="1.15em" />
              </IconCircle>
              <div>
                <ConnectLabel>LinkedIn</ConnectLabel>
                <ConnectValue>Connect Professionally</ConnectValue>
              </div>
            </ConnectCard>

            <ConnectCard href={Bio.github} target="_blank" rel="noreferrer">
              <IconCircle>
                <FaGithub size="1.15em" />
              </IconCircle>
              <div>
                <ConnectLabel>GitHub</ConnectLabel>
                <ConnectValue>github.com/Rezist389</ConnectValue>
              </div>
            </ConnectCard>

            <ConnectCard href={Bio.resume} target="_blank" rel="noreferrer">
              <IconCircle>
                <DescriptionRounded fontSize="small" />
              </IconCircle>
              <div>
                <ConnectLabel>Curriculum Vitae</ConnectLabel>
                <ConnectValue>View / Download Resume</ConnectValue>
              </div>
            </ConnectCard>

            <ConnectCard as="div" style={{ cursor: "default", transform: "none" }}>
              <IconCircle>
                <FaMapMarkerAlt size="1.05em" />
              </IconCircle>
              <div>
                <ConnectLabel>Base Location</ConnectLabel>
                <ConnectValue>{Bio.location}</ConnectValue>
              </div>
            </ConnectCard>
          </ConnectStack>
        </LeftPitch>

        <ContactForm ref={form} onSubmit={handleSubmit} data-reveal>
          <FormHeading>Send a Direct Message</FormHeading>
          <FieldRow>
            <FieldGroup>
              <FieldLabel htmlFor="from_name">Your Name</FieldLabel>
              <ContactInput
                id="from_name"
                placeholder="Jane Doe"
                name="from_name"
                required
              />
            </FieldGroup>
            <FieldGroup>
              <FieldLabel htmlFor="from_email">Your Email</FieldLabel>
              <ContactInput
                id="from_email"
                placeholder="jane@company.com"
                name="from_email"
                type="email"
                required
              />
            </FieldGroup>
          </FieldRow>

          <FieldGroup>
            <FieldLabel htmlFor="subject">Subject</FieldLabel>
            <ContactInput
              id="subject"
              placeholder="Software Engineering Opportunity / Project Inquiry"
              name="subject"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <ContactInputMessage
              id="message"
              placeholder="Tell me about the role, team, or project..."
              rows="5"
              name="message"
              required
            />
          </FieldGroup>

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending Message..." : "Send Message"}
            <SendRounded sx={{ fontSize: "1.1em" }} />
          </ContactButton>
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent! Thank you — Rahul will get back to you soon.
          </Alert>
        </Snackbar>
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000}
          onClose={() => setErrorOpen(false)}
        >
          <Alert
            onClose={() => setErrorOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Failed to send message. Please try again or reach out via LinkedIn.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
