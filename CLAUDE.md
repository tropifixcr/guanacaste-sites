# Guanacaste sites

The three category sites of TropiFix's rent-a-site business: guanacasteac.com (`ac/`), guanacastebugcontrol.com (`bugcontrol/`) and guanacasteroofing.com (`roofing/`). See `README.md` for the layout.

Before any work, read:

- `../TropiFix/CLAUDE.md`: the project rules (standing rules for every site, SEO and AEO, honesty about who answers, Higgsfield cost approval, how changes ship, facts that need Loic's OK, how JP's Drive articles become pages).
- `../tropifix-planning/project-context.md`: the project brief and decisions. Pull it first.

Rules specific to this repo:

- Each site stands alone under its own name, with no TropiFix branding, and gets its own look so the three do not read as copies. The TropiFix brand book does not apply here. Do not link the three sites to each other.
- Shared code goes in `shared/`; anything specific to one trade stays in that site's folder. A change to `shared/` rebuilds all three sites, so check all three previews.
- Each site has its own `netlify.toml`; paths in it are relative to the repo root.
- Until launch, every page is `noindex` and `robots.txt` blocks crawlers. Do not remove either without Loic's OK.
- Loic merges; Claude never merges to `main`.
