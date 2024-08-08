import React from "react";

function ProjectCards({ src, link, h3, para }) {
  return (
    <a href={link} target="_blank">
      <img src={src} alt="viber logo" />
      <h3>{h3}</h3>
      <p>{para}</p>
    </a>
  );
}

export default ProjectCards;
