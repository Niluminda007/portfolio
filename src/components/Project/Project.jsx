import React, { useContext } from "react";
import "./project.css";
import Tech from "../Tech/Tech";
import { GridImageGallery } from "../GridImageGallery/GridImageGallery";
import { Skills } from "../Skills/Skills";
import { AppContext } from "../../context/context";

export const Project = ({ project }) => {
  const { toggleMenu, isMobile, isTablet } = useContext(AppContext);
  return (
    <div
      className={`${toggleMenu ? "z-[0]" : "z-[100]"} project ${
        isMobile ? "p-4" : isTablet ? "p-8" : "p-16"
      }`}
    >
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

        <div
          className={`${
            isMobile
              ? "flex-col"
              : isTablet
              ? "flex-row gap-32"
              : "flex-row w-[80vw]"
          } flex justify-between`}
        >
          <div
            className={`${
              isMobile ? "" : isTablet ? "w-[40vw]" : "w-[40vw] my-10"
            }`}
          >
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
          </div>

          <GridImageGallery images={project.imgUrls} />
        </div>

        <div className="project__details__label">
          TECHNOLOGIES
          <span className="project__details__label-bar"></span>
        </div>
        <span
          id="tech"
          className="project__details__text project__details__text-small"
        >
          <Skills technologies={project.technologies} name="project" />
          {/* <Tech technologies={project.technologies} /> */}
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
    </div>
  );
};
