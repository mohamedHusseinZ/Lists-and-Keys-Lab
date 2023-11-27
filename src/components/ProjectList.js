import React from "react";
import ProjectItem from "./ProjectItem";



const ProjectList = ({ projects }) => (
  <div>
    <h2>Project List</h2>
    {projects.map((project) => (
      <ProjectItem key={project.id} technologies={project.technologies} />
    ))}
  </div>
);
function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
