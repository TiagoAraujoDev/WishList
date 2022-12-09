import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;

  position: relative;

  label {
    position: absolute;
    left: -999999px;
  }

  input {
    width: 100%;
    height: 4rem;
    border: 1px solid ${(props) => props.theme["gray-500"]};
    border-radius: 20px;
    padding: 1rem 0.8rem 1rem 2rem;
    background-color: transparent;
    font-size: 2rem;
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;
