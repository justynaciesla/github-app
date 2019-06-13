import React from "react";
import "./style.css";

const Pagination = ({ nextLink, setData, setIsLoading, pages }) => {
  const loadNextPage = async url => {
    setIsLoading(true);
    const data = await fetch(url);
    // pages = linkHeaderParser(data.headers.get("Link"));

    console.log("pagination next page...", data);
    const dataJson = await data.json();
    setData(dataJson);
    setIsLoading(false);
  };

  return (
    <nav>
      <ul>
        <button
          className={`pagination_button ${pages.last ? "" : "disabled"}`}
          onClick={() => loadNextPage(pages.last.url)}
        >
          LAST
        </button>
        <button className={`pagination_button ${pages.prev ? "" : "disabled"}`}>
          Prev
        </button>
        <button
          className={`pagination_button ${pages.next ? "" : "disabled"}`}
          onClick={loadNextPage}
        >
          NEXT >
        </button>
        <button
          className={`pagination_button ${pages.first ? "" : "disabled"}`}
        >
          first
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
