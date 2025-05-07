import React, { useState } from "react";

function Filter({ search, onSearchChange }) {
  const [inputValue, setInputValue] = useState(search);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    onSearchChange(value);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Filter;
