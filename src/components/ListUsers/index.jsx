import React, { useState, useEffect } from "react";
import UserCard from "../UserCard";
import SearchBox from "../SearchBox";
import PaginationListUsers from "../PaginationListUsers";
import linkHeaderParser from "parse-link-header";
import { get } from "lodash";
import "./style.css";

const ListUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pages, setPages] = useState({});

  const fetchUserUrl = "https://api.github.com/users?since";

  const changeValueParamsNext = () => {
    window.history.pushState(
      pages.next.since,
      "next page",
      `users?since=${pages.next.since}`
    );
  };

  const changeValueParamsFirst = () => {
    if (pages.first.since === undefined) {
      pages.first.since = 1;
    }
    window.history.pushState(
      pages.first.since,
      "first page",
      `users?since=${pages.first.since}`
    );
  };

  const changeValueParamsPrev = () => {
    window.history.back();
    console.log(window.history);
  };

  const fetchUsers = async url => {
    let since = new URLSearchParams(new URL(url).search).get("since");
    setIsLoading(true);
    const data = await fetch(`${fetchUserUrl}=${since}`);
    if (data.status >= 400) {
      setHasError(true);
    }
    const dataJson = await data.json();
    setErrorMessage(dataJson.message);
    setUsers(dataJson);
    setIsLoading(false);
    setPages(linkHeaderParser(data.headers.get("Link")));
  };

  const nextPage = url => {
    changeValueParamsNext();
    fetchUsers(url);
  };

  const firstPage = url => {
    changeValueParamsFirst();
    fetchUsers(url);
  };

  const prevPage = url => {
    changeValueParamsPrev();
    fetchUsers(url);
  };

  useEffect(() => {
    /*  const since = new URLSearchParams(new URL(window.location.href).search).get(
      "since"
    ); */
    fetchUsers(window.location.href);
    // window.location = window.location.hrerf + '?page=1';
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">LIST OF USERS</h1>
      <hr />
      <SearchBox />
      <div className="container">
        {isLoading && "Loading...."}
        {hasError && <div> Sorry, something went wrong</div>}
        {!hasError &&
          users.map(user => (
            <UserCard
              key={user.id}
              avatar={user.avatar_url}
              username={user.login}
              id={user.id}
            />
          ))}
      </div>
      <PaginationListUsers
        pages={pages}
        nextPage={nextPage}
        firstPage={firstPage}
        prevPage={prevPage}
      />
    </React.Fragment>
  );
};

export default ListUsers;
