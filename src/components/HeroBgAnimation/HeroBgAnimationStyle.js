import styled from "styled-components";

export const Div = styled.div`
  width: min(72vw, 78vh);
  height: min(72vw, 78vh);
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
