import React from 'react';

const SearchResultContainer = ({ searchResult }) => {
  return (
    <div>
      <ul>
        {searchResult.map((item) => (
          <li className="result-item">
            <div className="thumbnail">
              <img />
            </div>
            <div className="content">
              <h4 className="link">{item.formattedUrl}</h4>
              <h2 className="title">{item.title}</h2>
              <p className="excerpt">{item.snippet}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultContainer;
