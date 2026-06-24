export const personalInfo = {
  name: "Belén Burgos",
  role: "Full-Stack Developer",
  tagline: "Desarrolladora enfocada en crear aplicaciones reales y escalables.",
  location: "Bahía Blanca, Argentina",
  email: "belenburgos.dev@gmail.com",
  github: "https://github.com/belenburgos20",
  linkedin: "https://www.linkedin.com/in/bel%C3%A9n-burgos-1a5664394/",
  bio: [
    "Soy Técnica Universitaria en Programación (UTN) y desarrollo aplicaciones web full-stack con foco en arquitectura clara y experiencia de usuario cuidada.",
    "Busco mi primera experiencia profesional para aportar en proyectos reales, sumar buenas prácticas de equipo y seguir creciendo como desarrolladora.",
  ],
};

export const skills = [
  { name: "React", category: "frontend", level: "main" },
  { name: "TypeScript", category: "frontend", level: "main" },
  { name: "Node.js", category: "backend", level: "main" },
  { name: "Express", category: "backend", level: "main" },
  { name: "PostgreSQL", category: "backend", level: "main" },
  { name: "JWT", category: "backend", level: "main" },
  { name: "REST APIs", category: "backend", level: "main" },
  { name: "JavaScript", category: "frontend", level: "experience" },
  { name: "MySQL", category: "backend", level: "experience" },
  { name: "Git", category: "tools", level: "experience" },
  { name: "GitHub", category: "tools", level: "experience" },
  { name: "Vite", category: "tools", level: "experience" },
];

export const projects = [
  {
    id: 1,
    title: "Sistema Full-Stack",
    subtitle: "Proyecto Final UTN",
    description:
      "Aplicación web completa para gestión de clientes, productos y presupuestos. Arquitectura full-stack con panel de administración y portal de clientes.",
    highlights: [
      "Autenticación JWT con roles",
      "Panel admin + portal cliente",
      "Deploy en producción",
      "TypeScript end-to-end",
    ],
    preview: "/previews/sistema-fullstack.png",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    links: {
      code: "https://github.com/belenburgos20/Trabajo-Final-Backend",
      demo: "https://trabajo-final-frontend-j103.onrender.com",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Menú digital para bar",
    subtitle: "Proyecto para cliente",
    description:
      "Sitio web responsive con foco en experiencia de usuario. Diseñado con atención al detalle, performance y accesibilidad.",
    highlights: [
      "Diseño responsive mobile-first",
      "UX/UI cuidada",
      "Animaciones CSS",
      "Deploy en Vercel",
    ],
    preview: "/previews/ey-bar.png",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      code: "https://github.com/belenburgos20/bar",
      demo: "https://bar-three.vercel.app/",
    },
    featured: false,
  },
  {
    id: 3,
    title: "Vientos Patagónicos",
    subtitle: "Proyecto para cliente",
    description:
      "Sitio web responsive con foco en experiencia de usuario. Diseñado con atención al detalle, performance y accesibilidad.",
    highlights: [
      "Diseño responsive mobile-first",
      "UX/UI cuidada",
      "Animaciones CSS",
      "Deploy en Vercel",
    ],
    preview: "/previews/vientos-patagonicos.png",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      code: "https://github.com/belenburgos20/proyecto-vientos-patagonicos",
      demo: "https://proyecto-vientos-patagonicos.vercel.app",
    },
    featured: false,
  },
];

export const education = [
  {
    title: "Técnica Universitaria en Programación",
    institution: "UTN — Universidad Tecnológica Nacional",
    year: "2026",
    description:
      "Desarrollo web full-stack, algoritmos, bases de datos y arquitectura de software.",
  },
];

export const softSkills = [
  "Trabajo en equipo",
  "Resolución de problemas",
  "Buenas prácticas",
  "Aprendizaje continuo",
];
