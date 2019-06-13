import React, { useState } from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import "./style.css";

const SearchBox = () => {
  const [userInput, setUserInput] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = event => {
    const userInput = event.target.value;
    setUserInput(userInput);
  };

  const handleClick = async e => {
    e.preventDefault();
    await fetch("https://api.github.com/search/users?q=" + userInput)
      .then(res => res.json())
      .then(users => {
        setUsers(users.items);
      });
  };

  return (
    <form method="get" className="searchbox_form">
      <input
        className="searchbox_input"
        list="users"
        type="text"
        placeholder="Search user..."
        value={userInput}
        onChange={handleChange}
      />
      <button className="searchbox_button" type="submit" onClick={handleClick}>
        <i className="fa fa-search" />
      </button>

      <div className="users_wrapper">
        {users.map(user => (
          <div key={user.id} className="search_result_container">
            <Link
              to={`/users/${user.login}`}
              key={user.id}
              target="_blank"
              className="search_user_link"
            >
              <img
                className="search_img"
                src={user.avatar_url}
                alt="user_photo"
              />
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[userInput]}
                textToHighlight={user.login}
                className="search_user_login"
              />
            </Link>
          </div>
        ))}
      </div>
    </form>
  );
};

export default SearchBox;

/* class SearchBox extends Component {
  state = {
    userInput: "",
    users: []
  };

  handleChange = event => {
    const userInput = event.target.value;
    this.setState({ userInput });
  };

  handleClick = async e => {
    e.preventDefault();

    await fetch("https://api.github.com/search/users?q=" + this.state.userInput)
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users.items
        });
      });
  };

  render() {
    const { users } = this.state;
    return (
      <React.Fragment>
        <form method="get" className="searchbox_form">
          <input
            className="searchbox_input"
            list="users"
            type="text"
            placeholder="Search user..."
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <button
            className="searchbox_button"
            type="submit"
            onClick={this.handleClick}
          >
            <i className="fa fa-search" />
          </button>

          <div className="users_wrapper">
            {users.map(user => (
              <div key={user.id} className="search_result_container">
                <Link
                  to={`/users/${user.login}`}
                  key={user.id}
                  target="_blank"
                  className="search_user_link"
                >
                  <img
                    className="search_img"
                    src={user.avatar_url}
                    alt="user_photo"
                  />
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[this.state.userInput]}
                    textToHighlight={user.login}
                    className="search_user_login"
                  />
                </Link>
              </div>
            ))}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBox;
 */
