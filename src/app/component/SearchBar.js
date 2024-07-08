"use client";

import React from 'react';
import SearchForm from './SearchForm'; 

const SearchBar = () => {
  return (
    <div className='container mt-xl-5 mt-sm-2'>
      <h4 className='text-white fs-3 fw-bold text-center mb-2'>Mobile App Marketing Glossary - ASO Terms & Definitions</h4>
      <p className="text-center text-white fs-5">The ultimate APPRAN glossary to get up to speed on everything about App growth and App Store Optimization.</p>
      <div className="d-flex justify-content-center"> 
        <div className="clearfix"></div>
        <SearchForm />
      </div> 
    </div>
  );
}

export default SearchBar;
