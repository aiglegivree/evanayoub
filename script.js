const content = {
  en: {
    nav: {
      projects: "Projects",
      academics: "Academic Results",
      cv: "CV",
      contact: "Contact",
    },
    footer: "Built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.",
    documents: {
      cvEn: "CV PDF EN",
      cvFr: "CV PDF FR",
    },
    home: {
      hero: {
        eyebrow: "Robotics & Microengineering",
        title: "I build autonomous systems, electronics, and useful web tools.",
        text:
          "Master's student in Robotics at EPFL with a Data Science minor, focused on computer vision, embedded systems, PCB design, and applied machine learning.",
        primary: "View projects",
        secondary: "Open CV",
      },
      about: {
        label: "About",
        title: "Hi, I am Ayoub.",
        text:
          "I am a French and Lebanese engineer-in-training working at the intersection of robotics, electronics, and software. I like projects where perception, control, and clean interfaces meet in a real working system.",
      },
      projects: {
        label: "Selected Work",
        title: "Projects",
      },
      academics: {
        label: "Academic Results",
        title: "Education and results",
        transcript: "Open academic record",
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
        "Robotics Master's student at EPFL with a Data Science minor and a Microengineering Bachelor's degree. Interested in autonomous robotics, computer vision, embedded systems, and applied AI.",
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
      projects: { title: "Projects and awards" },
    },
    projects: [
      {
        title: "Robopoly Robotics Competition",
        description:
          "Winner of the EPFL Robopoly robotics competition with an autonomous robot based only on camera vision for line tracking, corridor tracking, and target shooting.",
        image: "assets/projects/project-1.svg",
        tags: ["Robotics", "Computer Vision", "Autonomy"],
        demoUrl: "assets/cv/CV_2026_en.pdf",
        sourceUrl: "https://github.com/aiglegivree",
      },
      {
        title: "Sola Project MPPT and Power Circuit",
        description:
          "Design and assembly of the power circuit PCB, including the maximum power point tracker for a solar aircraft within Sola Project.",
        image: "assets/projects/project-2.svg",
        tags: ["PCB", "Electronics", "Solar"],
        demoUrl: "assets/cv/CV_2026_en.pdf",
        sourceUrl: "https://github.com/aiglegivree",
      },
      {
        title: "Copycat Portfolios",
        description:
          "EPFL group project analyzing financial data, investment strategies, and whether political trades pay off, delivered with a demonstration website.",
        image: "assets/projects/project-3.svg",
        tags: ["Data Analysis", "Statistics", "Web"],
        demoUrl: "assets/cv/CV_2026_en.pdf",
        sourceUrl: "https://github.com/aiglegivree",
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
          "Built an autonomous camera-based robot for line tracking, corridor tracking, and target shooting.",
      },
      {
        date: "2024 - current",
        title: "Sola Project electronics",
        description:
          "Responsible for the power circuit PCB and MPPT of a solar aircraft project.",
      },
      {
        date: "2023 - current",
        title: "Tutoring and TA experience",
        description:
          "Tutor in mathematics, physics, and electronics; teaching assistant for electrical systems and mechanical physics courses.",
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
          "Tutor for students from elementary school to apprenticeship and gymnasium levels. TA for EPFL electrical and electronic systems and mechanical physics courses.",
      },
      {
        date: "April 2022",
        title: "Observation Internship - Shark Robotics",
        description:
          "Observation internship discovering the R&D work and organization of a robotics company.",
      },
      {
        date: "September 2020 - July 2022",
        title: "Programming and Mathematics Courses",
        description:
          "Introduced high school students to programming, especially Python, and applications of mathematics in code.",
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
          "Responsible for the design and assembly of the power circuit PCB, especially the maximum power point tracker for a solar aircraft.",
      },
      {
        date: "September 2025 - December 2025",
        title: "Copycat Portfolios - EPFL",
        description:
          "Financial data analysis, investment strategy selection, and demo website for the question: do political trades pay off?",
      },
      {
        date: "2022",
        title: "Competitions",
        description:
          "Participant in the General Mathematics Competition and winner of the Lions Club Physics Competition.",
      },
    ],
  },
  fr: {
    nav: {
      projects: "Projets",
      academics: "Résultats académiques",
      cv: "CV",
      contact: "Contact",
    },
    footer: "Construit avec HTML, CSS et JavaScript. Hébergé sur GitHub Pages.",
    documents: {
      cvEn: "CV PDF EN",
      cvFr: "CV PDF FR",
    },
    home: {
      hero: {
        eyebrow: "Robotique & Microtechnique",
        title: "Je construis des systèmes autonomes, de l'électronique et des outils web utiles.",
        text:
          "Étudiant en Master de Robotique à l'EPFL, avec une mineure en Data Science, intéressé par la vision par ordinateur, les systèmes embarqués, le design PCB et l'apprentissage automatique appliqué.",
        primary: "Voir les projets",
        secondary: "Ouvrir le CV",
      },
      about: {
        label: "À propos",
        title: "Bonjour, je suis Ayoub.",
        text:
          "Je suis un ingénieur en formation franco-libanais, à l'intersection de la robotique, de l'électronique et du logiciel. J'aime les projets où perception, contrôle et interfaces propres se rencontrent dans un système concret.",
      },
      projects: {
        label: "Sélection",
        title: "Projets",
      },
      academics: {
        label: "Résultats académiques",
        title: "Formation et résultats",
        transcript: "Ouvrir le relevé de notes",
      },
      cv: {
        label: "CV",
        title: "Expérience et compétences",
        text:
          "Projets de robotique, tutorat et assistanat, électronique embarquée, analyse de données et outils techniques.",
        link: "Ouvrir la page CV",
      },
      contact: {
        label: "Contact",
        title: "Construisons quelque chose d'utile.",
      },
    },
    cv: {
      label: "Curriculum Vitae",
      summary:
        "Étudiant en Master de Robotique à l'EPFL avec une mineure en Data Science et un Bachelor en Microtechnique. Intéressé par la robotique autonome, la vision par ordinateur, les systèmes embarqués et l'IA appliquée.",
      transcript: "Relevé de notes",
      contact: { title: "Contact" },
      skills: {
        title: "Compétences",
        technical:
          "Robotique mobile, vision par ordinateur, image processing, systèmes embarqués, design PCB.",
        programming:
          "Python, C/C++, OpenCV, NumPy, Pandas, Git, PyTorch, TensorFlow.",
        tools:
          "MATLAB, Webots, Catia, KiCad, LTspice, Codex, Raspberry Pi, Arduino.",
      },
      languages: {
        title: "Langues",
        items: "Français et libanais : langues maternelles. Anglais : C2. Espagnol : B2.",
      },
      education: { title: "Formation" },
      experience: { title: "Expérience" },
      projects: { title: "Projets et concours" },
    },
    projects: [
      {
        title: "Concours de robotique Robopoly",
        description:
          "Vainqueur du concours de robotique Robopoly à l'EPFL avec un robot autonome basé uniquement sur la vision par caméra, réalisant suivi de ligne, suivi de couloir et tir sur cible.",
        image: "assets/projects/project-1.svg",
        tags: ["Robotique", "Vision", "Autonomie"],
        demoUrl: "assets/cv/CV_2026_fr.pdf",
        sourceUrl: "https://github.com/aiglegivree",
      },
      {
        title: "Sola Project - MPPT et circuit de puissance",
        description:
          "Design et assemblage du PCB du circuit de puissance, notamment le maximum power point tracker pour un avion solaire au sein de Sola Project.",
        image: "assets/projects/project-2.svg",
        tags: ["PCB", "Electronique", "Solaire"],
        demoUrl: "assets/cv/CV_2026_fr.pdf",
        sourceUrl: "https://github.com/aiglegivree",
      },
      {
        title: "Copycat Portfolios",
        description:
          "Projet de groupe EPFL d'analyse statistique de données financières, choix de stratégie d'investissement et création d'un site de démonstration.",
        image: "assets/projects/project-3.svg",
        tags: ["Data", "Statistiques", "Web"],
        demoUrl: "assets/cv/CV_2026_fr.pdf",
        sourceUrl: "https://github.com/aiglegivree",
      },
    ],
    academics: [
      {
        date: "2025 - actuel",
        title: "EPFL - Master of Science in Robotics",
        description: "Mineure en Data Science.",
      },
      {
        date: "2022 - 2025",
        title: "EPFL - Bachelor en Microtechnique",
        description: "Résultat final : 5.00/6.",
      },
      {
        date: "2023 - 2024",
        title: "Aalto University - Année d'échange",
        description: "Année d'échange à Helsinki, Finlande.",
      },
      {
        date: "2019 - 2022",
        title: "Lycee Fenelon Notre Dame, La Rochelle",
        description:
          "Baccalauréat spécialités mathématiques, physique-chimie, numérique et sciences informatiques. Section européenne, mention Très Bien, moyenne : 17.03/20.",
      },
    ],
    highlights: [
      {
        date: "2025 - 2026",
        title: "Vainqueur du concours Robopoly",
        description:
          "Robot autonome basé sur la vision par caméra pour suivi de ligne, suivi de couloir et tir sur cible.",
      },
      {
        date: "2024 - actuel",
        title: "Électronique pour Sola Project",
        description:
          "Responsable du PCB du circuit de puissance et du MPPT d'un projet d'avion solaire.",
      },
      {
        date: "2023 - actuel",
        title: "Tutorat et assistanat",
        description:
          "Tutorat en mathématiques, physique et électronique; assistanat pour des cours de systèmes électriques et de physique mécanique.",
      },
    ],
    education: [
      {
        date: "Septembre 2025 - actuel",
        title: "Master of Science in Robotics - EPFL",
        description: "Mineure en Data Science.",
      },
      {
        date: "Août 2023 - Juillet 2024",
        title: "Année d'échange - Aalto University",
        description: "Échange académique à Helsinki, Finlande.",
      },
      {
        date: "Septembre 2022 - Juillet 2025",
        title: "Bachelor en Microtechnique - EPFL",
        description: "Résultat final : 5.00/6.",
      },
      {
        date: "Septembre 2019 - Juillet 2022",
        title: "Baccalauréat - Lycée Fénelon Notre Dame",
        description:
          "Spécialités mathématiques, physique-chimie, numérique et sciences informatiques. Section européenne, mention Très Bien, moyenne : 17.03/20.",
      },
    ],
    experience: [
      {
        date: "Septembre 2023 - actuel",
        title: "Tutorat et assistanat",
        description:
          "Tuteur pour des élèves de l'école élémentaire au gymnase et à l'apprentissage. Assistant pour les cours EPFL de systèmes électriques et électroniques et de physique mécanique.",
      },
      {
        date: "Avril 2022",
        title: "Stage d'observation - Shark Robotics",
        description:
          "Stage d'observation pour découvrir les activités de R&D et l'organisation d'une entreprise de robotique.",
      },
      {
        date: "Septembre 2020 - Juillet 2022",
        title: "Cours de programmation et de mathématiques",
        description:
          "Introduction à la programmation, notamment Python, et aux applications des mathématiques dans le code pour des lycéens.",
      },
    ],
    cvProjects: [
      {
        date: "Octobre 2025 - Juin 2026",
        title: "Concours de robotique Robopoly - EPFL",
        description:
          "Vainqueur du concours avec un robot autonome basé sur la vision par caméra pour suivi de ligne, suivi de couloir et tir sur cible.",
      },
      {
        date: "Mars 2024 - actuel",
        title: "Sola Project - MPPT et circuit de puissance",
        description:
          "Responsable du design et de l'assemblage du PCB du circuit de puissance, notamment le maximum power point tracker d'un avion solaire.",
      },
      {
        date: "Septembre 2025 - Décembre 2025",
        title: "Copycat Portfolios - EPFL",
        description:
          "Analyse de données financières, choix d'une stratégie d'investissement et site de démonstration autour de la question : do political trades pay off?",
      },
      {
        date: "2022",
        title: "Concours",
        description:
          "Participation au Concours Général de Mathématiques et vainqueur du concours de physique du Lions Club.",
      },
    ],
  },
};

const DEFAULT_LANGUAGE = "en";

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function getLanguage() {
  const savedLanguage = localStorage.getItem("language");
  return savedLanguage && content[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
}

function setStaticText(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getNestedValue(content[language], node.dataset.i18n);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-doc='cv-en']").forEach((node) => {
    node.textContent = content[language].documents.cvEn;
  });

  document.querySelectorAll("[data-doc='cv-fr']").forEach((node) => {
    node.textContent = content[language].documents.cvFr;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
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

function renderProjects(language) {
  const grid = document.querySelector("#projectsGrid");
  if (!grid) return;

  const demoLabel = language === "fr" ? "CV" : "CV";
  const codeLabel = language === "fr" ? "Code" : "Code";

  grid.innerHTML = content[language].projects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags" aria-label="Technologies used">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.demoUrl}" target="_blank" rel="noreferrer">${demoLabel}</a>
              <a href="${project.sourceUrl}" target="_blank" rel="noreferrer">${codeLabel}</a>
            </div>
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

function renderPage(language) {
  setStaticText(language);
  renderProjects(language);
  renderTimeline("#academicResults", content[language].academics);
  renderTimeline("#cvHighlights", content[language].highlights);
  renderTimeline("#educationList", content[language].education);
  renderTimeline("#experienceList", content[language].experience);
  renderTimeline("#cvProjectsList", content[language].cvProjects);
}

function bindLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.lang;
      localStorage.setItem("language", language);
      renderPage(language);
    });
  });
}

bindLanguageSwitch();
renderPage(getLanguage());
