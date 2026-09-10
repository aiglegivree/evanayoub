const projects = [
  {
    title: "Project One",
    description:
      "Short description of the project: the problem, what you built, and the result.",
    image: "assets/projects/project-1.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    sourceUrl: "https://github.com/aiglegivree",
  },
  {
    title: "Project Two",
    description:
      "Replace this with another project. Mention your role, stack, and one strong detail.",
    image: "assets/projects/project-2.svg",
    tags: ["React", "API", "UI"],
    demoUrl: "#",
    sourceUrl: "https://github.com/aiglegivree",
  },
  {
    title: "Project Three",
    description:
      "Use real screenshots in assets/projects and update the image path here.",
    image: "assets/projects/project-3.svg",
    tags: ["Design", "Frontend", "GitHub"],
    demoUrl: "#",
    sourceUrl: "https://github.com/aiglegivree",
  },
];

const cvHighlights = [
  {
    date: "2026",
    title: "Portfolio website",
    description: "Created a personal portfolio to present projects, skills, and CV.",
  },
  {
    date: "2025 - 2026",
    title: "Education or role",
    description: "Add your school, training, internship, job, or certification here.",
  },
  {
    date: "Skills",
    title: "Technical stack",
    description: "HTML, CSS, JavaScript, Git, GitHub, and any tools you use.",
  },
];

function renderProjects() {
  const grid = document.querySelector("#projectsGrid");

  grid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="Screenshot for ${project.title}" />
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags" aria-label="Technologies used">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.demoUrl}">Demo</a>
              <a href="${project.sourceUrl}">Code</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCvHighlights() {
  const timeline = document.querySelector("#cvHighlights");

  timeline.innerHTML = cvHighlights
    .map(
      (item) => `
        <article class="timeline-item">
          <time>${item.date}</time>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

renderProjects();
renderCvHighlights();
