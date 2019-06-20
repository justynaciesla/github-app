import React, { useState, useEffect } from "react";
import RepositoriesBox from "../RepositoriesBox/index.jsx";
import Pagination from "../Pagination";
import Pagination2 from "../Pagination2";
import linkHeaderParser from "parse-link-header";
import "./style.css";

const Repositories = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState({});

  const fetchRepositories = async url => {
    setIsLoading(true);
    const data = await fetch(url);
    setPages(linkHeaderParser(data.headers.get("Link")));
    console.log("pages", pages);
    const dataJson = await data.json();
    setIsLoading(false);
    setRepositories(dataJson);
  };

  useEffect(() => {
    fetchRepositories(`https://api.github.com/users/${username}/repos`);
  }, []);

  return (
    <React.Fragment>
      {isLoading && "Is loading..."}
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
      <div style={{ float: "right", marginRight: "80px" }}>
        <Pagination
          fetchData={fetchRepositories}
          pages={pages}
          setIsLoading={setIsLoading}
          setData={setRepositories}
        />
      </div>
      {/* <Pagination2 fetchData={fetchRepositories} pages={pages} /> */}
    </React.Fragment>
  );
};

export default Repositories;
