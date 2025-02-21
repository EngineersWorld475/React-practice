import React, { useState, useCallback } from "react";
import { debounce } from "./debounce";

const SearchWithDebounce = () => {
  const [query, setQuery] = useState("");

  // Simulate an API call or expensive function
  const fetchResults = (searchTerm) => {
    console.log("Fetching results for:", searchTerm);
  };

  // Memoized debounced function
  const debouncedFetchResults = useCallback(
    debounce((value) => fetchResults(value), 500),
    []
  );

  // Handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetchResults(value); // Trigger debounced function
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <p>Search Query: {query}</p>
    </div>
  );
};

export default SearchWithDebounce;
