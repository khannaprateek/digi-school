import React from "react";
import "./pagination.css";

const Pagination = ({ coursePerPage, totalCourses, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalCourses / coursePerPage);
  const setPrevPage = () => {
    currentPage - 1 > 0 && paginate(currentPage - 1);
  };
  const setNextPage = () => {
    currentPage + 1 <= totalPages && paginate(currentPage + 1);
  };
  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    pageNumbers.push(pageNum);
  }
  return (
    <div className="page-num">
      <button className="page-link" onClick={setPrevPage}>
        Prev
      </button>
      {pageNumbers.map((pgNum) => (
        <button
          className="page-link"
          key={pgNum}
          onClick={() => paginate(pgNum)}
        >
          {pgNum}
        </button>
      ))}
      <button className="page-link" onClick={setNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
