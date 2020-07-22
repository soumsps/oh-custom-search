import React, { useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar.component';
import SearchResultContainer from '../../components/search-result-container/search-result-container';

import './search.styles.css';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);

  console.log(searchResult);
  return (
    <div className="container">
      <header>
        <h1 className="page-title">Oh. Search</h1>
        <SearchBar setSearchResult={setSearchResult} />
        <SearchResultContainer searchResult={searchResult} />
      </header>
    </div>
  );
};

export default SearchPage;
