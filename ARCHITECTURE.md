# AhsanSium React Portfolio — Architecture Documentation

Personal portfolio of **Ahsanul Haque (Ahsan Sium)**, a Full Stack Developer. Built with React 19, Vite, and a custom cyberpunk design system. Hosted on Firebase.

**Live site:** https://ahsan-sium1.web.app/

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Routing](#routing)
4. [Component Architecture](#component-architecture)
5. [Design System](#design-system)
6. [Data Flow & State Management](#data-flow--state-management)
7. [External Integrations](#external-integrations)
8. [Assets](#assets)
9. [SEO & Performance](#seo--performance)
10. [Build & Deployment](#build--deployment)
11. [Development Setup](#development-setup)

---

## Tech Stack

### Core

| Package | Version | Purpose |
|---|---|---|
| `react` | 19.2.4 | UI library |
| `react-dom` | 19.2.4 | Client-side rendering |
| `react-router-dom` | 7.13.1 | SPA routing |
| `vite` | 7.1.12 | Bundler and dev server |
| `@vitejs/plugin-react` | 5.2.0 | React JSX fast-refresh support |

### Styling

| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | 4.x | Utility-first CSS framework |
| `bootstrap` | 5.3.8 | Grid system, carousel, navbar components |
| `postcss` | 8.x | CSS processing pipeline |

### UI & Animation

| Package | Version | Purpose |
|---|---|---|
| `@fortawesome/fontawesome-svg-core` | 7.2.0 | SVG icon engine |
| `@fortawesome/react-fontawesome` | 7.2.0 | React icon component |
| `@fortawesome/free-solid-svg-icons` | 7.2.0 | Solid icon set |
| `@fortawesome/free-brands-svg-icons` | 7.2.0 | Brand logos (GitHub, LinkedIn, etc.) |
| `react-circular-progressbar` | 2.2.0 | Circular skill proficiency visualizations |
| `react-countup` | 6.5.3 | Animated number counters |

### Forms & Communication

| Package | Version | Purpose |
|---|---|---|
| `react-hook-form` | 7.71.2 | Form state management and validation |
| `@emailjs/browser` | 4.4.1 | Serverless email delivery via EmailJS |

### Testing

| Package | Version | Purpose |
|---|---|---|
| `vitest` | 3.2.4 | Unit test runner |
| `@testing-library/react` | 16.3.2 | React component testing utilities |
| `jsdom` | 27.1.0 | DOM simulation for tests |

### Monitoring & Infrastructure

| Package | Version | Purpose |
|---|---|---|
| `web-vitals` | 5.1.0 | Core Web Vitals performance metrics |
| `firebase` | (hosting) | Static site hosting |

---

## Project Structure

```
AhsanSium-React-Portfolio/
│
├── public/                          # Static assets served at root
│   ├── index.html                   # (Vite uses root index.html instead)
│   ├── Ahsan Sium.ico               # Primary favicon
│   ├── Ahsan Sium2.ico              # Alternate favicon
│   ├── Ahsan.png                    # Open Graph / social share image
│   ├── logo192.png                  # PWA icon (192px)
│   ├── logo512.png                  # PWA icon (512px)
│   ├── manifest.json                # PWA web app manifest
│   ├── robots.txt                   # Search engine crawling rules
│   └── sitemap.xml                  # URL index for SEO
│
├── src/
│   ├── Components/
│   │   ├── Home/                    # Landing page — all homepage sections
│   │   │   ├── Home.js              # Container; renders all 8 sub-sections in order
│   │   │   ├── HeaderMain/
│   │   │   │   └── HeaderMain.js    # Hero: profile image, animated role rotator, CTA buttons
│   │   │   ├── Intro/
│   │   │   │   ├── Intro.js         # Stats section: animated counters, social links, hex boxes
│   │   │   │   └── Intro.css        # Counter animation styles
│   │   │   ├── Skills/
│   │   │   │   ├── Skills.js        # Infinite marquee scroller — two rows, opposite directions
│   │   │   │   ├── Skills.css       # Marquee keyframes and mask
│   │   │   │   └── SkillDetails.js  # Individual skill chip with hover tooltip
│   │   │   ├── Programming/
│   │   │   │   ├── Programming.js   # Language proficiency (circular bars) + tools grid
│   │   │   │   └── Programming.css  # Hover glow effects
│   │   │   ├── MyProjects/
│   │   │   │   └── MyProjects.js    # Featured projects — shows first 3 from ProjectData
│   │   │   ├── ContactMe/
│   │   │   │   └── ContactMe.js     # Glass-panel wrapper that embeds the Contact form
│   │   │   ├── ClientsSay/
│   │   │   │   └── ClientsSay.js    # Bootstrap carousel with 3 client testimonials
│   │   │   └── MyBlog/
│   │   │       └── MyBlog.js        # 3 blog preview cards (placeholder — "Coming Soon")
│   │   │
│   │   ├── AboutMe/
│   │   │   └── About.js             # Full about page: grouped skills, education, contact info
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.js          # All 6 projects listing page
│   │   │   ├── ProjectData.js       # Central data array — single source of truth for projects
│   │   │   └── ProjectDetails/
│   │   │       └── ProjectDetails.js # Bootstrap carousel card: 3 images, description, links
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.js           # EmailJS form with React Hook Form validation
│   │   │   └── ContactPage.js       # Full contact page layout wrapping Contact.js
│   │   │
│   │   ├── Blog/
│   │   │   └── Blog.js              # Blog page (currently "Coming Soon" state)
│   │   │
│   │   └── Shared/
│   │       ├── NavBarMain/
│   │       │   ├── TopMenu.js       # Sticky nav wrapper
│   │       │   └── TopNavbar.js     # Nav links, active route highlighting, scroll transparency
│   │       ├── Footer/
│   │       │   └── Footer.js        # Footer: nav links, social icons, copyright
│   │       └── ScrollToTop/
│   │           └── ScrollToTop.js   # useEffect — scrolls to top on every route change
│   │
│   ├── Firebaseconfig/
│   │   └── firebase-config.js       # Firebase app initialization
│   │
│   ├── images/                      # ~67 static image assets (see Assets section)
│   │
│   ├── App.js                       # BrowserRouter + all route definitions
│   ├── App.css                      # App-level CSS resets
│   ├── index.jsx                    # Entry point — renders <App /> in StrictMode
│   └── index.css                    # Global design tokens, animations, utility classes
│
├── index.html                       # HTML template — SEO metadata, OG tags, JSON-LD
├── vite.config.js                   # Vite config: React plugin, JSX loader, test environment
├── postcss.config.js                # PostCSS config: Tailwind CSS v4 plugin
├── package.json                     # Dependencies, scripts, engines (Node 24.x)
├── .nvmrc                           # Node version pin: 24
├── firebase.json                    # Firebase hosting: SPA rewrites (all routes → index.html)
├── .firebaserc                      # Firebase project alias: ahsan-sium1
└── .firebase/                       # Firebase CLI cache (not committed)
```

---

## Routing

Configured in `src/App.js` using React Router DOM v7 `BrowserRouter`.

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Default landing page with all sections |
| `/home` | `Home` | Alias for `/` |
| `/about` | `About` | Full about page with skills grouped by proficiency |
| `/projects` | `Projects` | All 6 projects listing |
| `/contact` | `ContactPage` | Standalone contact form page |
| `/blog` | `Blog` | Blog articles (currently "Coming Soon") |
| `/*` | *(inline)* | 404 Not Found fallback |

`ScrollToTop` is rendered inside the router and runs `window.scrollTo(0, 0)` on every `location` change.

---

## Component Architecture

### Hierarchy

```
App (BrowserRouter)
├── TopMenu → TopNavbar          # Sticky navigation (all routes)
├── ScrollToTop                  # Auto-scroll utility (all routes)
│
├── Route: / or /home → Home
│   ├── HeaderMain               # Hero section
│   ├── Intro                    # Animated stats counters
│   │   └── AnimatedCounter (×4) # Sub-component for each stat
│   ├── Skills                   # Marquee skills scroller
│   │   └── MarqueeRow (×2)      # Directional marquee strip
│   │       └── SkillDetails (×n)# Individual skill chip + tooltip
│   ├── Programming              # Language progress bars + tools grid
│   ├── MyProjects               # Featured 3 projects
│   │   └── MyProjectDetails     # Single project card
│   ├── ContactMe                # Glass-panel contact form wrapper
│   │   └── Contact              # EmailJS form
│   ├── ClientsSay               # Testimonials Bootstrap carousel
│   └── MyBlog                   # Blog preview cards
│
├── Route: /about → About
├── Route: /projects → Projects
│   └── ProjectDetails (×n)      # Bootstrap carousel per project
├── Route: /contact → ContactPage
│   └── Contact                  # EmailJS form
├── Route: /blog → Blog
└── Footer                       # All routes
```

### Component Reference

| Component | File | Purpose | Key Features |
|---|---|---|---|
| `Home` | `Components/Home/Home.js` | Landing page container | Renders all 8 home sections in sequence |
| `HeaderMain` | `Home/HeaderMain/HeaderMain.js` | Hero section | Role rotation every 2.2s, profile image with load state, tech tags |
| `Intro` | `Home/Intro/Intro.js` | Stats section | 4 animated counters (react-countup + IntersectionObserver), social link icons |
| `Skills` | `Home/Skills/Skills.js` | Marquee scroller | Data tripled for seamless loop, two rows going opposite directions, pause-on-hover |
| `SkillDetails` | `Home/Skills/SkillDetails.js` | Individual skill chip | Hover tooltip with description |
| `Programming` | `Home/Programming/Programming.js` | Proficiency + tools | react-circular-progressbar for 8 languages, icon grid for 8 tools |
| `MyProjects` | `Home/MyProjects/MyProjects.js` | Featured projects | Slices first 3 from `ProjectData`, renders `MyProjectDetails` |
| `ContactMe` | `Home/ContactMe/ContactMe.js` | Contact form wrapper | Glassmorphism panel, embeds `Contact` |
| `Contact` | `Contact/Contact.js` | Email form | react-hook-form validation, EmailJS submission, 5s success message |
| `ClientsSay` | `Home/ClientsSay/ClientsSay.js` | Testimonials | Bootstrap carousel, 3 client cards |
| `MyBlog` | `Home/MyBlog/MyBlog.js` | Blog preview | 3 article cards with image zoom on hover |
| `About` | `AboutMe/About.js` | About page | Skills grouped by proficiency level, education, contact info |
| `Projects` | `Projects/Projects.js` | All projects | Maps all 6 items from `ProjectData` |
| `ProjectDetails` | `Projects/ProjectDetails/ProjectDetails.js` | Single project card | Bootstrap carousel (3 images), tech tags, live/client/server links |
| `ContactPage` | `Contact/ContactPage.js` | Contact page layout | Wraps `Contact` with page heading |
| `Blog` | `Blog/Blog.js` | Blog page | Placeholder "Coming Soon" state |
| `TopNavbar` | `Shared/NavBarMain/TopNavbar.js` | Navigation | `useLocation` for active route, scroll listener for transparency effect |
| `Footer` | `Shared/Footer/Footer.js` | Footer | Nav links, social icons (Font Awesome brands), copyright |
| `ScrollToTop` | `Shared/ScrollToTop/ScrollToTop.js` | Scroll utility | `useEffect` + `useLocation` — scrolls to top on route change |

---

## Design System

### Color Palette

Defined as CSS custom properties in `src/index.css`:

| Variable | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#080d1a` | Page background (deep navy) |
| `--bg-secondary` | `#0f1629` | Section backgrounds |
| `--bg-card` | `#111827` | Card and panel backgrounds |
| `--accent-cyan` | `#00d4ff` | Primary accent — links, active states, glows |
| `--accent-purple` | `#7b2fff` | Secondary accent — gradients, tags |
| `--accent-green` | `#00ff88` | Tertiary accent — stat counters, success states |
| `--accent-pink` | `#ff0080` | Quaternary accent — used in stat boxes |
| `--text-primary` | `#e2e8f0` | Main body text |
| `--text-muted` | `#64748b` | Secondary/subdued text |

### Typography

| Variable | Value | Usage |
|---|---|---|
| `--font-body` | `'Inter'` (Google Fonts) | All body text |
| `--font-mono` | `'JetBrains Mono'` (Google Fonts) | Code snippets, role indicator, stat labels |

### Key Visual Patterns

**Glassmorphism** — used on cards and panels:
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
```

**Cyber gradient** — used on text and borders:
```css
background: linear-gradient(135deg, #00d4ff 0%, #7b2fff 100%);
```

**Glow shadows:**
```css
--shadow-glow-cyan:   0 0 20px rgba(0, 212, 255, 0.3);
--shadow-glow-purple: 0 0 20px rgba(123, 47, 255, 0.3);
```

**Grid background** — subtle dot grid on hero section:
```css
background-image: radial-gradient(circle, rgba(0,212,255,0.08) 1px, transparent 1px);
background-size: 40px 40px;
```

### CSS Architecture

| Layer | Files | Scope |
|---|---|---|
| Global tokens & animations | `src/index.css` | Site-wide variables, keyframes, resets, scrollbar styling |
| Component styles | `Skills.css`, `Intro.css`, `Programming.css` | Isolated per-component animation/layout rules |
| Inline styles | Component `style={{}}` props | Dynamic values (hover states, computed colors, responsive sizing) |
| Bootstrap classes | All components | Grid (`row`, `col-*`), carousel, navbar, forms |
| Tailwind utilities | Sparse usage | Flexbox alignment, spacing — Bootstrap is preferred |

### Animations

| Animation | Technique | Duration | Location |
|---|---|---|---|
| Marquee scroll (skills) | CSS `@keyframes marquee-left/right` | 32s linear infinite | `Skills.css`, `index.css` |
| Role text rotation | `setInterval` + `useState(roleIndex)` | 2.2s per role | `HeaderMain.js` |
| Stat counters | `react-countup` + IntersectionObserver | 2.5s ease | `Intro.js` |
| Circular progress bars | `react-circular-progressbar` transition | 1s | `Programming.js` |
| Cursor blink | CSS `@keyframes blink` step-end | 1s | `index.css` |
| Hover card glow | CSS `transition` + `onMouseEnter/Leave` | 0.2–0.4s | Most components |
| Image zoom | `transform: scale(1.05)` on hover | 0.4s ease | `MyBlog.js` |
| Testimonial carousel | Bootstrap JS carousel | 5s auto-advance | `ClientsSay.js` |

Marquee seamlessness is achieved by tripling the data array and animating `-33.333%` translateX:
```javascript
// Skills.js
const tripled = [...items, ...items, ...items];
```
Edge flicker is masked with:
```css
mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
```

---

## Data Flow & State Management

### Principles

- **No global state library** — no Redux, no Zustand, no Context API
- All state is component-local via `useState`
- Data is co-located with the component that consumes it (skills arrays, testimonials, etc.)
- One exception: `ProjectData.js` is a centralized data module

### Centralized Data: ProjectData

`src/Components/Projects/ProjectData.js` exports an array of 6 project objects. Both `MyProjects.js` (slice of 3) and `Projects.js` (all 6) import from this single source.

```javascript
// ProjectData shape
{
  id: 1,
  name: 'Project Name',
  img1: imgRef, img2: imgRef, img3: imgRef,
  description: '...',
  features: ['feature1', ...],
  technology: 'React, Node.js, MongoDB',
  liveSite: 'https://...',
  codeClient: 'https://github.com/...',
  codeServer: 'https://github.com/...',
}
```

### Common Hook Patterns

**Scroll-triggered counter** (Intro.js):
```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { reset(); start(); } },
    { threshold: 0.4 }
  );
  observer.observe(elementRef.current);
  return () => observer.disconnect();
}, [start, reset]);
```

**Role rotator** (HeaderMain.js):
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    setRoleIndex(prev => (prev + 1) % roles.length);
  }, 2200);
  return () => clearInterval(timer);
}, []);
```

**Active route detection** (TopNavbar.js):
```javascript
const location = useLocation();
const isActive = (path) => location.pathname === path;
```

### Props Flow

Data passes one level deep. `ProjectData` array is imported directly; no prop drilling beyond parent → child (e.g., `Projects.js` passes a single `data` object to `ProjectDetails`).

---

## External Integrations

### Firebase

| Property | Value |
|---|---|
| Project ID | `ahsan-sium1` |
| Hosting URL | `https://ahsan-sium1.web.app/` |
| Config file | `src/Firebaseconfig/firebase-config.js` |
| Deployment config | `firebase.json` |

Firebase Hosting is configured with SPA rewrites — all URL paths redirect to `index.html` so client-side routing handles navigation:
```json
{ "rewrites": [{ "source": "**", "destination": "/index.html" }] }
```

### EmailJS

Contact form delivers messages to `ahsanulhaquesium@gmail.com` via EmailJS (no backend required).

| Property | Value |
|---|---|
| Public Key | `user_3ZA6c1NOdo6f2Hp6nTTA2` |
| Service ID | `service_frjy9ki` |
| Template ID | `template_d92v7na` |
| Used in | `src/Components/Contact/Contact.js` |

### Social & External Links

| Platform | URL |
|---|---|
| GitHub | https://github.com/AhsanSium |
| LinkedIn | https://www.linkedin.com/in/ahsan-sium/ |
| Twitter | https://twitter.com/ahsan_sium |
| Facebook | https://www.facebook.com/ahsan.sium |
| Instagram | https://www.instagram.com/ahsanulhaque039/ |
| Resume (Google Drive) | https://drive.google.com/file/d/1qIVaSMXn708Cyd87ISc8gTe0I3mlrXq6/view |

---

## Assets

### `src/images/` (~67 files)

| Category | Examples |
|---|---|
| Tech icons (SVG/PNG) | `golang.svg`, `postgresql.svg`, `docker.svg`, `react.png`, `nodejs.png`, `mongodb.png`, `express.png`, `php.svg` |
| Dev tool icons | `git.png`, `vscode.png`, `firebase.png`, `heroku.png`, `netlify.png`, `chromedevtool.png` |
| Project screenshots | `yacht1.png`–`yacht3.png`, `phonomania1–3.png`, `wordpress1–3.png`, `transport1–3.png`, `ucl1–3.png` |
| Profile photos | `ahsan_profile.png`, `ahsan-sium-passport-photo.jpg`, `Ahsan2.png` |
| Client testimonials | `client1.jpg`, `client2.jpg`, `client3.jpg` |
| Blog article images | `blog1.jpeg`, `blog2.jpeg`, `blog3.jpeg` |
| Logo variants | `Ahsan Sium` logo in multiple PNG formats |

### `public/`

| File | Purpose |
|---|---|
| `Ahsan Sium.ico` | Browser tab favicon |
| `Ahsan.png` | Open Graph share image |
| `manifest.json` | PWA web app manifest |
| `robots.txt` | Crawler rules (allows all, references sitemap) |
| `sitemap.xml` | URL map for search engine indexing |
| `logo192.png`, `logo512.png` | PWA homescreen icons |

---

## SEO & Performance

### HTML Metadata (`index.html`)

- `<title>` and `<meta name="description">` for search results
- `<meta name="keywords">` with relevant terms
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- Canonical URL link
- JSON-LD structured data (Schema.org `Person` type) for rich search results

### Crawling & Indexing

- `robots.txt` permits all crawlers and references `sitemap.xml`
- `sitemap.xml` lists all 5 public URLs with `<lastmod>` and `<changefreq>`

### Performance

- `web-vitals` library is imported in `index.jsx` for Core Web Vitals reporting
- Vite build: automatic code splitting, asset minification, and hashing
- Images are imported as static assets (Vite processes them for cache-busting)

---

## Build & Deployment

### npm Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `vite` | Start dev server with HMR at `localhost:5173` |
| `build` | `vite build` | Production build → `/dist` |
| `preview` | `vite preview` | Local preview of `/dist` build |
| `test` | `vitest` | Run unit tests with Vitest |

### Vite Configuration (`vite.config.js`)

- Plugin: `@vitejs/plugin-react` (Babel fast-refresh)
- JSX loader configured for `.js` files as well as `.jsx`
- Test environment: `jsdom` (for Testing Library compatibility)

### Firebase Deployment

```bash
firebase deploy
```

This uploads `/dist` to Firebase Hosting under project `ahsan-sium1`.

### Node Requirement

Node 24.x is required. The version is pinned in `.nvmrc`:
```
24
```

---

## Development Setup

### Prerequisites

- Node.js 24.x (use `nvm use` if you have nvm installed)
- npm

### Quick Start

```bash
# Clone
git clone https://github.com/AhsanSium/AhsanSium-React-Portfolio.git
cd AhsanSium-React-Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → Opens at http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # verify build locally before deploying
```

### Deploy to Firebase

```bash
npm run build
firebase deploy
```

### Environment Notes

- No `.env` file is required for local development
- EmailJS public key and Firebase config are embedded directly in source (safe for client-side use)
- Firebase CLI must be installed and authenticated (`firebase login`) for deployment
