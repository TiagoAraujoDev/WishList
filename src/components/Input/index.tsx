import { BsFillPlusCircleFill } from "react-icons/bs";
import { FormContainer, InputContainer } from "./styles";

export const Input = () => {
  return (
    <FormContainer>
      <label htmlFor="item">Add item:</label>
      <InputContainer>
        <input id="item" type="text" placeholder="Add an item..." />
        <button>
          <BsFillPlusCircleFill />
        </button>
      </InputContainer>
    </FormContainer>
  );
};
