import React from "react";
import { range } from "lodash";

const Pagination = ({ totalList, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(totalList / perPage);
  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);

  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        {pages.map((page) => (
          <a
            key={page}
            className={
              page === currentPage ? "page-numbers current" : "page-numbers"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
