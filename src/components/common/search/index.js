import React, { useState } from 'react';
import './style.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({search,onSearchChange}) => {

  return (
    <div className='search-flex'>
        <SearchIcon/>
        <input className='search-input' placeholder='Search'
          value={search}
          type='text'
          onChange={(e)=>onSearchChange(e)}
        />
    </div>
  )
}

export default Search;