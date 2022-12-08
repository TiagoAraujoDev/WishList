import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;

  position: relative;

  label {
    position: absolute;
    left: -999999px;
  }
`;

export const InputContainer = styled.div`
  min-width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;

  border: 1px solid ${(props) => props.theme["gray-500"]};
  border-radius: 20px;
  padding: 1rem 0.8rem 1rem 2rem;

  input {
    flex: 1;
    border: none;
    background: transparent;
    box-shadow: none;
    color: ${(props) => props.theme["gray-100"]};
    font-size: 2rem;
  }

  button {
    width: 2.4rem;
    height: 2.4rem;
    background: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${(props) => props.theme["blue-500"]};
      &:hover {
        color: ${(props) => props.theme["blue-700"]};
        transition: color 0.4s;
      }
    }
  }
`;
