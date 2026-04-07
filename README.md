# Montara Education Website

A 3-page static website for Montara Education.

## Project Structure

```
montara-site/
├── index.html          # Main HTML — all 3 pages (Home, Test Prep, Counseling)
├── styles.css          # All styles
├── main.js             # Page navigation logic
├── assets/
│   └── logo.png        # Montara Education logo
└── README.md
```

## Pages

- **Home** — Hero, trust bar, service cards, stats, testimonials, contact form
- **Test Prep** — Program offerings, 4-step process, CTA
- **College Counseling** — 6 service areas, 4-step process, CTA

## Brand

- Primary: #00674B (forest green)
- Black: #000000
- White: #ffffff
- Fonts: Playfair Display (headings), DM Sans (body) — loaded from Google Fonts

## Deployment

This is a plain static site — drop it anywhere:

- **Vercel**: `vercel --prod` from this directory
- **Netlify**: drag-and-drop the folder in the Netlify UI
- **GitHub Pages**: push to a repo and enable Pages

## Next Steps for Claude Code

- Wire up the contact form (e.g. Formspree, EmailJS, or a custom endpoint)
- Add real testimonials and accurate stats
- Update trust bar schools to match actual client base
- Add a meta description and favicon
- Consider converting to Next.js or Astro if you want CMS integration
