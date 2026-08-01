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

This amends the repo topology in `ADR-0004`; the decision is recorded in
`ADR-0007` in
[`TA-workspace/docs/decisions/`](https://github.com/LFX-Talent-Angels/TA-workspace/tree/main/docs/decisions).

## What goes here

- The landing page: markup, styles, assets, copy.
- Waitlist / demand-signal capture and site analytics.
- Deploy configuration for the site.

## What does **not** go here

- The chat UI → [`TA-app`](https://github.com/LFX-Talent-Angels/TA-app).
- Assistant runtime, skills, API edge →
  [`TA-agents`](https://github.com/LFX-Talent-Angels/TA-agents).
- Taxonomy ingestion, graph schemas →
  [`TA-taxonomies`](https://github.com/LFX-Talent-Angels/TA-taxonomies).
- Personal research, notes, measurements, spikes →
  [`TA-lab/mentees/<handle>/`](https://github.com/LFX-Talent-Angels/TA-lab/tree/main/mentees).

## Status

Sprint 4 deliverable. **Stack and deploy target not chosen yet** — pick them in
the first PR and say why in the PR description.

## Contributing

Same rules as every Talent Angels repo: fork or branch, `git commit -s` (DCO),
open a PR, request a mentor review. Never push to `main`. See the workspace
[`CONTRIBUTING.md`](https://github.com/LFX-Talent-Angels/TA-workspace/blob/main/CONTRIBUTING.md).

One shared implementation, built as small focused PRs — not one full
implementation per contributor.

## License

Apache-2.0 — see [`LICENSE`](./LICENSE).
