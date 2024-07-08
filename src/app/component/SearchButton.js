import React from 'react';
import Button from 'react-bootstrap/Button';

const SearchButton = ({ showSearch, toggleSearch }) => {
  return (
    <Button
      className='d-lg-none mb-3'
      variant="primary"
      onClick={toggleSearch}
    >
      {showSearch ? 'Close Search' : 'Open Search'}
    </Button>
  );
};

export default SearchButton;
