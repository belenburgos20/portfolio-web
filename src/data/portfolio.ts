/**
 * Fuente única de contenido del portfolio.
 *
 * Los datos técnicos de cada caso de estudio salen de los repositorios reales
 * (package.json, README y esquema SQL de cada proyecto). Si cambiás un proyecto,
 * actualizá también su caso de estudio: en una entrevista te van a preguntar
 * por lo que está escrito acá.
 *
 * Buscá los comentarios `TODO(Belén)` para ver qué falta completar con datos
 * que solo vos tenés.
 */

export type Challenge = {
  /** El desafío, en una línea. */
  title: string;
  /** Cómo lo resolviste y por qué esa solución. */
  detail: string;
};

export type CaseStudy = {
  /** ¿Qué problema real resuelve? Nada de "es una app de X". */
  problem: string;
  /** ¿Por qué elegiste este stack y no otro? */
  stackRationale: string;
  /** Desafíos técnicos o de rendimiento, con su solución. */
  challenges: Challenge[];
  /** Qué quedó funcionando y qué aprendiste. */
  outcome: string;
};

export type ProjectStatus = "live" | "offline" | "wip";

export type Project = {
  id: string;
  title: string;
  /** Contexto en pocas palabras: cliente real, proyecto académico, etc. */
  subtitle: string;
  year: string;
  /** Tu rol concreto. Si fue en equipo, decilo y aclarás de qué te ocupaste. */
  role: string;
  status: ProjectStatus;
  /** Resumen de una o dos líneas para la tarjeta. */
  summary: string;
  preview: string;
  stack: string[];
  links: {
    demo?: string;
    code?: string;
    /** Segundo repo, cuando el proyecto está separado en front y back. */
    codeAlt?: { label: string; url: string };
  };
  featured: boolean;
  caseStudy: CaseStudy;
};

export const personalInfo = {
  name: "Belén Burgos",
  role: "Full-Stack Developer",
  /** Rol específico: evitá el "programadora todoterreno". */
  headline: "Full-Stack Developer · React + TypeScript + Node.js",
  tagline:
    "Construyo aplicaciones web que usan clientes reales: paneles de administración para que un negocio gestione sus datos sin depender de un desarrollador.",
  location: "Bahía Blanca, Argentina",
  email: "belenburgos.dev@gmail.com",
  github: "https://github.com/belenburgos20",
  linkedin: "https://www.linkedin.com/in/bel%C3%A9n-burgos-1a5664394/",
  /** URL de producción del portfolio, usada en los metadatos de SEO. */
  siteUrl: "https://portfolio-web-beryl-five.vercel.app",
  availability: "Abierta a propuestas · Remoto o híbrido",
  bio: [
    "Soy Técnica Universitaria en Programación (UTN) y desarrollo aplicaciones web full-stack con TypeScript de punta a punta.",
    "Trabajé con clientes reales de Bahía Blanca: un bar y una distribuidora de alimentos. En los dos casos el problema no era solo mostrar información, sino que el dueño pudiera mantenerla actualizado por su cuenta. Eso me llevó a construir paneles de administración con control de accesos, y a cuidar el peso de lo que descarga el usuario final.",
    "Busco mi primera experiencia profesional en un equipo donde pueda sumar, revisar código con gente con más recorrido y seguir creciendo.",
  ],
};

/**
 * Stack agrupado por área. Sin barras de porcentaje: cada tecnología listada
 * acá aparece en al menos un proyecto del portfolio y la podés defender.
 */
export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React 19",
      "TypeScript",
      "React Router",
      "TanStack Query",
      "Vite",
      "Tailwind CSS",
      "HTML semántico + CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend y datos",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize (ORM)",
      "Supabase",
      "APIs REST",
      "JWT + control de roles",
      "Row Level Security",
    ],
  },
  {
    id: "quality",
    label: "Calidad y testing",
    items: [
      "Jest + Supertest",
      "Vitest",
      "Testing Library",
      "ESLint",
      "Husky + lint-staged",
    ],
  },
  {
    id: "tools",
    label: "Herramientas y deploy",
    items: [
      "Git + GitHub",
      "Vercel",
      "Render",
      "Netlify",
      "Optimización de imágenes (sharp, AVIF/WebP)",
    ],
  },
] as const;

