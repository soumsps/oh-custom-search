import React, { useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar.component';
import SearchResultContainer from '../../components/search-result-container/search-result-container';
import Pagination, { paginator } from '../../components/pagination/pagination.component';
import './search.styles.css';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 4,
  });

  const { pages, currentPageData, handelPageLinkClick } = paginator(
    searchResult,
    pagination,
    setPagination
  );

  return (
    <div className="container">
      <header>
        <h1 className="page-title">Oh. Search</h1>
        <SearchBar setSearchResult={setSearchResult} />
      </header>
      <SearchResultContainer pageResult={currentPageData} />
      <Pagination
        pages={pages}
        currentPage={pagination.currentPage}
        handelPageLinkClick={handelPageLinkClick}
      />
    </div>
  );
};

export default SearchPage;
