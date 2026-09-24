# Nia Chandler — Operations Readout

This repository is a root-level static Jekyll portfolio intended for GitHub
Pages at `niaschandler.github.io`.

## Site map

- `index.md`, `about.md`, `experience.md`, `contact.md` — Markdown page content
- `_layouts/` — reusable page shells
- `_includes/` — shared head, navigation, and footer
- `assets/css/style.css` — responsive light/dark theme
- `assets/js/theme.js` — minimal theme preference toggle
- `_config.yml` — Jekyll and GitHub Pages configuration

## Architecture decisions

- Content stays in Markdown; presentation is shared through Jekyll layouts and
  includes.
- The interface uses CSS custom properties for light/dark themes and avoids a
  frontend framework or runtime dependency.
- Only supplied professional roles and locations are published. Unconfirmed
  dates, achievements, and contact details remain omitted.
- The GitHub Pages user-site configuration keeps `baseurl` empty so URL filters
  work correctly from the domain root.

## Local preview

See `README.md` for the Bundler/Jekyll preview command, GitHub Pages settings,
and Lighthouse guidance.
