import React from 'react';
import './search-result.style.css';

const SearchResultContainer = ({ searchResult }) => {
  return (
    <div>
      <ul>
        {searchResult.map((item, index) => (
          // Will have to look for better key, instead of array index
          <li className="result-item" key={index}>
            <div className="thumbnail-container">
              <img
                className="img-thumbnail"
                src={item.pagemap.cse_thumbnail[0]['src']}
                alt="thumbnail"
              />
            </div>
            <div className="content-group">
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
