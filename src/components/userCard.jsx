import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ avatar, username }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card_box">
          <img className="img" src={avatar} alt="user_photo" />
          <h2 className="login">{username}</h2>
          <Link to={`/users/${username}`}>
            <button className="card_button">DETAILS</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
