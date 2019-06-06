import React from "react";
import RepositoriesBox from "./repositoriesBox";

const Repositories = ({ repositories }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Repositories;
