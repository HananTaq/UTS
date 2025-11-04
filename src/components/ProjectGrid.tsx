import { Link } from 'react-router-dom';

interface Project {
  name: string;
  imageUrl: string;
  pathName: string;
}

interface ProjectGridProps {
  projects: Project[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" className="project-section">
      <h2>SOAL</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link to={`/project/${project.pathName}`} key={index} className="project-card-link">
            <div className="project-card">
              <img src={project.imageUrl} alt={project.name} className="project-image" />
              <div className="project-info">
                <h3>{project.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
