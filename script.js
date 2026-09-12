const content = {
    nav: {
      projects: "Projects",
      skills: "Skills",
      academics: "Academic Results",
      cv: "CV",
      contact: "Contact",
    },
    footer: "Built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.",
    documents: {
      cvEn: "CV PDF English",
      cvFr: "CV PDF Francais",
    },
    home: {
      hero: {
        eyebrow: "Final-year robotics engineering student",
        title: "Evan Ayoub",
        text:
          "Robotics student at EPFL with a Data Science minor, interested in electronics, coding, computer vision, CAD, and mechanics.",
        primary: "View projects",
        secondary: "Open CV",
      },
      about: {
        label: "About",
        title: "Hi, I am Evan.",
        text:
          "I am a final-year university engineering student in robotics with a minor in Data Science. I like the full stack of robotics: electronics, code, vision, CAD, mechanics, and the small engineering choices that make a system actually work.",
      },
      projects: {
        label: "Selected Work",
        title: "Projects",
      },
      skills: {
        label: "Technical Profile",
        title: "Skills",
      },
      academics: {
        label: "Academic Results",
        title: "Education and results",
        transcript: "Academic record",
      },
      cv: {
        label: "CV",
        title: "Experience and skills",
        text:
          "Robotics projects, tutoring and teaching assistant experience, embedded electronics, data analysis, and technical tools.",
        link: "Open CV page",
      },
      contact: {
        label: "Contact",
        title: "Let us build something useful.",
      },
    },
    cv: {
      label: "Curriculum Vitae",
      summary:
        "Final-year robotics engineering student at EPFL with a Data Science minor and a Microengineering Bachelor's degree. Interested in electronics, coding, computer vision, CAD, mechanics, autonomous robotics, and applied AI.",
      transcript: "Academic record",
      contact: { title: "Contact" },
      skills: {
        title: "Skills",
        technical:
          "Mobile robotics, computer vision, image processing, embedded systems, PCB design.",
        programming:
          "Python, C/C++, OpenCV, NumPy, Pandas, Git, PyTorch, TensorFlow.",
        tools:
          "MATLAB, Webots, Catia, KiCad, LTspice, Codex, Raspberry Pi, Arduino.",
      },
      languages: {
        title: "Languages",
        items: "French and Lebanese: native. English: C2. Spanish: B2.",
      },
      education: { title: "Education" },
      experience: { title: "Experience" },
      projects: { title: "Projects" },
      activities: { title: "Activities" },
    },
    projects: [
      {
        title: "Valobot - Robopoly Robotics Competition",
        description:
          "Winner of the EPFL Robopoly robotics competition with an autonomous robot relying only on camera vision. The robot handled line tracking, corridor tracking, and target shooting autonomously.",
        image: "assets/projects/valobot/img2.jpg",
        gallery: [
          "assets/projects/valobot/img2.jpg",
          "assets/projects/valobot/img3.jpg",
          "assets/projects/valobot/img4.jpg",
        ],
        tags: ["Computer Vision", "Electronics", "Motor Control", "CAD", "Mechanics", "Python", "Team Work"],
      },
      {
        title: "Sola Project MPPT and Power Circuit",
        description:
          "Power electronics work for a solar aircraft: design and assembly of the power circuit PCB, with a focus on the maximum power point tracker.",
        image: "assets/projects/sola/IMG1.JPEG",
        gallery: ["assets/projects/sola/IMG1.JPEG", "assets/projects/sola/IMG2.JPEG"],
        tags: ["PCB Design", "MPPT", "Embedded Electronics", "Team Work"],
      },
      {
        title: "Thymio Mobile Robot Navigation",
        description:
          "Mobile robotics class project graded 6/6, where a Thymio robot navigates from start to goal using A* path planning, ArUco-based computer vision localization, EKF sensor fusion, ToF obstacle avoidance, kidnapping recovery, and automatic replanning.",
        image: "assets/thymio/video1-poster.jpg",
        gallery: [
          {
            type: "video",
            src: "assets/thymio/video1.MP4",
            poster: "assets/thymio/video1-poster.jpg",
          },
          {
            type: "video",
            src: "assets/thymio/video2.MP4",
            poster: "assets/thymio/video2-poster.jpg",
          },
        ],
        tags: ["Mobile Robotics", "A*", "Computer Vision", "EKF", "ArUco", "Obstacle Avoidance", "Python", "Team Work"],
      },
      {
        title: "Image Analysis and Pattern Recognition",
        description:
          "Course project graded 5.75/6 in image analysis and pattern recognition. The goal was to detect UNO cards on a table, classify each card, and attribute the detected cards to the correct player.",
        websiteUrl: "assets/projects/image-analysis/UNO Vision Challenge.pdf",
        websiteLabel: "Open presentation",
        image: "assets/projects/image-analysis/img1.png",
        gallery: [
          "assets/projects/image-analysis/img1.png",
          "assets/projects/image-analysis/img2.png",
          "assets/projects/image-analysis/img3.png",
          "assets/projects/image-analysis/img4.png",
        ],
        tags: ["Image Analysis", "Pattern Recognition", "Computer Vision", "Feature Extraction", "Classification", "CNN", "Deep Learning", "Segmentation", "Data Augmentation", "Team Work"],
      },
      {
        title: "Copycat Portfolios",
        description:
          "EPFL statistical analysis project on financial data, investment strategy selection, and political trading performance, delivered with a demonstration website.",
        websiteUrl: "https://ada-2025-project-adaptateurusbversu.vercel.app/",
        websiteLabel: "Open project website",
        image: "assets/projects/copycat/img1.png",
        gallery: [
          "assets/projects/copycat/img1.png",
          "assets/projects/copycat/img2.png",
          "assets/projects/copycat/img3.png",
        ],
        tags: ["Data Analysis", "Python", "Web Demo", "Finance", "Statistics & Probability", "Team Work"],
      },
      {
        title: "Aerial Robotics Gate Navigation",
        description:
          "Aerial robotics course project graded 5.25/6, focused on fast autonomous gate navigation. I first developed a Webots simulation controller to detect gates and fly through them as quickly as possible, then worked in a team to transfer the approach to a real drone flying through physical gates.",
        image: "assets/projects/aerial/video1.mp4",
        gallery: [
          {
            type: "video",
            src: "assets/projects/aerial/video1.mp4",
          },
          {
            type: "video",
            src: "assets/projects/aerial/video2.mp4",
          },
        ],
        tags: ["Aerial Robotics", "Drone Control", "Computer Vision", "Webots", "Autonomous Navigation", "Team Work"],
      },
    ],
    skillsList: [
      {
        title: "Robotics and control",
        items: ["Mobile robotics", "Aerial robotics", "Autonomous navigation", "Path planning", "Motor control"],
      },
      {
        title: "Computer vision and AI",
        items: ["Computer vision", "Image analysis", "Pattern recognition", "CNNs", "Segmentation", "Deep learning"],
      },
      {
        title: "Electronics and design",
        items: ["PCB design", "Embedded electronics", "MPPT", "Sensors", "CAD", "Mechanics"],
      },
      {
        title: "Programming and tools",
        items: ["Python", "C/C++", "OpenCV", "NumPy", "Pandas", "Git", "Webots", "KiCad"],
      },
    ],
    academics: [
      {
        date: "2025 - current",
        title: "EPFL - Master of Science in Robotics",
        description: "Minor in Data Science.",
      },
      {
        date: "2022 - 2025",
        title: "EPFL - Bachelor in Microengineering",
        description: "Final result: 5.00/6.",
      },
      {
        date: "2023 - 2024",
        title: "Aalto University - Exchange year",
        description: "Exchange year in Helsinki, Finland.",
      },
      {
        date: "2019 - 2022",
        title: "Lycee Fenelon Notre Dame, La Rochelle",
        description:
          "Baccalaureate with Mathematics, Physics-Chemistry, and Digital & Computer Science specialities. European section, highest honors, average: 17.03/20.",
      },
    ],
    highlights: [
      {
        date: "2025 - 2026",
        title: "Robopoly robotics competition winner",
        description:
          "Built a camera-only autonomous robot for line tracking, corridor navigation, and target shooting.",
      },
      {
        date: "2024 - current",
        title: "Sola Project electronics",
        description:
          "Designed and assembled the power circuit PCB and MPPT for a solar aircraft project.",
      },
      {
        date: "2023 - current",
        title: "Tutoring and TA experience",
        description:
          "Tutoring in mathematics, physics, and electronics; EPFL teaching assistant work in electrical systems and mechanical physics.",
      },
    ],
    education: [
      {
        date: "September 2025 - current",
        title: "Master of Science in Robotics - EPFL",
        description: "Minor in Data Science.",
      },
      {
        date: "August 2023 - July 2024",
        title: "Exchange year - Aalto University",
        description: "Academic exchange in Helsinki, Finland.",
      },
      {
        date: "September 2022 - July 2025",
        title: "Bachelor's Degree in Microengineering - EPFL",
        description: "Graduated with a result of 5.00/6.",
      },
      {
        date: "September 2019 - July 2022",
        title: "Baccalaureate - Lycee Fenelon Notre Dame",
        description:
          "Mathematics, Physics-Chemistry, Digital and Computer Science. European section, highest honors, 17.03/20 average.",
      },
    ],
    experience: [
      {
        date: "September 2023 - current",
        title: "Tutoring and Teaching Assistant Experience",
        description:
          "Tutor for students from elementary school to apprenticeship and gymnasium levels through Apprenons Ensemble. Teaching assistant for EPFL electrical and electronic systems and mechanical physics courses.",
      },
      {
        date: "April 2022",
        title: "Observation Internship - Shark Robotics",
        description:
          "Observation internship exploring the R&D work, engineering environment, and organization of a robotics company.",
      },
      {
        date: "September 2020 - July 2022",
        title: "Programming and Mathematics Courses",
        description:
          "Introduced high school students to programming, especially Python, and to practical applications of mathematics in code.",
      },
    ],
    cvProjects: [
      {
        date: "October 2025 - June 2026",
        title: "Robopoly Robotics Competition - EPFL",
        description:
          "Winner of the competition with an autonomous camera-vision robot for line tracking, corridor tracking, and target shooting.",
      },
      {
        date: "March 2024 - current",
        title: "Sola Project - MPPT and Power Circuit",
        description:
          "Responsible for the design and assembly of the power circuit PCB, especially the maximum power point tracker for a solar aircraft as part of the Sola Project association.",
      },
      {
        date: "September 2025 - December 2025",
        title: "Copycat Portfolios - EPFL",
        description:
          "Financial data analysis, investment strategy selection, and demonstration website for the question: do political trades pay off?",
      },
      {
        date: "2022",
        title: "Competitions",
        description:
          "Participant in the General Mathematics Competition and winner of the Lions Club Physics Competition.",
      },
    ],
    activities: [
      {
        date: "September 2021 - current",
        title: "Chief Scout",
        description: "Leadership and youth supervision experience as a scout leader.",
      },
      {
        date: "2017 - current",
        title: "Lyric evening association of Sanxay",
        description: "Member of the association supporting lyrical evening events in Sanxay.",
      },
      {
        date: "Sports and music",
        title: "Personal interests",
        description: "Handball, sailing, trumpet, guitar, and judo with a brown belt.",
      },
    ],
  };

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function setStaticText() {
  document.documentElement.lang = "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getNestedValue(content, node.dataset.i18n);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-doc='cv-en']").forEach((node) => {
    node.textContent = content.documents.cvEn;
  });

  document.querySelectorAll("[data-doc='cv-fr']").forEach((node) => {
    node.textContent = content.documents.cvFr;
  });
}

