# AGENTS.md — TA-site

Routing for non-Claude agents (Codex, Antigravity, Cursor, Gemini, Aider, …)
working in `TA-site`, the public landing page of Talent Angels.

## Read first

1. `../CLAUDE.md` — **authoritative** project policy (git, DCO, secrets,
   conventions). On GitHub: `LFX-Talent-Angels/TA-workspace`.
2. `../docs/architecture/SYSTEM.md` — cross-repo architecture.
3. `CLAUDE.md` in this repo — boundaries. Keep both files in sync.

## Rules (summary)

- **Landing page only.** Not the chat frontend (`TA-app`), not the runtime
  (`TA-agents`), not taxonomies (`TA-taxonomies`).
- Keep it static. Never call the FastAPI edge or the graphs from here.
- The stack and deploy target are undecided — choose them in a PR that explains
  the tradeoff, don't scaffold a framework silently.
- Personal research and notes go in `TA-lab/mentees/<handle>/`, not here.
- Fork or branch, then PR. Every commit DCO signed-off (`git commit -s`). Never
  push to `main`. Never commit `.env*` files, analytics keys, or secrets.
