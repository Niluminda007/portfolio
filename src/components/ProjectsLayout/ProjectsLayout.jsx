import React from "react";
import { Project } from "../Project/Project";
import "./projectslayout.css";
import { projects } from "../../utils/projectDetails";
import { useParams } from "react-router-dom";
export const ProjectsLayout = () => {
  const { projectId } = useParams();
  const currentProject = projects.find((project) => project.id === projectId);
  return (
    <div className="projectsLayout">
      <Project project={currentProject} />
    </div>
  );
};