/**
 * Cómo trabajás con asistentes de IA. Los equipos ya dan por sentado que se usan;
 * lo que evalúan es si sabés validar lo que generan.
 *
 * TODO(Belén): reemplazá los nombres de herramientas por las que realmente usás
 * a diario. Si en la entrevista te preguntan "¿qué te corrigió la IA mal?",
 * tené un ejemplo concreto preparado.
 */
export const aiWorkflow = {
  intro:
    "Uso asistentes de IA como parte del flujo de trabajo, no como reemplazo del criterio técnico. Me hacen más rápida en lo repetitivo y me dejan tiempo para lo que importa: la arquitectura y la seguridad.",
  practices: [
    {
      title: "Dónde me acelera",
      detail:
        "Andamiaje de componentes, tipos a partir de un esquema SQL, tests iniciales y refactors mecánicos. Tareas donde el resultado es fácil de verificar de un vistazo.",
    },
    {
      title: "Qué reviso siempre a mano",
      detail:
        "Todo lo que toque autenticación, permisos o consultas a la base. En el menú digital, las políticas de Row Level Security las escribí y probé yo: un permiso mal puesto expone la base entera y no es algo que delegue.",
    },
    {
      title: "Cómo valido lo que genera",
      detail:
        "Si no puedo explicar línea por línea por qué el código funciona, no entra al repo. Contrasto contra la documentación oficial, corro los tests y reviso el diff completo antes de commitear.",
    },
  ],
};

