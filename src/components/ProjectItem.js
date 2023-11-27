import React from "react";
const ProjectList = ({ projects }) => (
  <div>
    <h2>Project List</h2>
    {projects.map((project) => (
      <ProjectItem key={project.id} technologies={project.technologies} />
    ))}
  </div>
);

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
