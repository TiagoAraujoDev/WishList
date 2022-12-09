import React, { useState } from "react";

import { FormContainer } from "./styles";

interface SearchLProps {
  filterList: (data: string) => void;
}

export const SearchInput = ({ filterList }: SearchLProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    filterList(e.target.value);
  };

  return (
    <FormContainer action="">
      <label htmlFor="">Search</label>
      <input
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
      />
    </FormContainer>
  );
};
