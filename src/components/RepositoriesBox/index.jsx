import React from "react";
import TimeAgo from "react-timeago";
import colors from "./colors.json";
import "./style.css";

const RepositoriesBox = ({
  name,
  description,
  language,
  update,
  html_url,
  forks,
  stars
}) => {
  const color = colors[language];

  return (
    <div className="repository_container">
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h2 className="repository_title">{name}</h2>
      </a>
      <h4 className="repository_description">{description}</h4>

      {language ? (
        <div style={{ display: "inline" }}>
          <span className="language_dot" style={{ backgroundColor: color }} />
          <p className="repository_language">{language}</p>
        </div>
      ) : null}

      {stars ? (
        <div style={{ display: "inline" }}>
          <i className="fas fa-star repository_ikons" />
          <p className="repository_for_ikons">{stars}</p>
        </div>
      ) : null}

      {forks ? (
        <div style={{ display: "inline" }}>
          <i className="fas fa-code-branch repository_ikons" />
          <p className="repository_for_ikons">{forks}</p>
        </div>
      ) : null}

      <p className="repository_updated">
        Updated <TimeAgo date={update} />
      </p>
      <hr style={{ marginTop: "24px" }} />
    </div>
  );
};

export default RepositoriesBox;