function timelineItem(item) {
  return `
    <article class="timeline-item">
      <time>${item.date}</time>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `;
}

function renderProjects() {
  const grid = document.querySelector("#projectsGrid");
  if (!grid) return;

  grid.innerHTML = content.projects
    .map((project, projectIndex) => {
      const media = projectMedia(project);
      return `
        <article class="project-card">
          <div class="project-carousel" data-carousel-project="${projectIndex}" aria-label="${project.title} photos">
            <button class="carousel-nav previous" type="button" data-carousel-step="-1" aria-label="Previous ${project.title} photo">‹</button>
            <div class="carousel-stage" data-image-index="0">
              ${mediaMarkup(media[0], project.title, 0)}
            </div>
            <button class="carousel-open" type="button" aria-label="Open ${project.title} media 1">Open larger</button>
            <button class="carousel-nav next" type="button" data-carousel-step="1" aria-label="Next ${project.title} photo">›</button>
            <div class="carousel-count" aria-live="polite">1/${media.length}</div>
          </div>
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>
              ${project.description}
              ${
                project.websiteUrl
                  ? `<a class="project-inline-link" href="${project.websiteUrl}" target="_blank" rel="noreferrer">${project.websiteLabel}</a>.`
                  : ""
              }
            </p>
            <div class="tags" aria-label="Technologies used">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  bindProjectCarousels();
}

function projectMedia(project) {
  return (project.gallery || [project.image]).map(normalizeMedia);
}

function normalizeMedia(item) {
  if (typeof item === "string") {
    return {
      type: item.toLowerCase().endsWith(".mp4") ? "video" : "image",
      src: item,
    };
  }

  return item;
}

function mediaMarkup(media, title, index) {
  if (media.type === "video") {
    return `<video src="${media.src}" ${media.poster ? `poster="${media.poster}"` : ""} controls muted preload="metadata" playsinline aria-label="${title} video ${index + 1}"></video>`;
  }

  return `<img src="${media.src}" alt="${title} photo ${index + 1}" />`;
}

function ensureLightbox() {
  let lightbox = document.querySelector("#imageLightbox");
  if (lightbox) return lightbox;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="image-lightbox" id="imageLightbox" hidden>
        <button class="lightbox-close" type="button" aria-label="Close image viewer">×</button>
        <button class="lightbox-nav previous" type="button" aria-label="Previous image">‹</button>
        <figure>
          <div class="lightbox-media"></div>
          <figcaption></figcaption>
        </figure>
        <button class="lightbox-nav next" type="button" aria-label="Next image">›</button>
      </div>
    `
  );

  lightbox = document.querySelector("#imageLightbox");
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.querySelector(".previous").addEventListener("click", () => stepLightbox(-1));
  lightbox.querySelector(".next").addEventListener("click", () => stepLightbox(1));
  document.addEventListener("keydown", handleLightboxKeys);
  return lightbox;
}

const lightboxState = {
  projectIndex: 0,
  imageIndex: 0,
};

function bindProjectCarousels() {
  document.querySelectorAll("[data-carousel-project]").forEach((carousel) => {
    const projectIndex = Number(carousel.dataset.carouselProject);
    const project = content.projects[projectIndex];
    const media = projectMedia(project);
    const stage = carousel.querySelector(".carousel-stage");
    const openButton = carousel.querySelector(".carousel-open");
    const count = carousel.querySelector(".carousel-count");

    carousel.querySelectorAll("[data-carousel-step]").forEach((button) => {
      button.hidden = media.length < 2;
      button.addEventListener("click", () => {
        const nextIndex = (Number(stage.dataset.imageIndex) + Number(button.dataset.carouselStep) + media.length) % media.length;
        stage.dataset.imageIndex = String(nextIndex);
        stage.innerHTML = mediaMarkup(media[nextIndex], project.title, nextIndex);
        openButton.setAttribute("aria-label", `Open ${project.title} media ${nextIndex + 1}`);
        count.textContent = `${nextIndex + 1}/${media.length}`;
      });
    });

    count.hidden = media.length < 2;
    openButton.addEventListener("click", () => {
      openLightbox(projectIndex, Number(stage.dataset.imageIndex));
    });
  });
}

function openLightbox(projectIndex, imageIndex) {
  lightboxState.projectIndex = projectIndex;
  lightboxState.imageIndex = imageIndex;
  ensureLightbox().hidden = false;
  document.body.classList.add("lightbox-open");
  updateLightbox();
}

function closeLightbox() {
  const lightbox = document.querySelector("#imageLightbox");
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
}

function stepLightbox(direction) {
  const project = content.projects[lightboxState.projectIndex];
  const media = projectMedia(project);
  lightboxState.imageIndex = (lightboxState.imageIndex + direction + media.length) % media.length;
  updateLightbox();
}

function updateLightbox() {
  const project = content.projects[lightboxState.projectIndex];
  const media = projectMedia(project);
  const lightbox = ensureLightbox();
  lightbox.querySelector(".lightbox-media").innerHTML = mediaMarkup(media[lightboxState.imageIndex], project.title, lightboxState.imageIndex);
  lightbox.querySelector("figcaption").textContent = `${project.title} · ${lightboxState.imageIndex + 1}/${media.length}`;
}

function handleLightboxKeys(event) {
  const lightbox = document.querySelector("#imageLightbox");
  if (!lightbox || lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") stepLightbox(-1);
  if (event.key === "ArrowRight") stepLightbox(1);
}

function renderSkills() {
  const grid = document.querySelector("#skillsGrid");
  if (!grid) return;

  grid.innerHTML = content.skillsList
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${group.title}</h3>
          <div class="tags">
            ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline(selector, items) {
  const timeline = document.querySelector(selector);
  if (!timeline) return;
  timeline.innerHTML = items.map(timelineItem).join("");
}

function renderPage() {
  setStaticText();
  renderProjects();
  renderSkills();
  renderTimeline("#academicResults", content.academics);
  renderTimeline("#cvHighlights", content.highlights);
  renderTimeline("#educationList", content.education);
  renderTimeline("#experienceList", content.experience);
  renderTimeline("#cvProjectsList", content.cvProjects);
  renderTimeline("#activitiesList", content.activities);
}

renderPage();
