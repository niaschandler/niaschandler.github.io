# Portfolio Site Plan

This repository is a publish-ready GitHub Pages user site for
`niaschandler.github.io`.

## Direction

An original, accessible interpretation of the USS Enterprise NCC-1701-D
computer readout: structured panels, technical labels, rounded interface
geometry, and a purple-forward palette with light and dark themes. Typography
uses an editorial display treatment with readable system fallbacks.

## Pages

- **Home** — introduction, professional focus, experience summary, and public
  GitHub channel.
- **About** — concise profile based only on the supplied aviation supply and
  fuels background.
- **Work Experience** — Aviation Supply Officer, USS BOXER LHD-4; Fuels Officer,
  MCAS Iwakuni; Assistant Supply Officer, USS SAMPSON DDG 102.
- **Contact** — public GitHub channel, with no email address or `mailto:` link.

Unconfirmed dates, achievements, metrics, résumé details, and contact
destinations remain omitted rather than invented.

## Technical choices

- Jekyll Markdown pages with YAML front matter.
- Reusable layouts and includes with semantic HTML.
- Root-level `_config.yml`, `_layouts`, `_includes`, `assets`, and pages.
- Plain CSS plus one small theme-preference script.
- SEO tags, `sitemap.xml`, `robots.txt`, and an SVG favicon.
- Empty `baseurl` and URL filters for a GitHub user site.

## Verification targets

The README documents local Jekyll preview, GitHub Pages setup from `main` and
`/ (root)`, and Lighthouse checks. The responsive design targets 375px and
1280px widths with accessible contrast and reduced-motion support.