export const projects: Project[] = [
  {
    id: "ey-menu",
    title: "Ey! — Menú digital con panel de administración",
    subtitle: "Cliente real · Ey! Bar y Copas",
    year: "2025",
    role: "Desarrollo full-stack completo (proyecto individual)",
    status: "live",
    summary:
      "Menú por QR para un bar, con panel propio para que el dueño edite precios, secciones y promos sin tocar código ni llamar a nadie.",
    preview: "/previews/ey-bar.png",
    stack: [
      "React 19",
      "TypeScript",
      "MongoDB Atlas",
      "TanStack Query",
      "Vite",
    ],
    links: {
      demo: "https://bar-three.vercel.app/",
      code: "https://github.com/belenburgos20/bar",
    },
    featured: true,
    caseStudy: {
      problem:
        "El bar tenía el menú en papel y un PDF desactualizado. Cada cambio de precio o promo dependía de que alguien externo editara el archivo, así que en la práctica no se actualizaba nunca. Necesitaban dos cosas a la vez: un menú que cargue rápido desde el celular del cliente en la mesa, y una forma de que el dueño lo edite él mismo.",
      stackRationale:
        "Elegí Supabase en lugar de levantar un backend propio: para un cliente chico, mantener un servidor con auth y permisos es un costo fijo que no se justifica, y Supabase ya trae PostgreSQL, autenticación y Row Level Security. React con TypeScript me permitió tipar el modelo reflejando las tablas reales, así un cambio en el esquema rompe la compilación en vez de romper el sitio en producción. Vite por el code-splitting, que terminó siendo clave para el rendimiento.",
      challenges: [
        {
          title: "El SDK de Supabase pesaba más que el menú",
          detail:
            "El cliente oficial ocupa alrededor de 55 KB comprimidos y arrastra auth, realtime y storage: nada de eso lo necesita alguien que escanea un QR para ver qué cerveza hay. Separé el acceso a datos en dos caminos. El menú público lee con cinco fetch directos a la API REST, sin SDK. El panel sí usa el cliente completo, y Vite lo aísla en su propio chunk que solo se descarga al entrar a /admin. El visitante que nunca abre el panel no paga ese peso.",
        },
        {
          title: "Imágenes de comida pesadas en conexiones móviles",
          detail:
            "Las fotos son lo que vende, pero también lo que hace lento al sitio en la red del bar. Armé un script con sharp que genera cada imagen en AVIF y WebP en varios tamaños, y el HTML sirve el formato que soporte el navegador. Para el fondo, que en monitores grandes se veía pixelado al escalar, apliqué un desenfoque suave por CSS arriba de 1600px en lugar de exigir una imagen enorme que penalizaría a todos los celulares.",
        },
        {
          title: "Las claves de la base son visibles en el navegador",
          detail:
            "La clave anónima de Supabase viaja en el bundle: cualquiera puede leerla desde las herramientas de desarrollo. Entender que eso es esperado y no una filtración fue el punto de partida. La protección real está en las políticas de Row Level Security: lectura pública sobre las tablas del menú, escritura únicamente si el usuario pasa la función is_admin(). Además cerré el registro público, de modo que ni siquiera creando una cuenta se puede escribir.",
        },
        {
          title: "Que un corte de servicio no deje la mesa sin menú",
          detail:
            "Si Supabase no responde, el cliente sentado en la mesa se queda mirando un error. Guardo la última copia del menú en el navegador y, ante un fallo de red, la muestro con un aviso visible de que puede estar desactualizada. Prefiero información de hace un rato que una pantalla vacía.",
        },
        {
          title: "Un panel que use alguien que no es técnico",
          detail:
            "El dueño no iba a recordar un usuario y una contraseña. El login pide solo contraseña: el email queda fijo en una variable de entorno y la sesión se renueva sola, así entra una vez y sigue dentro. Para ordenar el menú usé drag and drop con dnd-kit, porque arrastrar es más natural que escribir números de posición.",
        },
      ],
      outcome:
        "El bar actualiza su menú solo, sin intermediarios ni costos por cambio. El proyecto me obligó a razonar el rendimiento como una decisión de arquitectura y no como un ajuste final, y a entender que la seguridad en el cliente se resuelve en la base de datos, no escondiendo claves.",
    },
  },
  {
    id: "oleohidraulica",
    title: "Sistema de gestión de presupuestos",
    subtitle: "Proyecto final UTN · Taller Oleohidráulica Guardese",
    year: "2025",
    // TODO(Belén): fue un equipo de 4. Detallá de qué módulos te ocupaste vos
    // (¿los endpoints de presupuestos?, ¿el panel de productos?, ¿los tests?).
    // Un reclutador va a preguntar exactamente esto.
    role: "Desarrollo en equipo de 4 personas",
    status: "live",
    summary:
      "Aplicación de gestión para un taller de repuestos viales y agropecuarios: productos, clientes y presupuestos exportables a PDF, con accesos por rol.",
    preview: "/previews/sistema-fullstack.png",
    stack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "JWT",
    ],
    links: {
      demo: "https://trabajo-final-frontend-j103.onrender.com",
      code: "https://github.com/belenburgos20/Trabajo-Final-Backend",
      codeAlt: {
        label: "Repo frontend",
        url: "https://github.com/belenburgos20/Trabajo-Final-Frontend",
      },
    },
    featured: true,
    caseStudy: {
      problem:
        "El taller armaba los presupuestos a mano, en planillas. Cada uno había que rehacerlo desde cero, los precios de los repuestos quedaban desactualizados y no había registro de qué se le había cotizado a cada cliente. El sistema centraliza productos, clientes y presupuestos, y genera el PDF listo para enviar.",
      stackRationale:
        "TypeScript de punta a punta para compartir los tipos entre la API y el frontend: si cambia la forma de un presupuesto, el error aparece al compilar y no cuando el cliente abre el PDF. Sequelize sobre PostgreSQL porque el dominio tiene relaciones claras (un presupuesto tiene muchos detalles, cada detalle apunta a un producto) y el ORM nos dio esos modelos tipados sin escribir SQL a mano para cada consulta.",
      challenges: [
        {
          title: "Generar los presupuestos en PDF",
          detail:
            "El documento tenía que salir con el formato del taller, no una tabla genérica. Lo resolvimos con pdf-lib, componiendo el documento desde los datos del presupuesto, y file-saver del lado del cliente para la descarga. Lo interesante fue separar bien la responsabilidad: el PDF es una representación de los datos, no la fuente de verdad.",
        },
        {
          title: "Que cada rol vea solo lo suyo",
          detail:
            "Administración necesita tocar precios y productos; un usuario del portal solo debería ver sus propios presupuestos. Implementamos autenticación con JWT y middleware de autorización por rol en la API. La regla que seguimos fue no confiar nunca en el frontend: ocultar un botón es cosmético, la verificación tiene que estar en el endpoint.",
        },
        {
          title: "La base se caía en producción",
          detail:
            "Desplegado en Render, el backend cortaba la conexión con PostgreSQL de forma intermitente. Rastreando el error resultó ser la diferencia entre la URL interna y la externa de la base: la externa exige SSL y sale a internet. Pasamos a la URL interna, dejamos la configuración de SSL automática para el caso externo, y lo documentamos en el README junto con los comandos de inicialización, para que cualquiera del equipo pudiera desplegarlo.",
        },
        {
          title: "Coordinar código entre cuatro personas",
          detail:
            "Sumamos ESLint con Husky y lint-staged, de modo que el formato y las reglas se aplican solos antes de cada commit y dejamos de discutir estilo en las revisiones. Del lado de la API escribimos tests de endpoints con Jest y Supertest, y del lado del frontend tests de componentes con Vitest y Testing Library.",
        },
      ],
      outcome:
        "Fue mi primer proyecto trabajando contra los requerimientos de un cliente real y coordinando con otras tres personas sobre el mismo repositorio. Lo que más me llevé no fue una tecnología puntual, sino cuánto ayuda acordar convenios y automatizarlos antes de escribir código.",
    },
  },
  {
    id: "distribuidora",
    title: "E-commerce de distribución de alimentos",
    subtitle: "Cliente real · JA Distribuidora",
    year: "2026",
    // TODO(Belén): confirmá si trabajaste sola o con alguien más.
    role: "Desarrollo full-stack",
    status: "live",
    summary:
      "Catálogo y pedidos para una distribuidora mayorista de alimentos, con panel para administrar productos, precios y stock.",
    preview: "/previews/distribuidora.png",
    // TODO(Belén): el repositorio github.com/belenburgos20/proyecto-distribuidora
    // devuelve 404 (está privado o cambió de nombre). Mientras tanto saqué el
    // enlace para que no haya links rotos. Cuando lo hagas público, agregá acá:
    //   code: "https://github.com/belenburgos20/<nombre-real>",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    links: {
      demo: "https://ja-distribuidora.vercel.app/",
    },
    featured: false,
    caseStudy: {
      // TODO(Belén): este caso de estudio está escrito con lo que se deduce del
      // stack y de la demo. Reemplazá lo que no coincida con lo que realmente
      // pasó. Sobre todo: ¿cuál fue el problema puntual del cliente y qué te
      // costó más resolver?
      problem:
        "Una distribuidora mayorista que tomaba los pedidos por WhatsApp y teléfono. El catálogo con precios circulaba en imágenes que quedaban viejas enseguida, y cada pedido había que transcribirlo a mano. El sitio ordena el catálogo en un solo lugar actualizado y deja que el cliente arme su pedido.",
      stackRationale:
        "Repetí el stack del sistema de gestión (React con TypeScript sobre una API en Node y Express con PostgreSQL) porque el dominio es parecido: catálogo, usuarios con distintos permisos y operaciones sobre pedidos. Conocer bien un stack y saber por qué cada pieza está ahí me parece más valioso que sumar una tecnología nueva a cada proyecto.",
      challenges: [
        {
          title: "Precios mayoristas según el tipo de cliente",
          detail:
            "En una distribuidora el precio no es uno solo: depende de quién compra y de cuánto. Modelé eso en la base en vez de resolverlo en el frontend, para que el precio que se muestra y el que se guarda en el pedido salgan siempre de la misma fuente.",
        },
        {
          title: "Separar el catálogo público de la administración",
          detail:
            "Cualquiera puede navegar el catálogo, pero solo el personal de la distribuidora modifica productos y precios. Autenticación con JWT y verificación de rol en cada endpoint que escribe, siguiendo el mismo criterio que en el sistema del taller: el control vive en la API.",
        },
      ],
      outcome:
        "Segundo proyecto con un cliente real y primera vez que reutilicé decisiones de arquitectura de un proyecto anterior a conciencia, en lugar de empezar de cero.",
    },
  },
  {
    id: "vientos-patagonicos",
    title: "Vientos Patagónicos",
    subtitle: "Cliente real · sitio institucional",
    year: "2025",
    role: "Diseño y desarrollo frontend",
    // El deploy anterior (proyecto-vientos-patagonicos.vercel.app) responde 404.
    // TODO(Belén): es un sitio estático, volver a desplegarlo en Vercel es
    // cuestión de minutos. Cuando lo hagas, poné el status en "live" y agregá
    // la URL en links.demo.
    status: "offline",
    summary:
      "Sitio institucional responsive construido con HTML, CSS y JavaScript, sin frameworks ni dependencias.",
    preview: "/previews/vientos-patagonicos.png",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      code: "https://github.com/belenburgos20/proyecto-vientos-patagonicos",
    },
    featured: false,
    caseStudy: {
      problem:
        "Un sitio de presentación para un negocio que no tenía presencia web. El requisito real era que cargara rápido y se viera bien en el celular, que es desde donde llega casi todo el tráfico.",
      stackRationale:
        "HTML, CSS y JavaScript sin frameworks, a propósito. Para un sitio de pocas páginas y contenido estático, montar React implica enviar un runtime que no aporta nada: el usuario descargaría más para ver lo mismo. Saber cuándo no usar una herramienta también es parte de elegir el stack.",
      challenges: [
        {
          title: "Diseño responsive sin librerías de CSS",
          detail:
            "Resolví la maquetación con Flexbox y Grid y unidades relativas, partiendo del layout de celular y ampliando hacia escritorio. Sin Bootstrap ni Tailwind, lo que me obligó a entender el modelo de caja y los puntos de quiebre en vez de copiar clases.",
        },
      ],
      outcome:
        "Es el proyecto más simple del portfolio y lo dejo a propósito: muestra que puedo escribir CSS desde cero y que elijo la herramienta según el problema. Está pendiente volver a desplegarlo.",
    },
  },
  {
    id: "Servicio de electricidad",
    title: "Servicio de electricidad",
    subtitle: "Cliente real · sitio institucional",
    year: "2025",
    role: "Diseño y desarrollo frontend",
    status: "offline",
    summary:
      "Sitio institucional responsive construido con HTML, CSS y JavaScript, sin frameworks ni dependencias.",
    preview: "/previews/brosbe-electricidad.png",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      code: "https://github.com/belenburgos20/proyecto-brosbe",
      demo: "https://brosbe.vercel.app/",
    },
    featured: false,
    caseStudy: {
      problem:
        "Un sitio de presentación para un negocio que no tenía presencia web. El requisito real era que cargara rápido y se viera bien en el celular, que es desde donde llega casi todo el tráfico.",
      stackRationale:
        "HTML, CSS y JavaScript sin frameworks, a propósito. Para un sitio de pocas páginas y contenido estático, montar React implica enviar un runtime que no aporta nada: el usuario descargaría más para ver lo mismo. Saber cuándo no usar una herramienta también es parte de elegir el stack.",
      challenges: [
        {
          title: "Diseño responsive sin librerías de CSS",
          detail:
            "Resolví la maquetación con Flexbox y Grid y unidades relativas, partiendo del layout de celular y ampliando hacia escritorio. Sin Bootstrap ni Tailwind, lo que me obligó a entender el modelo de caja y los puntos de quiebre en vez de copiar clases.",
        },
      ],
      outcome:
        "Es el proyecto más simple del portfolio y lo dejo a propósito: muestra que puedo escribir CSS desde cero y que elijo la herramienta según el problema. Está pendiente volver a desplegarlo.",
    },
  },
];

