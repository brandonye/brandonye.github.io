# Personal site: design

Date: 2026-11-21
Size: small project (short design)

## Intent

A personal website at https://brandonye.github.io. Its main job is to present
Brandon's academic work. Its second job is to give him a low-effort place to
publish short essays. The look should be very clean and minimal, with the
chosen banner (`data/the-revolution.png`) across the top.

## Goals

- Academic portfolio comes first: bio, links, selected publications on the home page.
- A Writing section for short essays, easy to add to.
- Deploys on GitHub Pages from this repo with no build step on Brandon's machine.
- Fast, readable, works on a phone.

## Non-goals

Comments, analytics, site search, tags/categories, newsletter, a CMS.
None of these are planned. Any of them can be added later.

## Anti-goals (it fails if…)

- It looks like a busy template: sidebars, icon rows, cards, animations.
- Posting an essay needs anything beyond writing a Markdown file and pushing.
- It depends on fragile tooling that breaks when left alone for a year.

## Approaches considered

1. **Jekyll built natively by GitHub Pages, custom minimal templates (picked).**
   GitHub builds on every push; nothing to install to publish; full control
   of the look. Only GitHub-whitelisted plugins are allowed, which is fine here.
2. Ready-made academic theme (al-folio / academicpages). Many features for
   free, but heavy, busy, and al-folio needs a custom Actions pipeline.
   Works against "very clean."
3. Plain HTML/CSS. Simplest machinery, but every essay is hand-written HTML
   and every list is updated by hand. Posting becomes a chore.

Picked: option 1. Brandon accepted the proposal.

## Pages (agreed with Brandon)

- **Home `/`**: full banner; name + nav (Research · Writing · CV); short bio;
  link line (email · Google Scholar · GitHub · CV PDF); "Selected
  publications"; "Recent writing" (latest 3–5 essays).
- **Research `/research/`**: full publication list grouped by year, newest first.
- **Writing `/writing/`**: all essays, newest first, with dates. Each essay
  has its own page.
- **CV**: the nav link opens a PDF at `/assets/cv.pdf`.

## Look (agreed with Brandon)

- White page, one narrow text column (~680px), no sidebar, icons or animations.
- One serif typeface for text.
- Automatic dark mode following the visitor's system setting.
- Home: banner at full width inside a full-width black band.
- Other pages: the *whole* banner shown smaller (~140px tall), centered
  in the same black band, so essays start near the top of the screen.

## How content is added

- Essay: `_posts/YYYY-MM-DD-slug.md` with `title` front matter, Markdown body.
- Publication: a few lines in `_data/publications.yml`
  (`title, authors, venue, year, selected, links: {pdf, code, doi, …}`).
- Bio: Markdown body of `index.md`.
- Links (email, Scholar, GitHub): `_config.yml`.

## Builder's calls (Claude's, not discussed)

- **Font:** system serif stack (Iowan Old Style / Charter / Georgia). No web
  font download, so pages load instantly. Swap for a Google Font later if wanted.
- **Banner file:** compressed copy in `assets/img/` (JPEG, ~2000px and ~1000px
  widths via `srcset`). The original 1.3 MB PNG stays in `data/`, excluded
  from the build.
- **Plugins:** `jekyll-feed` (RSS for essays at `/feed.xml`), `jekyll-seo-tag`
  (link previews), `jekyll-sitemap`. All are GitHub Pages–whitelisted.
- **Own name in bold** in author lists, set by one value in `_config.yml`.
- **Essay URLs:** `/writing/:year/:title/`.
- **Placeholders:** bio, publications, CV and one sample essay are clearly
  marked placeholder content until Brandon supplies real content.
- **README.md** explains how to post, add a publication and preview locally.
- **Local preview:** install Jekyll (via the `github-pages` gem with Bundler,
  installed into the project, not system-wide) so the site can be checked
  before pushing. This spec folder (`docs/`) is excluded from the site build.
- **Deploy:** GitHub serves `<user>.github.io` from `main` automatically.
  Pushing is left to Brandon to approve.

## Left to the builder

Exact spacing, colors within black/white/grey, 404 page, favicon.
