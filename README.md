# Frontend Mentor - Hotel booking confirmation page

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hotel-booking-confirmation-page). The implementation is built with Astro and focuses on a warm, editorial hospitality aesthetic with responsive navigation, layered booking cards, and a curated amenity panel.

## Overview

### The challenge

The goal of the challenge is to create a polished booking confirmation experience that feels like a luxury boutique hotel welcome. The current implementation matches that direction with:

- A responsive layout that adapts between mobile and desktop
- A sticky, branded header with a mobile slide-out menu and desktop sidebar navigation
- A layered hero treatment built around a welcome card and booking receipt
- Hover interactions that animate the card stack and highlight the UI
- Styled amenity blocks for check-in, Wi‑Fi, and breakfast information

### Links

- Repository: [Robertron624/FM-hotel-booking-confirmation](https://github.com/Robertron624/FM-hotel-booking-confirmation)
- Local preview: `pnpm dev` then open `http://localhost:4321`

## My process

### Built with

- [Astro](https://astro.build/)
- [SCSS](https://sass-lang.com/)
- CSS custom properties and design tokens
- Responsive Flexbox and CSS Grid layouts
- Static data-driven content from TypeScript objects

### Project structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/
│   │   ├── AmenitiesCard.astro
│   │   ├── Receipt.astro
│   │   ├── WelcomeCard.astro
│   │   └── header/
│   │       ├── DesktopSidebar.astro
│   │       ├── Header.astro
│   │       └── MobileMenu.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   ├── _breakpoints.scss
│   │   └── globals.scss
│   ├── amenitiesData.ts
│   ├── env.d.ts
│   └── types.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

### What I implemented

The current app is a single-page Astro landing page built from reusable UI components:

- `src/pages/index.astro` renders the main booking confirmation layout and control flow
- `src/components/WelcomeCard.astro` creates the host welcome message card
- `src/components/Receipt.astro` renders the stay summary and total paid details
- `src/components/AmenitiesCard.astro` reuses the amenity panel pattern and supports both plain text and list-based details
- `src/components/header/Header.astro`, `DesktopSidebar.astro`, and `MobileMenu.astro` provide the branded navigation for mobile and desktop breakpoints
- `src/amenitiesData.ts` stores the actual hotel information: arrival note, Wi‑Fi details, and breakfast timing

### Design decisions and learnings

One of the most important details in this build was the layering of the cards. The welcome card and receipt are intentionally offset and animated on hover so the composition feels like a physical stack of confirmations rather than a flat layout.

I also used CSS custom properties extensively for the palette and typography, which keeps the design consistent across the warm neutrals and terracotta accents. The custom font setup in `src/styles/globals.scss` matches the editorial styling from the mockup without relying on external UI libraries.

The project also demonstrates a practical Astro pattern: component styles stay scoped, but hover transforms that target child component classes need `:global(...)` selectors to work correctly when a parent component controls the animation.

### Continued development

If this project were extended, the next natural improvements would be:

- Adding a real copy-to-clipboard interaction for the Wi‑Fi password
- Hooking navigation items to actual destination pages or tabs
- Refining the motion system for more advanced micro-interactions
- Capturing a final screenshot for the README and project demo

### Useful resources

- [Astro Documentation](https://docs.astro.build/)
- [Frontend Mentor Challenge](https://www.frontendmentor.io/)
- [Sass Documentation](https://sass-lang.com/documentation/)

### AI collaboration

GitHub Copilot was used during the implementation to help with:

- structuring the reusable Astro components
- refining the SCSS for responsive behavior and hover states
- checking accessibility labels and focus styling
- turning the challenge brief into a coherent, data-driven UI pattern

The workflow was especially useful for iterative CSS adjustments and component cleanup while keeping the design close to the original concept.

## Author

- GitHub: [Robertron624](https://github.com/Robertron624)
- Project: Hotel booking confirmation page built in Astro

## Acknowledgments

This challenge was implemented as a Frontend Mentor exercise and uses the provided design system, typography, and visual direction as the basis for the final UI.
