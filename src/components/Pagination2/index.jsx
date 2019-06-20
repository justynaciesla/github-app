import React from "react";
import "./style.css";
import { get } from "lodash";

const Pagination2 = ({ pages, fetchData }) => {
  let listOfPages = [];
  if (!pages) {
    return null;
  }

  const lastPage = get(pages, "last.page");
  const lastPageUrl = get(pages, "last.url");

  for (var i = 1; i <= lastPage; i++) {
    listOfPages.push(i);
  }

  console.log("lastpage", lastPage);
  console.log("page - listOfPages", listOfPages);
  console.log("url", lastPageUrl);

  const createUrl = n => {
    let newUrl = lastPageUrl.replace(listOfPages, n);
    fetchData(newUrl);
  };

  console.log("test", pages);

  return (
    <div>
      {pages && (
        <nav>
          <ul>
            <button
              className={`pagination_button_prev ${
                pages.prev ? "" : "disabled"
              }`}
              onClick={() => fetchData(pages.prev.url)}
            >
              PREV
            </button>

            {listOfPages.map(number => (
              <button
                key={number}
                className="pagination_number_button"
                onClick={() => createUrl(number)}
              >
                {number}
              </button>
            ))}

            <button
              className={`pagination_button_next ${
                pages.next ? "" : "disabled"
              }`}
              onClick={() => fetchData(pages.next.url)}
            >
              NEXT
            </button>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination2;
