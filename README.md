# BotLeague Frontend Assignment

A clean, professional, single-page frontend application for the BotLeague robotics tournament platform, refactored from a boilerplate-heavy SSR setup into a maintainable, client-side React + Vite + TypeScript application.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **TanStack Router** (Client-Only)

## Project Structure Overview

```
Assignment/
├── index.html                  # App mounting root and metadata/font links
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript path alias and module resolution configurations
├── vite.config.ts              # Vite plugins (React, TS paths, Tailwind v4 compiler, Router)
├── eslint.config.js            # Clean ESLint rules
├── src/
│   ├── main.tsx                # Client mount entry point
│   ├── router.tsx              # Router instantiation context
│   ├── routeTree.gen.ts        # Generated route tree
│   ├── styles.css              # Stylesheet with Tailwind v4 theme and custom fonts
│   ├── assets/
│   │   └── images/             # Extracted image assets (logo, sponsors, events)
│   ├── components/
│   │   ├── layout/             # Shared page layouts (Navbar, Footer)
│   │   └── sections/           # Modular data-driven section components for index page
│   ├── data/
│   │   └── sectionsData.ts     # Data-driven configuration maps (journey, categories, sponsors)
│   ├── lib/
│   │   └── utils.ts            # Tailwind class names merge helper (cn)
│   └── routes/                 # File-based routing pages (Home, Events, Programs, Community, Login, Register)
```

## Getting Started

### Installation

Install dependencies using `npm`:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

### Build

Compile and bundle the production assets:

```bash
npm run build
```
