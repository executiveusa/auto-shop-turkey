# Everett Auto Works Design Audit

## Scorecard
| Dimension | Score | Notes |
| --- | --- | --- |
| Typography | 0.7 | Tailwind applies the Inter sans stack globally and uses a clear heading hierarchy from `text-4xl` hero titles down to `text-sm` body copy, but sizes are hard-coded per component rather than tokenized.【F:src/styles/globals.css†L9-L18】【F:src/components/sections/Hero.tsx†L10-L18】【F:src/components/layout/Layout.tsx†L24-L66】
| Color & Theming | 0.4 | Primary/secondary colors are defined once, yet accent and success hues fail WCAG contrast when used for text on light backgrounds (2.80:1 and 2.28:1 against white).【F:tailwind.config.ts†L9-L17】【275f19†L1-L26】
| Layout & Spacing | 0.75 | Pages consistently center content in `max-w-6xl` grids with 16-unit vertical rhythm, though spacing scales are implicit per utility class.【F:src/components/sections/ServiceGrid.tsx†L16-L43】【F:src/pages/book.tsx†L9-L25】
| Component Consistency | 0.6 | Buttons share rounded-pill silhouettes but mix accent and primary fills with bespoke hover states, hinting at duplication risk.【F:src/components/sections/Hero.tsx†L13-L18】【F:src/components/forms/ServiceInquiryForm.tsx†L57-L89】
| Responsiveness | 0.8 | Grid layouts switch at `md` and `lg` breakpoints across sections and forms, covering desktop/tablet flows.【F:src/components/sections/ServiceGrid.tsx†L26-L41】【F:src/components/forms/AppointmentForm.tsx†L53-L93】
| Accessibility | 0.4 | Labels and aria attributes exist, but contrast failures and `focus:outline-none` on inputs risk keyboard visibility.【F:src/components/forms/AppointmentForm.tsx†L56-L87】【275f19†L1-L26】
| Interaction & Motion | 0.6 | Transition utilities provide subtle hover elevation and translation, yet there is no reduced-motion handling.【F:src/components/sections/Hero.tsx†L13-L18】【F:src/components/sections/ServiceGrid.tsx†L31-L38】
| Semantic Structure | 0.8 | Pages rely on semantic headings and list markup for content sections and bullet lists.【F:src/pages/blog.tsx†L10-L24】【F:src/pages/services/engine-repair.tsx†L9-L27】
| Asset Performance | 0.3 | Hero loads an external Unsplash background via CSS with no optimization or lazy strategy, and Google Maps iframes ship by default.【F:src/components/sections/Hero.tsx†L7-L11】【F:src/pages/contact.tsx†L15-L26】
| Brand Cohesion | 0.6 | Gradient hero and trust palette reinforce automotive branding, but inconsistent button colors weaken a unified accent system.【F:src/components/sections/Hero.tsx†L7-L18】【F:src/components/layout/Layout.tsx†L50-L57】
| Localization Readiness | 0.9 | `next-intl` loads locale bundles per request and navigation strings live entirely in translation JSON, supporting four languages.【F:src/lib/i18n/request.ts†L5-L12】【F:public/locales/en/common.json†L2-L112】
| Code-to-Design Mapping | 0.5 | Colors and spacing rely on literal Tailwind utilities instead of shared tokens, making future rebrands harder.【F:tailwind.config.ts†L9-L20】【F:src/components/forms/QuoteForm.tsx†L55-L90】
| Historical Drift | 0.2 | No prior token set or snapshots exist, so design changes cannot be compared over time (baseline established in this audit).【assumption】
| Layout Integrity Metrics | 0.7 | Sections keep consistent card radii and border treatments, but lack defined gutters for smaller breakpoints.【F:src/components/sections/SeasonalCampaigns.tsx†L8-L23】【F:src/components/layout/Layout.tsx†L62-L93】
| Error & Empty States | 0.5 | Forms surface inline validation but only log server failures to the console, leaving users without guidance on retry.【F:src/components/forms/AppointmentForm.tsx†L43-L48】【F:src/components/forms/QuoteForm.tsx†L33-L48】

## Design Correction Map
| Criterion | Finding | Recommended Fix | Support Score | Evidence |
| --- | --- | --- | --- | --- |
| Color contrast | Accent (`#f97316`) and success (`#22c55e`) text on light surfaces fall below WCAG 4.5:1, impacting CTAs and status alerts. | Update accent to a deeper orange (`#c2410c`) and success to a richer green (`#15803d`), then document their usage as tokens. | 0.9 | 【F:tailwind.config.ts†L9-L17】【275f19†L1-L26】【a0694b†L1-L24】【506829†L1-L24】 |
| Accessibility focus states | Inputs strip default outlines via `focus:outline-none`, relying solely on border color shifts that may not satisfy non-color cues. | Introduce tokenized focus ring styles (e.g., 2px primary ring + shadow) and apply via reusable component classes. | 0.6 | 【F:src/components/forms/AppointmentForm.tsx†L56-L87】 |
| Error feedback | API failures only log to console, leaving no user-visible recovery guidance. | Extend form handlers to show inline error banners tied to a semantic `aria-live` region. | 0.5 | 【F:src/components/forms/AppointmentForm.tsx†L43-L48】【F:src/components/forms/QuoteForm.tsx†L41-L47】 |
| Asset performance | Hero background loads a full-size Unsplash image without optimization. | Replace with `<Image>` component using responsive sizes or host compressed local assets referenced by tokens. | 0.4 | 【F:src/components/sections/Hero.tsx†L7-L11】 |

## Token Changelog
- Initial token set established; no previous `design_tokens.json` existed for comparison.
