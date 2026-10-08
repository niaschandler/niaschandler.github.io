---
name: Nested mockup preview sandbox
description: Keep preview tooling changes inside its isolated artifact when working beside the Jekyll site.
---

The component preview sandbox is its own nested Node project beside the Jekyll site. Keep dependency metadata and installs inside that artifact; a failed root-level npm install created an empty lockfile, and Jekyll logged a stale-file error when it was removed.

**Why:** The site auto-regenerates on workspace file changes, so temporary root package metadata can trigger unrelated regeneration errors.

**How to apply:** Run package commands from the mockup artifact directory and keep generated files there. If root package metadata is created accidentally, remove it and restart the site workflow once.
