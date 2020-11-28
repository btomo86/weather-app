import React, { useState } from "react";

const SearchForm = ({ locationSearch }) => {
  const [SearchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    event.preventDefault();
    locationSearch(SearchText);
  };
  return (
    <>
      <form className="search-form" onSubmit={handleInputChange}>
        <input
          className="search-input"
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button className="search-btn">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
