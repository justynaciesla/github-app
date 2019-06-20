import React from "react";
import "./style.css";

const Pagination = ({ pages, fetchData }) => {
  return (
    <div>
      {pages && (
        <nav>
          <ul>
            <button
              className={`pagination_button ${pages.first ? "" : "disabled"}`}
              onClick={() => fetchData(pages.first.url)}
            >
              FIRST
            </button>
            <button
              className={`pagination_button ${pages.prev ? "" : "disabled"}`}
              onClick={() => fetchData(pages.prev.url)}
            >
              PREV
            </button>
            <button
              className={`pagination_button ${pages.next ? "" : "disabled"}`}
              onClick={() => fetchData(pages.next.url)}
            >
              NEXT
            </button>
            <button
              className={`pagination_button ${pages.last ? "" : "disabled"}`}
              onClick={() => fetchData(pages.last.url)}
            >
              LAST
            </button>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination;
