import React from 'react';

const ProjectCard = ({ project, index, setHoveredProject }) => {
  const IconComponent = project.icon;
  
  return (
    <div
      className="project-card"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="project-glow" style={{
        background: `linear-gradient(to bottom right, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`
      }}></div>
      
      <div className="project-content">
        <div className={`project-header bg-gradient-to-br ${project.gradient}`}>
          <div className="project-header-top">
            <div className="project-icon-wrapper">
              <IconComponent className="w-8 h-8" />
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-text"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-text"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            </div>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <div className="project-details">
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <ul className="project-features">
            {project.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <div className="feature-bullet"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`project-hover-line bg-gradient-to-r ${project.gradient}`}></div>
      </div>
    </div>
  );
};

export default ProjectCard;