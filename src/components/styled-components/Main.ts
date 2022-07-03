import styled from "styled-components";

export const Main = styled.main`
  background-color: rgb(244 244 245);
  padding: 1.5rem 1rem;

  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding-left: 2rem /* 32px */;
    padding-right: 2rem /* 32px */;
  }
`;
