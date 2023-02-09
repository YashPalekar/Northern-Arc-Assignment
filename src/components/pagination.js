import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/app-context";

export const Pagination = () => {
  const context = useContext(MyContext);
  const pageSize = 30;

  useEffect(refreshPage, [context.pageNumber]);

  function previousPage() {
    if (context.pageNumber > 1) context.setPageNumber(context.pageNumber - 1);
  }

  function nextPage() {
    let lastPageNumber = Math.floor(context.data / pageSize);
    if (context.pageNumber < lastPageNumber)
      context.setPageNumber(context.pageNumber + 1);
  }

  function refreshPage() {
    context.setTableData(
      context.data.slice(
        (context.pageNumber - 1) * pageSize,
        context.pageNumber * pageSize + 1
      )
    );
  }

  return (
    <nav className="mx-auto">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {context.setPageNumber(1)}}
            aria-label="First">
            {'First'}
          </a>
        </li>
        <li className="page-item">
          <a
            id="previous-page"
            className="page-link"
            onClick={previousPage}
            aria-label="Previous">
            {'<'}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link">{context.pageNumber}</a>
        </li>
        {/* <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a> 
        </li> */}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              context.setPageNumber(context.pageNumber + 1);
            }}
            aria-label="Next">
            {'>'}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {context.setPageNumber(Math.ceil( context.data.length / pageSize ))}}
            aria-label="Last">
            {'Last'}
          </a>
        </li>
      </ul>
    </nav>
  );
};
