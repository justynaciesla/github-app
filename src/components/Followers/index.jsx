import React, { useState, useEffect } from "react";
import FollowerBox from "../FollowerBox";
import Pagination from "../Pagination";
import linkHeaderParser from "parse-link-header";
import "./styles.css";

const Followers = ({ username }) => {
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState({});

  const fetchFollowers = async url => {
    setIsLoading(true);
    const data = await fetch(url);
    setPages(linkHeaderParser(data.headers.get("Link")));
    const dataJson = await data.json();
    setIsLoading(false);
    setFollowers(dataJson);
  };

  useEffect(() => {
    fetchFollowers(`https://api.github.com/users/${username}/followers`);
  }, []);

  console.log("pages followers... ", pages);

  return (
    <div className="container">
      {isLoading && <h1>Is loading....</h1>}
      {followers.map(follower => (
        <FollowerBox
          key={follower.id}
          login={follower.login}
          html_url={follower.html_url}
          avatar={follower.avatar_url}
        />
      ))}
      <Pagination
        fetchData={fetchFollowers}
        pages={pages}
        setIsLoading={setIsLoading}
        setData={setFollowers}
      />
    </div>
  );
};

export default Followers;
