# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

There is no build step. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Babel transpiles JSX at runtime via CDN — no compilation needed locally.

## Architecture

This is a **no-bundler React prototype**: React, ReactDOM, and Babel are loaded from unpkg CDNs. JSX files are loaded as `type="text/babel"` scripts. The load order in `index.html` is significant — files must be loaded in this exact sequence:

1. `tweaks-panel.jsx` — design-tweak system + `useTweaks` hook
2. `data.jsx` — content constants (`PRACTICE_AREAS`, `ATTORNEYS`, `CLIENTELE`)
3. `components.jsx` — shared primitives (`Icon`, `useReveal`, `useScrollSpy`)
4. `sections.jsx` — page sections (`Nav`, `Hero`, `About`, `Practice`, `Clientele`, `Attorneys`, `Contact`, `Footer`, `AttorneyModal`)
5. `app.jsx` — root `<App>` component, mounts to `#root`

Since there is no module system, every exported symbol is attached to `window` at the bottom of each file. Components from earlier files are available as globals in later ones.

## TweaksPanel / edit-mode protocol

`tweaks-panel.jsx` ships a self-contained design-tweak panel used during prototyping. Key behaviours:

- The `TWEAK_DEFAULTS` block in `app.jsx` is wrapped in `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` markers. A host embedding this page in an iframe can rewrite the JSON inside that block on disk via a `__edit_mode_set_keys` postMessage, making tweak values persistent across page reloads.
- The panel appears only when the host sends `__activate_edit_mode` and hides on `__deactivate_edit_mode`. On load it announces itself with `__edit_mode_available`.
- `useTweaks(defaults)` returns `[values, setTweak]`. Call `setTweak('key', value)` or `setTweak({ key: value })` — both are supported.

## Content data

All editable content lives in `data.jsx`:
- `PRACTICE_AREAS` — six practice area objects (`num`, `name`, `desc`, `tags[]`)
- `ATTORNEYS` — two attorney objects with full bio, credentials, and initials for portrait placeholder
- `CLIENTELE` — three client-type cards

## CSS design tokens

Colors are OKLCH and set dynamically via CSS custom properties. `applyHues()` in `app.jsx` writes `--gold`, `--gold-hi`, `--gold-lo`, `--navy`, `--navy-hi`, `--rule`, `--rule-strong` based on hue sliders. Section backgrounds use `.dark`, `.darker`, and `.cream` utility classes.

## Contact form

`ContactForm` in `sections.jsx` only does client-side validation — there is no backend submission. On valid submit it flips to a success state. Wiring up a real endpoint (e.g. Formspree, Netlify Forms) is a pending TODO.
