import React, { useState, useEffect, useCallback } from "react";
import RepositoriesBox from "../RepositoriesBox/index.jsx";
import Pagination from "../Pagination";
import linkHeaderParser from "parse-link-header";
import "./style.css";

let pages = {};

const fetchRepositories = async (setIsLoading, setRepositories, username) => {
  setIsLoading(true);
  console.log(username);
  const data = await fetch(`https://api.github.com/users/${username}/repos`);
  pages = linkHeaderParser(data.headers.get("Link"));
  const dataJson = await data.json();
  setIsLoading(false);
  setRepositories(dataJson);
};

const Repositories = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRepositories(setIsLoading, setRepositories, username);
  }, []);

  console.log("pages... ", pages);

  return (
    <React.Fragment>
      {isLoading && "Loading...."}
      <div className="container">
        {repositories.map(repositorie => (
          <RepositoriesBox
            key={repositorie.id}
            name={repositorie.name}
            description={repositorie.description}
            language={repositorie.language}
            update={repositorie.updated_at}
            html_url={repositorie.html_url}
            forks={repositorie.forks}
            stars={repositorie.stargazers_count}
          />
        ))}
      </div>
      <Pagination
        pages={pages}
        setIsLoading={setIsLoading}
        setData={setRepositories}
        nextLink="https://api.github.com/user/2/repos?page=2"
      />
    </React.Fragment>
  );
};

export default Repositories;
