import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";

import { Item } from "../../App";

import { FormContainer, InputContainer } from "./styles";

interface InputProps {
  addItem: (data: Item) => void;
}

export const Input = ({ addItem }: InputProps) => {
  const [itemValue, setItemValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addItem({
      id: uuid(),
      content: itemValue,
      done: false
    });

    setItemValue("");
  };

  return (
    <FormContainer action="" onSubmit={handleSubmit}>
      <label htmlFor="item">Add item:</label>
      <InputContainer>
        <input
          id="item"
          type="text"
          placeholder="Add an item..."
          required
          autoComplete="off"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
        <button type="submit">
          <BsFillPlusCircleFill />
        </button>
      </InputContainer>
    </FormContainer>
  );
};
