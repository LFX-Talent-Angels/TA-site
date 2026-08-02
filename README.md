# TA-site

> **Talent Angels** public landing page — the front door for the project.

Part of the [`LFX-Talent-Angels`](https://github.com/LFX-Talent-Angels) org. For
project-wide docs, onboarding, and rules, see
[`TA-workspace`](https://github.com/LFX-Talent-Angels/TA-workspace).

## Why this is its own repo

The landing page is **not** the chat frontend. It lives apart from
[`TA-app`](https://github.com/LFX-Talent-Angels/TA-app) on purpose:

- **`TA-app`'s stack is still undecided** (its own ADR, triggered by MVP work).
  The landing must not wait on that decision — or silently make it.
- **Different lifecycle**: a static site that redeploys when a line of copy
  changes, versus a product that deploys with releases.
- **Different contributors**: editing copy or design shouldn't require touching
  product code or passing product review.
- **Third-party scripts** (waitlist, analytics) belong here, not next to the
  assistant runtime.

## What goes here

- The landing page: markup, styles, assets, copy.
- Public community links and future demand-signal integrations.
- Deploy configuration for the site.

The current landing page channels community interaction through the public
Talent Angels GitHub organization, where contributors can follow the work and
participate through issues and pull requests. Waitlist capture and analytics
are deferred until the team defines a concrete need and privacy-safe setup.

## What does **not** go here

- The chat UI → [`TA-app`](https://github.com/LFX-Talent-Angels/TA-app).
- Assistant runtime, skills, API edge →
  [`TA-agents`](https://github.com/LFX-Talent-Angels/TA-agents).
- Taxonomy ingestion, graph schemas →
  [`TA-taxonomies`](https://github.com/LFX-Talent-Angels/TA-taxonomies).
- Personal research, notes, measurements, spikes →
  [`TA-lab/mentees/<handle>/`](https://github.com/LFX-Talent-Angels/TA-lab/tree/main/mentees).

## Status

This repository contains the static Talent Angels landing-page implementation.
It uses Astro, Tailwind CSS 4 through its Vite plugin, TypeScript checking, and
npm with a committed lockfile. Deployment configuration is delivered through a
separate, focused pull request.

## Stack decision

Astro fits a content-first landing page because it produces static HTML while
keeping each section in a focused component. Tailwind CSS supplies the shared
design tokens and responsive utilities without turning the site into a
client-side application.

Plain HTML and CSS would reduce the toolchain but make the growing set of page
sections and shared behavior less structured. React with Vite would provide a
large component ecosystem, but this site does not need application state,
client-side routing, or a browser framework runtime; that work belongs in
`TA-app`.

GitHub Pages is the deployment target because it is a natural fit for Astro's
static output, keeps hosting and review within the project's existing GitHub
workflow, and follows the precedent set by the Learning Tokens landing page.
An external platform such as Vercel or Cloudflare Pages could provide additional
deployment features, but would introduce another service and configuration
surface that this static site does not currently need.

## Local development

Use Node.js 24 (Astro requires Node.js 22.12 or newer) and npm 9.6.5 or newer.

```bash
npm ci
npm run dev
```

Before submitting a change, run:

```bash
npm run check
npm run build
```

Use `npm run preview` to inspect the generated static site locally. Build
output, installed dependencies, Astro caches, local environment files, and
secrets must not be committed.

## Contributing

Same rules as every Talent Angels repo: fork or branch, `git commit -s` (DCO),
open a PR, request a mentor review. Never push to `main`. See the workspace
[`CONTRIBUTING.md`](https://github.com/LFX-Talent-Angels/TA-workspace/blob/main/CONTRIBUTING.md).

One shared implementation, built as small focused PRs — not one full
implementation per contributor.

## License

Apache-2.0 — see [`LICENSE`](./LICENSE).
