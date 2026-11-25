import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: var(--section-py) var(--gutter);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopHeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: clamp(2rem, 4vh, 3rem);
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const Eyebrow = styled.span`
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

export const Title = styled.h2`
  font-size: clamp(1.85rem, 2.8vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

export const Desc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  max-width: 56ch;
  color: ${({ theme }) => theme.text_secondary};
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding: 0.35rem;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.9rem;
`;

export const ToggleButton = styled.button`
  padding: 0.55rem 1.1rem;
  border-radius: 0.65rem;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.borderStrong : "transparent")};
  background: ${({ $active, theme }) => ($active ? theme.card : "transparent")};
  color: ${({ $active, theme }) => ($active ? theme.primary : theme.text_secondary)};
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 2vw, 2.25rem);

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
