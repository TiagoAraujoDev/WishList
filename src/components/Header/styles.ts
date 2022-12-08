import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme["gray-800"]};

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2.4rem;
    color: ${(props) => props.theme["blue-700"]};
  }
`
