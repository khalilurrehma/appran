import React, { useState } from 'react';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';

const SearchContainer = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div>
      <SearchButton showSearch={showSearch} toggleSearch={toggleSearch} />
      <SearchBar showSearch={showSearch} />
    </div>
  );
};

export default SearchContainer;
