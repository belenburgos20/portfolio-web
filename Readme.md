# Portfolio — Belén Burgos

Portfolio personal de **Belén Burgos**, desarrolladora full-stack (Bahía Blanca, Argentina).

🔗 **[portfolio-web-beryl-five.vercel.app](https://portfolio-web-beryl-five.vercel.app)**

---

## Qué es

Un sitio de una sola página que presenta cuatro proyectos desplegados. A diferencia
de una galería de capturas, cada proyecto incluye un **caso de estudio desplegable**
que responde tres preguntas concretas:

- ¿Qué problema real resuelve?
- ¿Por qué se eligió ese stack y no otro?
- ¿Qué desafíos técnicos aparecieron y cómo se resolvieron?

---

## Stack

| Capa | Tecnología | Por qué |
| --- | --- | --- |
| UI | React 18 + TypeScript | Componentes tipados; los datos del portfolio tienen un tipo que impide publicar un proyecto incompleto |
| Build | Vite 5 | Arranque en frío rápido y build con tree-shaking sin configuración |
| Estilos | Tailwind CSS | Sin hoja de estilos paralela que mantener; el CSS que no se usa no se compila |
| Deploy | Vercel | Despliegue automático en cada push a `main` |

Sin dependencias de terceros para animaciones ni para el ruteo: el sitio es una
sola página y las transiciones se resuelven con CSS y un `IntersectionObserver`.

---

## Puesta en marcha

```bash
npm install
npm run dev       # http://localhost:5173
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Verifica los tipos con `tsc` y compila a `dist/` |
| `npm run preview` | Sirve `dist/` para probar el build antes de publicar |

> `npm run build` corre `tsc` **antes** de Vite: un error de tipos frena el
> despliegue en vez de llegar a producción.

---

## Estructura

```
src/
├─ data/portfolio.ts     Todo el contenido del sitio, tipado (ver abajo)
├─ components/
│  ├─ Navbar.tsx         Navegación fija con sección activa y menú móvil
│  ├─ Hero.tsx           Presentación, rol y accesos directos
│  ├─ Projects.tsx       Tarjetas + caso de estudio desplegable
│  ├─ Skills.tsx         Stack por área y flujo de trabajo con IA
│  ├─ About.tsx          Trayectoria, formación y forma de trabajo
│  ├─ Contact.tsx        Formulario (mailto) y enlaces directos
│  └─ SectionLabel.tsx   Etiqueta compartida de encabezado de sección
└─ hooks/
   ├─ useScrollReveal.ts Aparición al entrar en viewport
   └─ useScrollSpy.ts    Marca en la navegación la sección visible
```

### Todo el contenido vive en un solo archivo

`src/data/portfolio.ts` concentra textos, proyectos, stack y datos de contacto,
con tipos explícitos (`Project`, `CaseStudy`, `Challenge`). Agregar un proyecto
es agregar un objeto: si falta el caso de estudio o el rol, no compila.

Los componentes no tienen texto hardcodeado, así que actualizar el portfolio no
implica tocar JSX.

---

## Decisiones de accesibilidad y rendimiento

- **`prefers-reduced-motion`**: quien configuró su sistema para reducir el
  movimiento no ve animaciones ni scroll suave (WCAG 2.3.3).
- **Navegación por teclado**: enlace "saltar al contenido", foco visible en todo
  elemento interactivo, menú móvil que cierra con `Escape` y expone
  `aria-expanded` / `aria-controls`.
- **Casos de estudio**: se ocultan con el atributo `hidden`, de modo que el
  lector de pantalla no anuncia contenido colapsado.
- **Imágenes**: `loading="lazy"` con `width`/`height` declarados para evitar
  saltos de layout mientras cargan.
- **Sin librerías de animación**: el bundle no carga JavaScript para efectos que
  el CSS ya resuelve.

---

## Despliegue

Cada push a `main` publica solo en Vercel. Sin variables de entorno: el sitio es
completamente estático.

---

## Licencia

El código es libre de consultar y usar como referencia. El contenido (textos,
imágenes y CV) es personal — si te sirve la estructura, adaptala con lo tuyo.
