# brandonye.github.io

Source for https://brandonye.github.io. GitHub Pages builds it with Jekyll on every push to `main`. There's nothing to build on your machine.

## Everyday edits

| To change…                          | Edit                                           |
| ----------------------------------- | ---------------------------------------------- |
| Bio on the home page                | `index.md`                                     |
| Name, email, Scholar / GitHub links | top block of `_config.yml`                     |
| Publications                        | `_data/publications.yml`                       |
| CV                                  | replace `assets/cv.pdf` (keep the file name)   |
| Research page intro                 | `research.html`                                |

Commit and push to `main`; the live site updates within a minute or two.

## Writing an essay

Create `_posts/YYYY-MM-DD-short-title.md`:

```markdown
---
title: "Your essay title"
---

First paragraph…
```

The date in the file name is the publish date. The essay appears at `/writing/YYYY/short-title/`, on the Writing page, in the home page's "Recent writing", and in the RSS feed (`/feed.xml`).

## Adding a publication

Add an entry to `_data/publications.yml`:

```yaml
- title: "Paper title"
  authors: "B. Ye, A. Coauthor"
  venue: "Conference or Journal"
  year: 2026
  selected: true        # also show on the home page
  url: https://…        # optional: makes the title a link
  links:                # optional: any labels you like
    pdf: https://…
    code: https://…
```

Your name, written the way `author.short_name` is in `_config.yml`, is bolded automatically.

## Previewing locally (optional)

GitHub's Jekyll gems need Ruby 3.x (not 4). One-time setup:

```bash
brew install ruby@3.3
```

Then, from this folder:

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000.

## Banner

`data/the-revolution.png` is the original. The site uses compressed copies in `assets/img/`. To regenerate them after swapping the image:

```bash
sips -s format jpeg -s formatOptions 82 --resampleWidth 2000 data/the-revolution.png --out assets/img/banner-2000.jpg
sips -s format jpeg -s formatOptions 80 --resampleWidth 1000 data/the-revolution.png --out assets/img/banner-1000.jpg
```

## Layout of this repo

- `_layouts/`, `_includes/`, `assets/site.css`: the templates and the single stylesheet
- `docs/`: design notes, not published on the site
