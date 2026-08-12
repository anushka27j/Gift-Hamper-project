# 🎁 Gift Hamper Customizer

A React web app that lets users build their own gift hamper instead of being locked into a pre-set bundle — choose an occasion, pick a box, select exactly the items you want, and review a summary before checkout.

## The Problem It Solves

Most online gift hamper sites sell fixed bundles — you're stuck paying for items you don't want just to get the ones you do. This app flips that: users pick their occasion, box style, and individual items one by one, building a hamper that's actually theirs.

## Features

- **Step-by-step flow** — Occasion → Box → Items → Summary, guided by a persistent sidebar navbar
- **Custom item selection** — toggle individual items in and out of the hamper, with live visual feedback
- **Global state management** — hamper selections (occasion, box, items) persist across pages using React Context, so nothing resets as the user navigates
- **Simple auth gate** — login screen before the app is accessible (demo-level auth, not production security)
- **Responsive card-based UI** — clean, modern styling with hover states and a warm color palette

## Tech Stack

- **React** (functional components + Hooks)
- **React Router** for page navigation
- **React Context API** for shared state across the hamper-building flow
- **CSS** (component-scoped stylesheets, no external UI library)

## Project Structure

```
src/
├── context/
│   └── GiftContext.js       # Shared state: occasion, box, selected items
├── pages/
│   ├── LoginForm.js/.css
│   ├── Navbar.js/.css
│   ├── OccasionPage.js/.css
│   ├── BoxSelectionPage.js/.css
│   ├── ItemSelectionPage.js/.css
│   └── SummaryPage.js/.css
├── App.js                   # Route definitions + auth gate
├── App.css
├── index.js
└── index.css
public/
└── images/                  # Occasion images (birthday, anniversary, etc.)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm start
```

The app will run at `http://localhost:3000`.

**Demo login:** username `admin`, password `password` (authentication is a mock layer for demo purposes, not intended for production use).

## What I'd Improve Next

- Replace the mock auth with real authentication (e.g. Firebase Auth or a backend with JWT)
- Add a backend to actually process and store orders
- Add price calculation/checkout flow based on selected box + items
- Persist hamper selections in localStorage so refreshing doesn't lose progress

## About

This was my first full personal project built from scratch — all design and coding done independently, including working through backend/state-management challenges as a first-time React developer.
