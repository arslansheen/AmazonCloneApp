import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar(prop) {
  return (
    <>
      <div className="header__search">
        <input
          type="search"
          className="header__searchInput"
          name="sheen"
          id=""
        />
        {/* <input type="button" value="" className="test" /> */}
        <SearchIcon className="header__searchIcon" />
      </div>
    </>
  );
}
