import React from "react";
import FollowerBox from "./FollowerBox";

const Followers = ({ followers }) => {
  return (
    <div className="container">
      {followers.map(follower => (
        <FollowerBox
          key={follower.id}
          login={follower.login}
          html_url={follower.html_url}
          avatar={follower.avatar_url}
        />
      ))}
    </div>
  );
};

export default Followers;
