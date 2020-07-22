import React from 'react';

const Pagination = ({ pages, currentPage, handelPageLinkClick }) => {
  return (
    <div className="pagination-container">
      <ul className="pagination-links">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`page-link ${page === currentPage ? 'active' : ''}`}
            onClick={() => handelPageLinkClick(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const paginator = (data, pagination, setPagination) => {
  const handelPageLinkClick = (pageNo) => {
    setPagination({ ...pagination, currentPage: pageNo });
  };

  const pages = [];
  const totalPages = Math.ceil(data.length / pagination.itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const indexOfLastItem = pagination.currentPage * pagination.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - pagination.itemsPerPage;
  const currentPageData = data.slice(indexOfFirstItem, indexOfLastItem);

  return { pages, currentPageData, handelPageLinkClick };
};

export default Pagination;
