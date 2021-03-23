import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = ({ locationSearch }) => {
  const [SearchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    event.preventDefault();
    locationSearch(SearchText);
  };
  return (
    <SearchFormContainer>
      <SearchForm1 onSubmit={handleInputChange}>
        <SearchInput
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <SearchButton>Search</SearchButton>
      </SearchForm1>
    </SearchFormContainer>
  );
};

const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;

  height: 250px;
  width: 500px;
  margin: auto;
`;

const SearchForm1 = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 150px;
  margin: auto;

  margin-bottom: 100px;
`;

const SearchInput = styled.input`
  width: 98%;
  height: 35px;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-content: center;
  border-radius: 8px solid black;
  margin: auto;
`;

const SearchButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: #f4a15d;
  cursor: pointer;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 70px;
`;
export default SearchForm;
