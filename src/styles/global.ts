import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${(props) => props.theme["blue-500"]};
}

body {
  background-color: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["white"]};
}

input, textarea, buttom, body {
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
}
`;
