import React, { Component } from "react";
//import { getUsers } from "../usersData";
import UserCard from "./userCard";
import SearchBox from "./searchBox";

class ListOfUsers extends Component {
  state = {
    isLoaded: false,
    users: []
  };

  componentDidMount() {
    this.setState({ isLoaded: true });

    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          isLoaded: false,
          users
        });
      });
  }

  // taka a data from a file: usersData.js
  /*   componentDidMount() {
    const users = getUsers();
    this.setState({ users });
  } */

  render() {
    const { users, isLoaded } = this.state;
    if (isLoaded) return <h1 className="loading"> loading.....</h1>;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center", color: "grey" }}>LIST OF USERS</h1>
        <hr />

        <SearchBox />

        <div className="container">
          {users.map(user => (
            <UserCard
              key={user.id}
              avatar={user.avatar_url}
              username={user.login}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ListOfUsers;
