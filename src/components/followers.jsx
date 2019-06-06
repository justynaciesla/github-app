import React from "react";
import FollowerBox from "./followerBox";

const Followers = ({ followers }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Followers;
