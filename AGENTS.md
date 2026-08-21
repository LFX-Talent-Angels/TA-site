# AGENTS.md — TA-site

The **public landing page** of Talent Angels — the project's front door. A
static, public-facing site, deployed independently of the product.

This file is the source of truth for humans and for every AI coding agent
(Claude Code, Codex, Cursor, Antigravity, Gemini, Aider, and any other).
`CLAUDE.md` is a one-line import of this file.

This is a **subrepo** of the Talent Angels workspace.

## Read first

1. The workspace policy: `../AGENTS.md`
   (or https://github.com/LFX-Talent-Angels/TA-workspace → `AGENTS.md`).
   It is **authoritative** — branch flow, DCO, secrets, agent conventions.
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

## Build

```bash
npm ci
npm run build     # astro check && astro build — this is the CI gate
npm run dev       # local preview
```

CI runs `npm run build` on every pull request, and it must pass before a merge.

## Branches and pull requests

| Branch | What it is        | To merge into it                            |
| ------ | ----------------- | ------------------------------------------- |
| `dev`  | Integration trunk | 1 approval from any contributor + green CI  |
| `main` | What we publish   | 1 approval **from a code owner** + green CI |

- **Open every pull request against `dev`.** `main` only receives promotions
  from `dev`, and it is what gets deployed.
- Never push directly to `dev` or `main`.
- **Every commit signed off**: `git commit -s` (DCO). Pull requests without it
  are blocked.
- Without write access, fork and open the pull request from your fork. With
  write access, push the branch to this repo directly.
- Never commit `.env*` files, analytics keys, or secrets.

Full details in the workspace `AGENTS.md` and `CONTRIBUTING.md`.
