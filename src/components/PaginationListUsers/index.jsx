import React from "react";
import "./style.css";

const Pagination = ({ pages, prevPage, nextPage, firstPage }) => {
  const getClasses = url => {
    let classes = "pagination_button ";
    classes += url === "http://localhost:3000/users?since=1" ? "disabled" : "";
    return classes;
  };

  return (
    <div>
      {pages && (
        <nav style={{ float: "right", marginRight: "130px" }}>
          <ul>
            <button
              className={`pagination_button ${pages.first ? "" : "disabled"}`}
              onClick={() => firstPage(pages.first.url)}
            >
              FIRST
            </button>

            {/* <button
              className={getClasses(window.location.href)}
              onClick={() => prevPage(window.location.href)}
            >
              PREV
            </button> */}

            <button
              className={`pagination_button ${pages.next ? "" : "disabled"}`}
              onClick={() => nextPage(pages.next.url)}
            >
              NEXT
            </button>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination;
