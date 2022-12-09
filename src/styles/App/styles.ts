import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.main`
  max-width: 70%;
  height: calc(100vh - 10rem);

  margin: 0 auto;
  padding: 1.5rem;
`;

export const ListContainer = styled.ul`
  display: block;
  height: calc(
    100vh - 19rem
  ); /* Removing the header, footer, input, margin and padding*/
  list-style: none;
  margin-top: 2rem;
  overflow: auto;
  padding-right: 1rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-300"]};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["blue-500"]};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme["blue-700"]};
    border-radius: 10px;
  }
`;
