# Ajalon Electric website

Marketing site for Ajalon Electric, a Knoxville, Tennessee business offering
electrical services, generator installation and repair, and solar
installation. Visitors explore the services, use a project guide and a
backup-priority selector, and prepare a three-step project brief that they can
download or open as an email draft.

Built with Next.js (App Router) and React, exported as a fully static site.
There is no server, database, analytics or form backend: the project brief
stays in the visitor's browser until they choose to email or download it.

## Getting started

Requires Node.js 20.9 or later (`.nvmrc` pins the current LTS, 26).

```bash
npm install
npm run dev        # http://localhost:3000
```

To check the production output locally:

```bash
npm run build      # writes the static site to out/
npm run preview    # serves out/ at http://localhost:3000
```

## Scripts

| Script                 | What it does                                            |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Development server with hot reload                      |
| `npm run build`        | Static export to `out/`, then runs `postbuild`          |
| `postbuild`            | `scripts/fix-export-segments.mjs` (see Conventions)     |
| `npm run preview`      | Serves `out/` with `serve` (fetched on demand by `npx`) |
| `npm run lint`         | ESLint (Next.js core-web-vitals and TypeScript rules)   |
| `npm run typecheck`    | Generates route types, then `tsc --noEmit`              |
| `npm run format`       | Formats the project with Prettier                       |
| `npm run format:check` | Fails if any file is not Prettier-formatted             |
| `npm run check`        | `typecheck`, `lint` and `format:check`, as CI runs them |

## Project structure

```
src/
  app/                    Routes (App Router)
    layout.tsx            <html>, fonts, global metadata, header/footer chrome
    page.tsx              Home
    services/             /services/ and services/[slug]/ (static params)
    about/ contact/ faq/ privacy/ project-guide/ request/
    not-found.tsx         404 page
    robots.ts sitemap.ts  Generated at build time from config + content
    icon.svg fonts.ts
  components/
    layout/               Topbar, header with mobile menu, footer, mobile bar
    sections/             Sections shared across pages
    home/ services/ project-guide/ request/   Page-specific sections
    seo/                  JSON-LD
    ui/                   Icon, links, brand, photo, text helpers
  config/
    site.ts               Business details and navigation (client-safe)
    deployment.ts         SITE_URL / SITE_INDEXABLE (server only)
  content/                Typed copy: services, FAQ, guides, planner, routes
  lib/                    Framework-free helpers (metadata, brief, image loader)
  styles/                 globals.css imports ordered partials
  assets/
    images/               Photos (full size + 720px variants) and logo mark
    fonts/                Inter and Manrope variable fonts with OFL licences
scripts/
  fix-export-segments.mjs
docs/
  content-sources.md      Where every business fact came from
  verification.md         Migration parity results
```

## Conventions

- **Server Components by default.** Only the mobile menu, backup-priority
  selector, service finder, project guide, preparation checklist and project
  planner are Client Components.
- **Business facts live in `src/config/site.ts`, copy in `src/content/`.**
  Do not add hours, prices, reviews, ratings, licences, warranties, years in
  business or similar claims unless the owner supplies them; see
  `docs/content-sources.md`.
- **Links:** site paths go through `next/link`; `tel:`, `mailto:` and external
  links are plain anchors (`SmartLink`, `TextLink`, `ButtonLink` in
  `components/ui/links.tsx`).
- **Images:** `next/image` with static imports. A static export has no image
  optimizer, so `lib/image-loader.ts` maps the two configured widths (720 and 1536) to the committed variants. A new photo needs both files plus an entry
  in that loader.
- **Fonts:** `next/font/local`, exposed as `--font-inter` / `--font-manrope`
  and used through the `--font-sans` / `--font-display` tokens. Never write a
  font family name directly in CSS.
- **CSS:** plain global CSS split into partials. `styles/globals.css` imports
  them in an order that matters for the cascade; each partial lists its base
  rules before its media queries.
