# Egoric Agency Website

Vietnamese-first premium website prototype for Egoric Agency, focused only on strategic seeding and conversation activation.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis smooth scrolling

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run typecheck
npm run build
```

## Site Pages

- `/` - Trang chủ
- `/about` - Về Egoric
- `/seeding-services` - Dịch vụ Seeding
- `/method` - Phương pháp Egoric
- `/case-studies` - Case Study
- `/contact` - Campaign brief form

## Content Updates

Most repeated content lives in `lib/content.ts`:

- Navigation
- Services
- Method steps
- Audience cards
- Case studies
- Reporting items
- Why Egoric points
- Signal flow labels

For real case studies, replace the placeholder records in `caseStudies` with:

- `title`
- `challenge`
- `move`
- `outcome`

Keep claims specific and evidence-based. Avoid fake viral claims, fake reviews, impersonation, competitor attacks, or misinformation language.

## Brand Asset

Logo file:

```text
public/brand/egoric-logo.jpg
```

## SEO

Global metadata is in `app/layout.tsx`.

Generated routes:

- `app/sitemap.ts`
- `app/robots.ts`

Update the `baseUrl` in `app/sitemap.ts` when the production domain is confirmed.
