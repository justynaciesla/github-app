import React, { useState, useEffect } from "react";
import UserCard from "../UserCard";
import SearchBox from "../SearchBox";
import PaginationListUsers from "../PaginationListUsers";
import linkHeaderParser from "parse-link-header";
import "./style.css";

const ListUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pages, setPages] = useState({});

  // didMount -> []
  // WillUnmount -> [id]
  // DidUpdate -> return, []
  const fetchUsers = async url => {
    if (url === "https://api.github.com/users{?since}") {
      url = "https://api.github.com/users?since=1&per_page=18";
    }
    setIsLoading(true);
    const data = await fetch(url);
    if (data.status >= 400) {
      setHasError(true);
    }
    const dataJson = await data.json();
    setErrorMessage(dataJson.message);
    setUsers(dataJson);
    setIsLoading(false);
    setPages(linkHeaderParser(data.headers.get("Link")));
  };

  useEffect(() => {
    fetchUsers(`https://api.github.com/users?since=1&per_page=18`);
  }, []);

  console.log("pages users", pages);

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
        fetchData={fetchUsers}
        pages={pages}
        setIsLoading={setIsLoading}
        setData={setUsers}
      />
    </React.Fragment>
  );
};

export default ListUsers;
