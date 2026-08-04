# TA-site

The **public landing page** of Talent Angels — the project's front door. A
static, public-facing site, deployed independently of the product.

This is a **subrepo** of the Talent Angels workspace.

## Read first

1. The workspace policy: `../CLAUDE.md`
   (or https://github.com/LFX-Talent-Angels/TA-workspace → `CLAUDE.md`).
   It is **authoritative** — git rules, DCO, secrets, agent conventions.
2. `../docs/architecture/SYSTEM.md` — cross-repo architecture.

## Boundaries

- This is **not** the chat frontend. The chat UI lives in `TA-app`. Do not
  build conversation surfaces here.
- Never call `TA-agents`' FastAPI edge from here, and never query taxonomy
  graphs. The landing page is marketing + demand signal, not product.
- Keep it static. If a feature needs a server, that's a signal it belongs in
  `TA-app` or `TA-agents` instead.
- Analytics and waitlist keys are **environment config**, never committed.
  Only `.env.example` with placeholders is committed.
- The implementation stack is Astro with static output, Tailwind CSS 4 through
  its Vite plugin, TypeScript checking, and npm with a committed lockfile.
- GitHub Pages is the deployment target. Keep its workflow in a focused change
  and do not introduce a server or a separate hosting dependency.

## Scope reminder

Personal research, measurements, and notes belong in
`TA-lab/mentees/<handle>/sprint-NN/`, not here. This repo holds one shared
implementation.

## Git

Fork or branch, then PR. **`git commit -s`** (DCO). Never push to `main`. Full
rules in the workspace `CLAUDE.md` and `CONTRIBUTING.md`.
