import React from "react";

function ProjectItems({ item }) {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <div className="buttons__container">
        <a href={item.demo} target="_blank" className="project-demo-button">
          Live Demo <i className="bx bx-link-external project__button-icon"></i>
        </a>
        <a href={item.code} target="_blank" className="project-code-button">
          Code <i className="bx bx-link-external project__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default ProjectItems;
