# Nia Chandler — Operations Readout

This repository is the complete static Jekyll site for
[niaschandler.github.io](https://niaschandler.github.io). It is designed to
publish from the `main` branch and the repository root through GitHub Pages.

## Site structure

- `index.md`, `about.md`, `experience.md`, and `contact.md` contain page content
  in Markdown with YAML front matter.
- `_layouts/` contains the reusable document and page shells.
- `_includes/` contains shared metadata, navigation, and footer markup.
- `assets/css/style.css` contains the responsive light/dark visual system.
- `assets/js/theme.js` contains the only JavaScript: a small theme preference
  toggle backed by `localStorage`.
- `_config.yml` contains the GitHub Pages URL, empty `baseurl`, and Jekyll
  plugin configuration.

## Updating content

Edit the Markdown files directly. Keep the front matter at the top of each
file. Do not add professional achievements, dates, employers, metrics, or
contact details until they are confirmed for publication.

The site currently uses the public GitHub profile for contact:
`https://github.com/niaschandler`. A public email address is intentionally not
included.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`. To build without serving:

```sh
bundle exec jekyll build
```

GitHub Pages installs the supported Jekyll plugins listed in the `Gemfile` and
builds the site without a separate frontend build step.

## GitHub Pages

In the repository settings, choose **Pages → Deploy from a branch**, select
`main`, and select `/ (root)`. Because this is a GitHub user site, `_config.yml`
uses:

```yml
url: "https://niaschandler.github.io"
baseurl: ""
```

## Lighthouse

Build or serve the site, open the page in Chrome, and run Lighthouse in
Incognito mode for Performance, Accessibility, Best Practices, and SEO. Audit
both light and dark themes and check the 375px and 1280px responsive layouts.
The site is intentionally lightweight: no backend, contact form service,
tracker, animation library, or frontend framework is required.