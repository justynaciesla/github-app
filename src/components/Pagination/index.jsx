import React from "react";
import "./style.css";

const Pagination = ({
  nextLink,
  setData,
  setIsLoading,
  pages,
  fetchRepositories
}) => {
  return (
    <nav>
      <ul>
        <button
          className={`pagination_button ${pages.last ? "" : "disabled"}`}
          onClick={() => fetchRepositories(pages.last.url)}
        >
          LAST
        </button>
        <button
          className={`pagination_button ${pages.prev ? "" : "disabled"}`}
          onClick={() => fetchRepositories(pages.prev.url)}
        >
          Prev
        </button>
        <button
          className={`pagination_button ${pages.next ? "" : "disabled"}`}
          onClick={() => fetchRepositories(pages.next.url)}
        >
          NEXT >
        </button>
        <button
          className={`pagination_button ${pages.first ? "" : "disabled"}`}
          onClick={() => fetchRepositories(pages.first.url)}
        >
          first
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