export const education = [
  {
    title: "Técnica Universitaria en Programación",
    institution: "UTN — Universidad Tecnológica Nacional",
    year: "2026",
    description:
      "Desarrollo web full-stack, algoritmos, bases de datos y arquitectura de software. Proyecto final: sistema de gestión para un cliente real, en equipo de cuatro personas.",
  },
];

/**
 * Habilidades blandas redactadas como evidencia, no como adjetivos.
 * "Trabajo en equipo" no dice nada; "coordiné un repo con 3 compañeros" sí.
 */
export const workingStyle = [
  {
    title: "Trabajo con clientes no técnicos",
    detail:
      "Traduzco un pedido en lenguaje de negocio a decisiones técnicas, y construyo pensando en que el dueño mantenga su sitio sin depender de mí.",
  },
  {
    title: "Colaboración sobre un mismo repositorio",
    detail:
      "Coordiné el proyecto final con tres compañeros: convenciones de código automatizadas, revisión de cambios y ramas.",
  },
  {
    title: "Rendimiento como decisión temprana",
    detail:
      "Mido lo que descarga el usuario final y elijo en función de eso, en lugar de optimizar al final cuando ya es caro cambiar.",
  },
  {
    title: "Documentación para quien viene después",
    detail:
      "Escribo READMEs que explican el porqué de cada decisión, no solo los comandos para levantar el proyecto.",
  },
];
