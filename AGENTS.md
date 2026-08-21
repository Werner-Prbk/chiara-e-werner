# AGENTS.md

## Project purpose

This repository contains the static wedding-information website for Chiara and Werner.

- Production URL: `https://www.chiara-e-werner.it`
- Hosting: GitHub Pages
- Languages: German (`de`) and Italian (`it`)
- The root landing page is the only language selector. After choosing a language, visitors remain in that language's section, and no language selector or language-switch control is shown on localized pages.
- The landing page displays the shared save-the-date details and prominent links labeled `Deutsch` and `Italian`.
- On the landing page, JavaScript localizes the displayed date from the browser language: German uses `11. Juni 2027`, Italian uses `11 giugno 2027`, and every other or unavailable language uses `11 June 2027`. Keep the English date in HTML as the no-JavaScript fallback.

Keep the site lightweight, elegant, easy to maintain, and usable on mobile devices. Do not introduce a framework, build step, CMS, package manager, or server-side dependency unless the maintainers explicitly request one.

Always prefer semantic HTML and responsive CSS over JavaScript. Use JavaScript only when the required behavior cannot reasonably be achieved with HTML and CSS; never use it for basic layout, spacing, responsive typography, or other presentation that CSS can handle.

## Required project structure

Use this structure for new work:

```text
/
|-- index.html              # Language-selection landing page only
|-- CNAME                   # www.chiara-e-werner.it
|-- assets/
|   |-- css/
|   |   `-- styles.css      # Shared presentation and responsive styles
|   |-- js/                 # Shared JavaScript, only when necessary
|   |-- fonts/
|   `-- images/
|-- de/
|   |-- index.html          # German overview/home page
|   `-- <page>/index.html   # Additional German pages
`-- it/
    |-- index.html          # Italian overview/home page
    `-- <page>/index.html   # Matching Italian pages
```

German and Italian HTML content must stay in their respective folders. The two language sections may differ in pages, navigation, and content. This is intentional because some information may be relevant only to German-speaking visitors or only to Italian-speaking visitors. Create a translated counterpart only when the same information is useful to both audiences.

Store shared styling and behavior in `assets/`; do not duplicate CSS or JavaScript inside language folders. Use semantic HTML for content and CSS classes for presentation. Avoid inline styles and avoid embedding substantial scripts in HTML.

The current shared visual baseline is a full-viewport hero using `assets/images/tuscany-1.jpg`. Use Cormorant Garamond for primary text and the local Adventures Unlimited Script font for the “Save the date” heading. Preserve this baseline unless the maintainers explicitly request a redesign.

## URLs and navigation

- Link the root selector to `de/` and `it/`.
- Keep the root landing-page labels exactly `Deutsch` and `Italian` unless the maintainers request different wording.
- Do not show a language selector, language switch, flags, or links to the other language on pages inside `de/` or `it/`.
- Localized navigation should include only pages relevant to the selected audience.
- Use relative, directory-based links that work both on the custom domain and GitHub Pages, for example `../it/` or `../../assets/css/styles.css` as appropriate.
- Do not hard-code repository-specific GitHub Pages paths.
- Prefer lowercase, ASCII directory and file names with hyphens.
- Preserve clean URLs by using `<page>/index.html` rather than `<page>.html`.
- Add correct `<html lang="de">` or `<html lang="it">` attributes and matching `hreflang` links where appropriate.

## Content and translations

- Treat German and Italian as equal, first-class sections of the website, but do not assume they must contain identical information.
- Do not mix languages on a localized page, except for names, established place names, or intentionally shared phrases.
- Keep shared facts such as dates, times, addresses, and RSVP details consistent wherever they appear in both sections.
- Audience-specific guidance may appear in only one language section when it is not useful to the other audience.
- Translate meaning naturally; do not rely on automatic word-for-word translations for final copy.
- Use UTF-8 and preserve German and Italian characters directly (`ä`, `ö`, `ü`, `ß`, accented Italian characters, and typographic punctuation).
- If copy or a translation is uncertain, flag it clearly instead of inventing wedding details.

## Mobile-first and accessibility requirements

- Design mobile-first and test at narrow widths starting around 320 px.
- Every page must include the viewport meta tag.
- Avoid horizontal scrolling and fixed-width layouts.
- Prioritize comfortable reading on mobile phones: use an appropriate base font size (normally at least 16 CSS pixels for body text), generous line height, sensible line lengths, and clear spacing between sections.
- Use responsive typography and spacing, preferably with `clamp()` and relative units. Text must not become too small, overflow, overlap, or require zooming at narrow viewport widths.
- Keep the layout visually simple on small screens. Stack content where needed and ensure headings, paragraphs, navigation, and calls to action remain easy to scan.
- Make navigation and controls comfortably touchable (about 44 by 44 CSS pixels minimum).
- Use semantic landmarks, a logical heading order, keyboard-accessible controls, visible focus states, and sufficient color contrast.
- Provide meaningful alternative text for informative images and empty alternative text for decorative images.
- Respect `prefers-reduced-motion`; essential information must never depend on animation, hover, sound, or color alone.
- Account for mobile browser viewport behavior; prefer modern viewport units such as `svh` or `dvh` with a sensible fallback when building full-screen sections.
- Keep primary event information and the landing-page language links visible, readable, and operable on common phone screens in both portrait and landscape orientations.

## Static-site constraints

- The deployed site must work as plain HTML, CSS, JavaScript, fonts, and images served by GitHub Pages.
- Keep a root-level `CNAME` containing exactly `www.chiara-e-werner.it`.
- Paths are case-sensitive in production even if they work locally on Windows.
- Do not depend on URL rewriting, server-side includes, environment variables, or runtime secrets.
- JavaScript should be progressive enhancement only. Core content and navigation must remain usable if JavaScript is unavailable.
- Optimize images for the web, specify dimensions where possible, and lazy-load non-critical images.
- Prefer local assets. Any third-party resource must use HTTPS and should be justified for privacy, reliability, and performance.

## Styling conventions

- Keep visual design rules in shared CSS files under `assets/css/`.
- Use a small set of CSS custom properties for colors, typography, spacing, widths, and breakpoints.
- Reuse components and class names across both language versions.
- Name classes by purpose or component, not by a page's translated wording.
- Avoid `!important` unless overriding an unavoidable third-party rule.
- Preserve the established wedding aesthetic unless a redesign is explicitly requested.

## Change checklist

Before considering a change complete:

1. Confirm the root language selector reaches both localized sections.
2. Confirm no language selector or cross-language link is visible after entering either localized section.
3. Confirm shared wedding facts remain consistent across both sections; do not require audience-specific pages to have a translated counterpart.
4. Check internal links and asset paths from the root and from nested pages.
5. Check keyboard navigation, focus visibility, headings, labels, and image alternatives.
6. Check layouts at mobile, tablet, and desktop widths, including a 320 px viewport.
7. Confirm body text is comfortably readable without zooming and that navigation and content remain easy to scan on a phone.
8. Confirm there is no unintended horizontal scrolling and no text overlaps the viewport.
9. Confirm the site works as static files without a development server or build step.
10. Confirm `CNAME` remains present and unchanged unless the domain itself is intentionally changed.

When automated checks are unavailable, report which checks were performed manually and which remain unverified.
