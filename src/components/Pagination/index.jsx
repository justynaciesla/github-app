import React from "react";
import "./style.css";

const Pagination = ({ nextLink, setData, setIsLoading }) => {
  const loadNextPage = async () => {
    setIsLoading(true);
    const data = await fetch(nextLink);
    const dataJson = await data.json();
    setData(dataJson);
    setIsLoading(false);
  };
  return (
    <nav>
      <ul>
        <button className="pagination_button" onClick={loadNextPage}>
          NEXT >
        </button>
        <button className="pagination_button">LAST</button>
      </ul>
    </nav>
  );
};

export default Pagination;
