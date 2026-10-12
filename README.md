# Bridgenine

Company site for [www.bridgenine.com](https://www.bridgenine.com). Bridgenine is a consulting firm that also does workflow automation, including AI-assisted automation, and implementation. Project Alpha is one solution: a self-hosted, fully offline review system for Indonesian invoices.

Pages:

- Home — `/`
- About — `/about/`
- Services — `/services/`
- Solutions — `/solutions/`
- Project Alpha — `/project-alpha/`
- Contact — `/contact/`

The site is English. Indonesian regulatory terms such as PPN, PPh, NPWP, e-Faktur, and KBLI stay as written. No customers, testimonials, case studies, statistics, or prices are invented. Labeled placeholders sit on About (company profile), Services (engagement examples), and Solutions (further offerings).

## Stack

Next.js (App Router) and Tailwind CSS, built as a static export (`output: 'export'`). `next build` writes the site to `out/`. That folder can be hosted on Vercel or any static host.

Colors are defined in `app/globals.css`:

| Token | Hex | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Page background |
| Paper | `#F6F7F9` | Quiet bands |
| Red | `#C92929` | Buttons, short rules, errors |
| Navy | `#1C2340` | Text, logo, lines |

Red `#C92929` is the brightest red in the reference photo. Navy is the deep navy used for text. Red and navy stay small accents on a white page.

The logo in the header is a placeholder wordmark plus a simple bridge SVG (`components/logo.tsx`, `public/logo.svg`, `app/icon.svg`). Replace those files when a final logo exists.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Preview the static export:

```bash
npm run start
```

`npm run start` serves the `out/` folder. It is not `next start`, because a static export has no Node server.

Lint:

```bash
npm run lint
```

## Contact form

The form collects name, company, email, phone/WhatsApp, and message. It validates in the browser. There is no API route and no secret in the repo.

Set these **before** `npm run build`. `NEXT_PUBLIC_*` values are inlined into the static files, so a change needs a new build (or a new Vercel deployment).

| Variable | Role |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | HTTPS URL that accepts `POST` `application/json` from the browser and returns 2xx. |
| `NEXT_PUBLIC_CONTACT_ACCESS_KEY` | Optional. Added to the JSON as `access_key` for Web3Forms-style services. This key is public in the built site. Do not put a private secret here. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Used only when the endpoint is empty. Opens the visitor’s email app with a filled draft. |

Copy `.env.example` to `.env.local` for local builds.

JSON body:

```json
{
  "name": "Ada",
  "company": "Example Co",
  "email": "ada@example.com",
  "phone": "+628123456789",
  "message": "We would like a demo.",
  "_subject": "Bridgenine demo request",
  "access_key": "only if NEXT_PUBLIC_CONTACT_ACCESS_KEY is set"
}
```

The endpoint must allow browser requests from `https://www.bridgenine.com` (CORS). A hidden honeypot field named in the component is ignored when filled.

### Formspree

1. Create a form at [formspree.io](https://formspree.io).
2. Set `NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/yourFormId`.
3. Rebuild and deploy.

### Web3Forms

1. Create an access key at [web3forms.com](https://web3forms.com).
2. Set `NEXT_PUBLIC_CONTACT_ENDPOINT=https://api.web3forms.com/submit`.
3. Set `NEXT_PUBLIC_CONTACT_ACCESS_KEY` to that public access key.
4. Rebuild and deploy.

### Your own endpoint

Any URL that accepts the JSON above and returns a 2xx status works. If nothing is configured, the form still validates and then tells the visitor the message was not sent.

## Deploy on Vercel

1. Import the GitHub repository. Framework preset: Next.js.
2. Build command: `npm run build` (the default). Vercel publishes the static `out/` directory because `output: 'export'` is set.
3. Add the contact variables under Project Settings → Environment Variables before the first production deploy.
4. Deploy.

### Point bridgenine.com at Vercel

In the Vercel project, open Settings → Domains and add both:

- `www.bridgenine.com` (primary)
- `bridgenine.com` (redirect to `www`)

At the DNS provider, use the records shown on the Vercel domain card. The usual pair is:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` (or the A value Vercel shows for this project) |
| CNAME | `www` | the project CNAME target Vercel shows, such as `xxxx.vercel-dns-017.com` |

Use the values from the domain card, not another project’s records. Remove old A/AAAA/CNAME records for the same host names. Vercel provisions HTTPS after DNS propagates.

`www` as the primary domain matches the canonical URLs in this site (`https://www.bridgenine.com/...`).

## Deploy on any static host

1. `npm run build`
2. Upload the contents of `out/`.
3. `trailingSlash: true` emits each route as a folder with `index.html` (`/about/index.html`). A host that serves directory indexes will resolve `/about/`.
4. For hosts that do not map extensionless paths, use a rewrite such as Nginx `try_files $uri $uri.html $uri/ =404` and point the error page at `/404.html`.
5. Set the contact variables in the build environment, then rebuild. Static hosts do not read them at request time.

Canonical, Open Graph, Twitter, `sitemap.xml`, and `robots.txt` assume `https://www.bridgenine.com`.
