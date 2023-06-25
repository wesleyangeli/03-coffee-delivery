import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: calc(90rem - 80px);
  height: calc(100vh);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme["gray-50"]};

  display: flex;
  flex-direction: column;
`;
