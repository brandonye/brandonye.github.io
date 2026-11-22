# Personal Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A minimal Jekyll site for brandonye.github.io: academic portfolio first, essays second.

**Architecture:** Plain Jekyll built natively by GitHub Pages. Custom layouts, no theme. Content lives in
Markdown (`index.md`, `_posts/`) and one data file (`_data/publications.yml`); one stylesheet.

**Tech Stack:** Jekyll via `github-pages` gem; plugins `jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`; plain CSS.

**Spec:** `docs/superpowers/specs/2026-11-21-personal-site-design.md`

## Global Constraints

- Only GitHub Pages–whitelisted plugins. No JavaScript.
- Content column ~680px; system serif stack (Iowan Old Style, Charter, Georgia).
- Banner: full width on home; whole image ~140px tall on other pages; both in a full-width black band.
- Dark mode via `prefers-color-scheme`.
- Essay permalink `/writing/:year/:title/`. CV at `/assets/cv.pdf`.
- `data/`, `docs/`, `README.md`, `Gemfile*`, `vendor/` excluded from the build.
- Stylesheet is `assets/site.css` (not `assets/css/style.css`, which GitHub's default theme also writes).
- Placeholder content clearly marked as placeholder.

## Review Focus

1. Publication missing `links` or `venue` → renders without empty brackets or stray separators.
2. Zero essays → home hides "Recent writing"; Writing page shows a short "No essays yet." line.
3. Long titles / URLs at 375px width → no horizontal scroll.
4. Dark mode → text, links and rules readable; banner band seamless.
5. Own name bolded in author lists only when `author.short_name` matches.

---

### Task 1: Scaffold, config, banner assets

**Files:** Create `.gitignore`, `Gemfile`, `_config.yml`, `assets/img/banner-2000.jpg`, `assets/img/banner-1000.jpg`, `assets/favicon.svg`

- [ ] `_config.yml`: `title`, `description`, `url`, `author: {name, short_name, email}`, `links: {scholar, github}`,
      `cv`, `permalink: /writing/:year/:title/`, plugins, layout `defaults`, `exclude`.
- [ ] Compress banner with `sips` to JPEG at 2000px and 1000px wide.
- [ ] Verify: `bundle exec jekyll build` exits 0; banner files < 400 KB each.

### Task 2: Layouts, includes, stylesheet

**Files:** Create `_layouts/default.html`, `_layouts/home.html`, `_layouts/post.html`, `_includes/head.html`,
`_includes/banner.html`, `_includes/nav.html`, `_includes/footer.html`, `_includes/contact.html`,
`_includes/publication.html`, `_includes/post-list.html`, `assets/site.css`

**Interfaces:**
- `default.html` reads `page.banner` (`full` on home, otherwise slim).
- `{% include publication.html pub=p %}` renders one `<li>` from `_data/publications.yml`
  (`title, authors, venue, year, selected, url, links{label: url}`).
- `{% include post-list.html posts=site.posts limit=5 %}` renders a dated `<ul class="posts">`.

- [ ] Verify: build passes; home HTML contains `banner--full`, an essay page contains `banner--slim`.

### Task 3: Pages and placeholder content

**Files:** Create `index.md`, `research.html`, `writing.html`, `404.html`, `_data/publications.yml`,
`_posts/2026-11-21-placeholder-essay.md`, `assets/cv.pdf`

- [ ] Home (`layout: home`): bio (Markdown), link line, selected pubs, latest 5 posts (hidden if none).
- [ ] Research: all pubs grouped by year desc. Writing: all posts with dates, or "No essays yet."
- [ ] Sample data covers a pub with no links and one with no venue (Review Focus 1).
- [ ] Verify: build passes; `_site/research/index.html` has year headings; `_site/feed.xml` exists.

### Task 4: README and browser verification

**Files:** Create `README.md`

- [ ] README: how to add an essay, a publication, the CV, and preview locally.
- [ ] Serve locally; check home, research, writing, essay, 404 at desktop and 375px, light and dark.
- [ ] Check Review Focus items 1–5 in the browser.
