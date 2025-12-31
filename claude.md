# The DevLab - Project Overview

A professional portfolio and services website for George Hatzi using a headless CMS architecture.

**Domain**: the-devlab.com

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Sanity.io (CMS Backend)                   │
│  Project ID: o9tmumau | Dataset: production                 │
└─────────────────────────────────────────────────────────────┘
                          ↑ Content Updates
                          ↓ GROQ Queries
┌─────────────────────────┐       ┌───────────────────────────┐
│   Studio (CMS Admin)    │       │      Web (Frontend)       │
│   React + Sanity Studio │       │      Nuxt + Vue 3         │
│   Port: 3333            │       │      Port: 3000           │
└─────────────────────────┘       └───────────────────────────┘
```

## Tech Stack

| Layer         | Technology   | Version |
| ------------- | ------------ | ------- |
| Web Framework | Nuxt         | 4.2.0   |
| Web Runtime   | Vue          | 3.5.22  |
| Styling       | Tailwind CSS | 4.1.17  |
| Components    | PrimeVue     | 4.4.1   |
| Icons         | PrimeIcons   | 7.0.0   |
| CMS           | Sanity.io    | 4.22.0  |
| Studio UI     | React        | 19.2.3  |
| Type Safety   | TypeScript   | 5.9.3   |

## Project Structure

### Web (`/web`)

Nuxt 4 frontend application serving the public website.

```
web/
├── app/
│   ├── app.vue                 # Root component
│   ├── app.config.ts           # Site config (name, URL, logo, socials)
│   ├── components/
│   │   ├── AppHeader.vue       # Navigation header
│   │   ├── AppMenuBar.vue      # Menu with language selector
│   │   ├── AppHero.vue         # Hero section
│   │   ├── AppCard.vue         # Reusable card
│   │   ├── AppFooter.vue       # Footer with nav & socials
│   │   ├── AppSocials.vue      # GitHub & LinkedIn links
│   │   └── sections/
│   │       ├── AppAbout.vue    # About section
│   │       ├── AppToolkit.vue  # Tech stack showcase
│   │       ├── AppTestimonials.vue
│   │       └── AppContact.vue  # Contact form
│   ├── composables/
│   │   ├── useSanityData.ts    # CMS data fetching
│   │   ├── useLanguage.ts      # Language state
│   │   └── useTranslations.ts  # i18n lookup
│   ├── data/
│   │   ├── navigation.ts       # Nav items
│   │   └── languages.ts        # Supported: en, bg
│   ├── locales/
│   │   ├── en.ts               # English translations
│   │   └── bg.ts               # Bulgarian translations
│   ├── utils/
│   │   ├── sanity.js           # Sanity client factory
│   │   └── queries/main.ts     # GROQ query
│   └── assets/css/main.css     # Global styles
├── public/                     # Static assets, favicons, PWA
├── nuxt.config.ts              # Nuxt configuration
└── package.json
```

### Studio (`/studio`)

Sanity Studio for content management.

```
studio/
├── schemaTypes/
│   ├── index.ts        # Schema exports
│   ├── main.ts         # Main document schema (all sections)
│   └── avatar.ts       # Testimonial avatar schema
├── sanity.config.ts    # Studio configuration
├── sanity.cli.ts       # CLI configuration
└── package.json
```

## Content Schema

### Main Document

- **SEO**: `seoTitle`, `seoDescription`
- **Hero**: heading, context (rich text), image, button
- **About**: heading, context, highlights (title, body, icon)
- **Toolkit**: heading, context, stack (title, tags, icon)
- **Testimonials**: heading, testimonials (name, quote, avatar)
- **Contact**: heading, context, email, location

### Avatar Document

- Referenced by testimonials
- Fields: `name`, `image`

## Features

- **Multi-language**: English (en) and Bulgarian (bg)
- **SSR**: Server-side rendering for SEO
- **Responsive**: Mobile-first design
- **Content-managed**: All content editable via Sanity Studio
- **Real-time updates**: Changes reflect immediately via Sanity CDN

## Development

### Web App

```bash
cd web
npm install
npm run dev  # http://localhost:3000
```

### Studio

```bash
cd studio
npm install
npm run dev  # http://localhost:3333
```

## Key Files Reference

### Web

- `web/nuxt.config.ts` - Nuxt config with Sanity runtime config
- `web/app/app.vue` - Root component rendering all sections
- `web/app/composables/useSanityData.ts` - CMS data fetching
- `web/app/utils/queries/main.ts` - GROQ query for content

### Studio

- `studio/sanity.config.ts` - Sanity Studio setup
- `studio/schemaTypes/main.ts` - Content schema definition

## Environment

- **Sanity Project ID**: `o9tmumau`
- **Dataset**: `production`
- **API Version**: `2025-11-09`
