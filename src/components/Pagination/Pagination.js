import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  // API WAIT, USE Optional chaining operator
  // console.log(info?.pages);
  // TODO : pagination fixed in mobile view

  const [width, updateWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateWidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <>
      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-3 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageCount={info?.pages}
        previousLabel="< previous"
        nextLabel="next >"
        nextLinkClassName="btn btn-primary next"
        previousLinkClassName="btn btn-primary prev"
        pageClassName="page-item"
        activeClassName="active"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </>
  );
};

export default Pagination;
