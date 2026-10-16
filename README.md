# Guanacaste sites

Three standalone lead sites, one per trade, each on its own domain and its own Netlify site:

| Folder | Domain | Netlify package directory |
|---|---|---|
| `ac/` | guanacasteac.com | `ac` |
| `bugcontrol/` | guanacastebugcontrol.com | `bugcontrol` |
| `roofing/` | guanacasteroofing.com | `roofing` |

`shared/` holds what all three use (the page layout, and later the request form and consent text). Each site is an Astro project and an npm workspace.

## Run one site locally

```bash
npm install
npm run dev:ac
```

## How a change ships

Work on a branch and open a pull request. Netlify builds a preview for each site the change touches; a site whose folder, `shared/` and dependencies did not change skips its build. Loic checks the previews and merges to `main`, which publishes.

## Before launch

Each site has `public/robots.txt` blocking all crawlers and a `noindex` on every page. On launch day: replace robots.txt with an allow-all version that points to the sitemap, remove `noindex`, and add the domain to Google Search Console.
