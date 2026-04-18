const projectList = document.getElementById('projectList');

const projects = [
  {
    title: 'RoadAlert',
    description: 'Aplicativo voltado para alertas de trânsito e segurança em tempo real.',
    link: 'roadalert.html'
  }
];

function renderProjects(list, container) {
  container.innerHTML = '';

  list.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.target = '_blank';
    projectLink.rel = 'noopener noreferrer';
    projectLink.textContent = 'Ver projeto';

    card.append(title, description, projectLink);
    container.appendChild(card);
  });
}

renderProjects(projects, projectList);
