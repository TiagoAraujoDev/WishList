import styled from "styled-components";

interface CheckedType {
  checked: boolean;
}

export const ListItemContainer = styled.li<CheckedType>`
  width: 100%;
  min-height: 5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme["gray-800"]};
  }

  & + li {
    margin-top: 1rem;
  }

  input {
    box-shadow: none;
    height: 2.5rem;
    width: 2.5rem;
  }

  label {
    flex: 1;
    padding: 0 1rem;
    text-align: left;
    font-size: 1.8rem;
    color: ${(props) => props.theme["gray-100"]};
    text-decoration: ${(props) => props.checked === true ? "line-through" : "none"};
  }

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: ${(props) => props.theme["gray-300"]};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme["red-500"]};
      transition: color 0.4s;
    }
  }
`;
