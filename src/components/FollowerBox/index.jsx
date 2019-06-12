import React from "react";

const FollowerBox = ({ login, html_url, avatar }) => {
  return (
    <div className="follower_container">
      <img className="follower_img" src={avatar} alt="user_photo" />
      <h3 style={{ marginLeft: "150px", color: "#4ca8d7" }}>{login}</h3>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h5 style={{ marginLeft: "150px", color: "grey" }}>{html_url}</h5>
      </a>
      <hr style={{ marginTop: "50px" }} />
    </div>
  );
};

export default FollowerBox;
