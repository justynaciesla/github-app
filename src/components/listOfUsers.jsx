import React, { useState, useEffect } from "react";
//import { getUsers } from "../usersData";
import UserCard from "./userCard";
import SearchBox from "./searchBox";

const ListUsersTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // didMount
  // WillUnmount
  // DidUpdate
  useEffect(() => {
    async function asyncFunction() {
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
    console.log("how many times?");
    asyncFunction();
  }, []);

  console.log("HOOKS >>> !!! ", hasError, users);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", color: "grey" }}>LIST OF USERS</h1>
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
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default ListUsersTest;
