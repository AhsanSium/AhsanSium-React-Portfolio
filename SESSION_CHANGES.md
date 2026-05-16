# Session Changes — Portfolio Redesign & Updates

## 1. Complete Visual Redesign — "Studio Compiler" Theme

### Design System
- **Removed** Inter font, cyan/purple gradient aesthetic, glassmorphism effects
- **Added** three new fonts via Google Fonts:
  - `Fraunces` — editorial variable serif for all display headings
  - `Plus Jakarta Sans` — body text
  - `JetBrains Mono` — code labels, mono elements
- **New CSS variable naming** (shorter, theme-aware):
  - `--bg` (page background), `--bg-c` (card), `--bg-s` (surface)
  - `--ac` (primary accent), `--ac2` (secondary), `--ac-dim`, `--ac-txt`
  - `--t1` (text primary), `--t2` (secondary), `--t3` (muted)
  - `--ln` (border), `--ln-h` (border hover), `--sh`, `--sh-lg` (shadows)
- **Legacy aliases** kept (`--accent-cyan`, `--text-primary`, etc.) for safety

### Dark / Light Theme
- **New file:** `src/context/ThemeContext.js`
  - React context providing `theme` state + `toggleTheme()`
  - Persists to `localStorage` key `as-theme`
  - Sets `data-theme` attribute on `<html>` element
- **Dark palette:** `#0d0d11` background + **electric lime `#b8fc44`** accent
- **Light palette:** warm parchment `#f5f0e6` background + near-black accent
- Theme toggle button (Sun/Moon SVG icons) added to navbar — desktop & mobile

---

## 2. Files Created

| File | Purpose |
|---|---|
| `src/context/ThemeContext.js` | Dark/light theme context + localStorage persistence |
| `src/hooks/useMediumFeed.js` | Fetches Medium RSS feed via rss2json API |
| `public/favicon.svg` | Custom "AS" monogram SVG favicon |

---

## 3. Files Rewritten

### Global
| File | Changes |
|---|---|
| `src/index.css` | Complete rewrite — new font imports, dark/light CSS variables, all component classes, shimmer skeleton animation, clean carousel button styles |
| `src/App.css` | Minimal — just root background |
| `src/App.js` | Wrapped with `<ThemeProvider>`, updated 404 page style |

### Navbar & Footer
| File | Changes |
|---|---|
| `src/Components/Shared/NavBarMain/TopNavbar.js` | New minimal design, active dot indicator, Sun/Moon theme toggle, mobile-friendly |
| `src/Components/Shared/Footer/Footer.js` | Brand column with CTA, social icon buttons, clean copyright bar |

### Home Sections
| File | Changes |
|---|---|
| `src/Components/Home/HeaderMain/HeaderMain.js` | Profile photo (lime accent stripe + "open to work" badge) + compact terminal card below it; role cycling text; fade-in animation |
| `src/Components/Home/Intro/Intro.js` | Stats band (4 animated counters) + about text + developer profile JSON card |
| `src/Components/Home/Skills/SkillDetails.js` | Restyled chip — pill shape, lime hover border |
| `src/Components/Home/Programming/Programming.js` | Replaced circular progress bars with clean horizontal skill bars; tool icons grid |
| `src/Components/Home/MyProjects/MyProjects.js` | New section heading, lime CTA button |
| `src/Components/Home/MyProjects/MyProjectDetails.js` | Alternating image-left/right layout, project index number (`01`, `02`, `03`), Fraunces project name |
| `src/Components/Home/ContactMe/ContactMe.js` | Split layout — editorial "Have a project? Let's talk." headline + contact links + form |
| `src/Components/Home/ClientsSay/ClientsSay.js` | Replaced Bootstrap carousel with interactive client selector tabs + quote card with pagination dots |
| `src/Components/Home/MyBlog/MyBlog.js` | **Live Medium feed** — fetches real articles via `useMediumFeed` hook, shimmer skeleton loading, 3 latest articles shown |

