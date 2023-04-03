import React from "react";
import "./project.css";
import Tech from "../Tech/Tech";
import { GridImageGallery } from "../GridImageGallery/GridImageGallery";

export const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__details">
        <div className="project__details__label">
          Name
          <span className="project__details__label-bar"></span>
        </div>
        <span
          id="title"
          className="project__details__text project__details__text-hidden"
        >
          {project.name}
        </span>

        <div className="project__details__label">
          BIO
          <span className="project__details__label-bar"></span>
        </div>
        <span
          id="bio"
          className="project__details__text project__details__text-small"
        >
          {project.description}
        </span>
        <div className="project__details__label">
          TECHNOLOGIES
          <span className="project__details__label-bar"></span>
        </div>
        <span
          id="tech"
          className="project__details__text project__details__text-small"
        >
          <Tech technologies={project.technologies} />
        </span>
        <div className="project__details__label">
          REPOS
          <span className="project__details__label-bar"></span>
        </div>
        <span
          id="repos"
          className="project__details__text project__details__text-small flex gap-5"
        >
          <div
            onClick={() => window.open(project.repo.url, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={project.repo.img}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(project.demo.url, "_blank")}
            className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
          >
            <img
              src={project.demo.img}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </span>
      </div>
      <GridImageGallery images={project.imgUrls} />
    </div>
  );
};
