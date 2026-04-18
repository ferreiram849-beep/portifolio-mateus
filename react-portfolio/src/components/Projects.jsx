import './Projects.css'

const projects = [
  {
    title: 'RoadAlert',
    description: 'Aplicativo voltado para alertas de trânsito e segurança em tempo real.',
    link: 'https://github.com/ferreiram849-beep/portifolio-mateus'
  }
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Ver projeto
      </a>
    </article>
  )
}

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}