- **Text nodes:** where literal text meets an interpolated value, render one
  template string (``{`Let’s talk: ${phone}`}``) so the browser shapes it
  exactly as the original markup.
- **Export fix:** on Windows, Next writes link-prefetch files into nested
  folders (`__next.about/__PAGE__.txt`) instead of `__next.about.__PAGE__.txt`,
  so prefetches 404. `scripts/fix-export-segments.mjs` flattens them after
  every build and does nothing when there is nothing to flatten.

## Routes

| Path                                                                 | Page                                                      |
| -------------------------------------------------------------------- | --------------------------------------------------------- |
| `/`                                                                  | Home                                                      |
| `/services/`                                                         | Services overview and service finder                      |
| `/services/electrical/`, `/services/generators/`, `/services/solar/` | Service detail pages                                      |
| `/about/`                                                            | About                                                     |
| `/project-guide/`                                                    | Project guide and preparation checklist                   |
| `/faq/`                                                              | Questions and answers                                     |
| `/contact/`                                                          | Contact details and location                              |
| `/request/`                                                          | Project planner (`?service=`, `?priorities=a\|b` presets) |
| `/privacy/`                                                          | Privacy and preview details                               |
| `/robots.txt`, `/sitemap.xml`                                        | Generated from the settings below                         |

Unknown paths render the 404 page (`out/404.html`).

## Configuration

Set at build time (locally in `.env.local`, see `.env.example`; on Vercel in
Project Settings → Environment Variables).

| Variable         | Default                                                                | Purpose                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `SITE_URL`       | `https://$VERCEL_PROJECT_PRODUCTION_URL`, else `http://localhost:3000` | Origin for canonical URLs, Open Graph, JSON-LD, robots.txt and the sitemap                                                |
| `SITE_INDEXABLE` | `false`                                                                | `true` allows indexing: removes `noindex,nofollow` and opens robots.txt. The build fails if `SITE_URL` is still localhost |

## Before launch

- [ ] The owner approves all copy, the service scope and the contact details
      in `src/config/site.ts`.
- [ ] Replace the four AI-generated photos with real, approved photos (see
      `docs/content-sources.md`), or get explicit approval to keep them with
      their "illustrative" labels.
- [ ] Approve the proposed logo mark (`src/assets/images/ajalon-mark.svg`,
      `src/app/icon.svg`).
- [ ] Review the remaining "preview" wording (FAQ answers, privacy page,
      footer link, the closing line of the project brief).
- [ ] Decide how project requests should reach the team. Today the planner
      only opens an email draft or downloads a text file.
- [ ] Set `SITE_URL` to the real domain and connect the domain in Vercel.
- [ ] Set `SITE_INDEXABLE=true` for production only, then redeploy.
- [ ] Run Lighthouse on the live site and submit `/sitemap.xml` in Google
      Search Console.

## Continuous integration

`.github/workflows/ci.yml` runs on pushes to `main` and on pull requests:
`npm ci`, `npm run check`, `npm run build`, then uploads `out/` as the
`static-site` artifact. Dependabot (`.github/dependabot.yml`) opens weekly npm
updates (Next/React grouped) and monthly GitHub Actions updates.

## Hosting

Any static host that serves `index.html` for directory paths and `404.html`
for missing paths can host `out/`.

The site is set up for Vercel: import the repository, keep the detected
Next.js framework preset (the static export is detected automatically and
served from `out/`), and set the variables above. `vercel.json` adds security
headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
`Permissions-Policy`, `Strict-Transport-Security`) and long-lived caching for
hashed assets. There is no Content-Security-Policy yet; one would need testing
against Next's inline scripts.

### Deployments

- Preview: <https://ajalonelectric.vercel.app/> (Vercel; `SITE_INDEXABLE`
  unset, so every page is `noindex, nofollow` and `robots.txt` disallows all
  crawling).
- Production: not launched. Needs owner approval, the real domain in
  `SITE_URL`, and `SITE_INDEXABLE=true` on the production environment only.
