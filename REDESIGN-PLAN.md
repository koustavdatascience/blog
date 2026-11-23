# Website Redesign Plan

## Overview
Transform matthewyu.dev into a personal blog-style website. The structure, animations, and layout stay — the content, navigation, and project section get reworked.

---

## Changes List

### 1. Name & Identity
- Replace **"Matthew Yu"** (site name in nav and hero) with your own name
- Update the **eyebrow text** (currently "DESIGNER / ENGINEER / ARTIST / STUDENT @ STANFORD") to something that describes you
- Update the **footer copyright** line
- Update the `<title>` and meta description in `app/layout.tsx`

**File:** `content/content.ts` → `site.name`, `site.footer`, `about.eyebrow`

---

### 2. Sketchbook / Diary Images
- Replace the 9 sketchbook images in `public/work/sketchbook/` with your own images
- Images should be **1280×720 (16:9 landscape)** — any normal photo or image works, no need to look like a notebook
- Update the image entries in `content/content.ts` → `sketchbook` array
- Update `content/dims.json` with the correct width and height of each new image

**Files:**
- `public/work/sketchbook/` ← drop new images here
- `content/content.ts` → `sketchbook` array
- `content/dims.json` → add new image dimensions

---

### 3. Navigation — Remove "play" and "inspiration" links
Currently the nav has: **work · play · about · inspiration** + 4 social icons

**Changes:**
- Remove the **"play"** link from nav
- Remove the **"inspiration"** link from nav
- In the social icons, keep only **Instagram** and **Email** — remove X (Twitter) and LinkedIn

**File:** `components/SiteNav.tsx` → remove the two nav links  
**File:** `content/content.ts` → `about.socials` → remove the `x` and `linkedin` entries

---

### 4. Projects Section → Blog Posts Section
The current "Projects" section is a two-column grid of work cards with cover images, year, and tag.

**Replace with a blog post feed:**
- Change the section heading from **"Projects"** to **"Blog"** (or "Posts" / "Writing" — your choice)
- Each card shows: **post title**, **date**, **short description/excerpt** (1–2 sentences), and optionally a **cover image**
- Clicking a card opens the full blog post (same modal/overlay pattern the site already uses, or a dedicated `/blog/[slug]` page)
- Blog post content (title, date, excerpt, body) will all live in `content/content.ts` as a new `posts` array — easy to add new posts just by editing that one file

**Files to change:**
- `content/content.ts` → replace `projects` array with a `posts` array
- `app/(home)/layout.tsx` → replace the work-grid section with a blog-feed section
- `components/ProjectArticle.tsx` → repurpose or replace with a `BlogPost` component
- `app/layout.tsx` → update section label

---

### 5. Footer Cleanup
- Remove **"Work"**, **"Play"**, and **"Inspiration"** links from the footer nav
- Keep: **Home**, **About**, and the two remaining socials (Instagram, Email)
- Update copyright name

**File:** `components/SiteFooter.tsx`

---

### 6. Remove / Repurpose Pages
- `/play` page — can be deleted or left for now (it won't be linked from nav)
- `/inspiration` page — same, unlinked but harmless
- `/about` page — keep, update the bio text, headshot, and socials

**File:** `content/content.ts` → `about` object

---

## File Change Summary

| File | What changes |
|---|---|
| `content/content.ts` | Name, eyebrow, footer, socials (remove 2), sketchbook images, replace projects with posts |
| `content/dims.json` | Add new sketchbook image dimensions |
| `public/work/sketchbook/` | Replace image files |
| `components/SiteNav.tsx` | Remove play + inspiration nav links |
| `components/SiteFooter.tsx` | Remove play + inspiration links, update socials |
| `app/(home)/layout.tsx` | Replace projects grid with blog feed |
| `app/layout.tsx` | Update page title + meta description |
| `components/ProjectArticle.tsx` | Repurpose as BlogPost article component |

---

## What Does NOT Change
- The page-flip sketchbook animation — stays exactly as is
- The overall visual style, fonts, and CSS
- The about page structure
- The hero layout (name + eyebrow + sketchbook)

---

## Questions to Decide Before Starting
1. **Your name** — what should replace "Matthew Yu"?
2. **Eyebrow text** — what one-liner describes you? (e.g. "WRITER / STUDENT @ ___")
3. **Section heading** — "Blog", "Posts", or "Writing"?
4. **Blog post layout** — just text, or do posts have a cover image too?
5. **New sketchbook images** — do you have them ready, or placeholder for now?
6. **About page** — update bio now or later?
