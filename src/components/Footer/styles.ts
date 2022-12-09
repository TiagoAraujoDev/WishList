import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme["gray-800"]};

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2.6rem;
    font-weight: bold;
    color: ${(props) => props.theme["blue-700"]};
  }
`;
