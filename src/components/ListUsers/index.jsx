import React, { useState, useEffect } from "react";
import UserCard from "../UserCard";
import SearchBox from "../SearchBox";
import "./style.css";

const ListUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // didMount -> []
  // WillUnmount -> [id]
  // DidUpdate -> return, []
  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const response = await fetch("https://api.github.com/users");
      if (response.status >= 400) {
        setHasError(true);
      }
      const responseJson = await response.json();
      setErrorMessage(responseJson.message);
      setUsers(responseJson);
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">LIST OF USERS</h1>
      <hr />
      <SearchBox />
      <div className="container">
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
    </React.Fragment>
  );
};

export default ListUsers;
