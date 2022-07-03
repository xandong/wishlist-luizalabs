import styled from "styled-components";

export const LiNav = styled.li`
  width: 100%;
  padding: 0 0.5rem;

  display: flex;
  flex: 1 1 0%;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  border-bottom: solid 1px #e4e4e7;

  @media (min-width: 768px) {
    width: fit-content;
    padding: 0;

    flex: none;
    flex-direction: row;

    border-style: none;
  }

  @media (max-width: 768px) {
    :hover {
      color: rgb(39 39 42);
    }
  }
`;