### Pages
| File | Changes |
|---|---|
| `src/Components/AboutMe/About.js` | New page header, skill pills, numbered highlight list, education with icons |
| `src/Components/Projects/Projects.js` | New page header with project count |
| `src/Components/Projects/ProjectDetails/ProjectDetails.js` | Alternating layout, clean carousel with custom SVG arrow buttons, Fraunces heading |
| `src/Components/Contact/ContactPage.js` | Split layout — contact info cards + social icon buttons + form; added `faLocationDot` |
| `src/Components/Contact/Contact.js` | Restyled inputs/labels, success/error state banners |
| `src/Components/Blog/Blog.js` | **Full Medium articles page** — all articles from feed, skeleton loading, "Follow on Medium" CTA, article count |

### CSS cleared (no longer needed)
- `src/Components/Home/Programming/Programming.css` — cleared (old circular progressbar overrides)

---

## 4. SEO & Public Files

| File | Changes |
|---|---|
| `public/index.html` | Full SEO rewrite — Twitter card, Open Graph, JSON-LD Person schema, canonical URL (`ahsansium.dev`), Google Fonts preconnect, SVG favicon as primary |
| `public/sitemap.xml` | All URLs updated from `ahsan-sium1.web.app` → `ahsansium.dev` |
| `public/robots.txt` | Sitemap URL updated to `ahsansium.dev` |
| `public/favicon.svg` | New "AS" monogram — dark `#0d0d11` rounded square, cream **A** + lime **S**, lime underline stripe |

---

## 5. Custom Domain SEO (ahsansium.dev)

- Connected `ahsansium.dev` as Firebase Hosting custom domain via Console
- Updated canonical, og:url, JSON-LD, sitemap, robots.txt to use `ahsansium.dev`
- **Did NOT add firebase.json redirect** — would cause infinite loop on custom domain
- Correct approach: canonical tags + Google Search Console submission
- GSC steps needed: add `ahsansium.dev` property → verify DNS → submit sitemap → request indexing → remove `ahsan-sium1.web.app` via Removals tool

---

## 6. Medium Articles Integration

- Feed URL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ahsansium`
- 4 articles found and displaying:
  1. Most Common JavaScript Interview Question & Answer
  2. React.js Explained in a Simplified Way
  3. JavaScript ES6 — A Beginners Perspective
  4. Getting Started With JavaScript for Beginners
- Auto-updates whenever new articles are published on Medium — no code changes needed
- Thumbnail extracted from article HTML via regex (`/<img[^>]+src=["']([^"']+)["']/`)

---

## 7. Project Screenshots Updated

| Image | Method | Source |
|---|---|---|
| `yacht1.png` | User provided | Yacht Voyage homepage (1836×921) |
| `yacht2.png` | User provided | Yacht Voyage register page |
| `yacht3.png` | Auto-captured | `thum.io` screenshot API — login page |
| `phonomania1.png` | Auto-captured | `thum.io` — PhonoMania homepage (1280×960) |
| `phonomania2.png` | User provided | PhonoMania cart page (1904×921) |

- Originals backed up as `*_orig_backup.png` in `src/images/`
- Screenshot tool used: `https://image.thum.io/get/width/1280/crop/900/noanimate/<url>`

---

## 8. Carousel Button Fix

- **Problem:** Bootstrap's default white carousel arrows invisible on white/light images
- **Fix:** Replaced `carousel-control-prev-icon` / `carousel-control-next-icon` spans with custom `.carousel-btn` — white circle, thin border, shadow, SVG chevron arrows
- Hover state fills with lime accent (`var(--ac)`)
- Applied in: `ProjectDetails.js`

---

## Key Dependencies (unchanged)
- React 19, React Router v7, Vite 7
- Bootstrap 5 (CDN) — grid + carousel JS only
- Tailwind CSS v4 — utility classes
- EmailJS — contact form (`service_frjy9ki` / `template_d92v7na`)
- `react-countup` — animated stat counters
- FontAwesome — brand + solid icons
- Firebase Hosting — `ahsan-sium1` project → `ahsansium.dev`

---

## Branch
All changes on branch: `ui-upgrade`
