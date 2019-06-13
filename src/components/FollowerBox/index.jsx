import React from "react";
import "./style.css";

const FollowerBox = ({ login, html_url, avatar }) => {
  return (
    <div className="follower_container">
      <img className="follower_img" src={avatar} alt="user_photo" />
      <h3 className="follower_login">{login}</h3>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h5 className="follower_url">{html_url}</h5>
      </a>
      <hr style={{ marginTop: "50px" }} />
    </div>
  );
};

export default FollowerBox;
