# brandonye.github.io

Source for https://brandonye.github.io. GitHub Pages builds it with Jekyll on every push to `main`. There's nothing to build on your machine.

## Everyday edits

| To change…                          | Edit                                           |
| ----------------------------------- | ---------------------------------------------- |
| Bio on the home page                | `index.md`                                     |
| Name, email, Scholar, LinkedIn      | top block of `_config.yml`                     |
| Publications                        | `_data/publications.yml`                       |
| CV (hidden for now)                 | see the `cv:` comment in `_config.yml`         |
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

The banner is two compressed copies in `assets/img/`. To swap in a new image, make both sizes from it (replace `new-banner.png` with your file):

```bash
sips -s format jpeg -s formatOptions 82 --resampleWidth 2000 new-banner.png --out assets/img/banner-2000.jpg
sips -s format jpeg -s formatOptions 80 --resampleWidth 1000 new-banner.png --out assets/img/banner-1000.jpg
```

The full-quality original of the current banner is kept in git history:

```bash
git show 0ecb31e:data/the-revolution.png > the-revolution.png
```

## Layout of this repo

- `_layouts/`, `_includes/`: the page templates
- `assets/`: files served as-is on the site: stylesheet, banner images, CV
- `_data/`: note the underscore. This is your publication list, which Jekyll reads to build pages and doesn't publish as a file
- `docs/`: design notes, not published on the site
