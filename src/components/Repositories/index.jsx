import React, { useState, useEffect } from "react";
import RepositoriesBox from "../RepositoriesBox/index.jsx";
import Pagination from "../Pagination";
import "./style.css";

const fetchRepositories = async (setIsLoading, setRepositories, username) => {
  setIsLoading(true);
  console.log(username);
  const data = await fetch(`https://api.github.com/users/${username}/repos`);
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
        setIsLoading={setIsLoading}
        setData={setRepositories}
        nextLink="/users/user/1/repos?page=2"
      />
    </React.Fragment>
  );
};

export default Repositories;
