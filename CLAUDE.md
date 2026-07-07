# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@orif-informatique/react-components-library` — a publishable React component library (Rollup + Storybook + Tailwind v4). It has no application entry point; the deliverable is the `dist/` bundle plus `styles.css` consumed by other projects as peer-dependent React components.

## Commands

```bash
npm run storybook        # dev server on :6006 — primary way to develop/preview components
npm run build             # rollup -c → builds dist/index.esm.js, dist/index.cjs.js, dist/styles.css
npm run clean              # rimraf dist (also runs automatically before build via prepack)
npm run build-storybook   # static storybook build → storybook-static/
npm pack                  # build a local tarball for testing in a consumer project without publishing
```

There is no test runner or lint script configured — `@vitest/spy` is present as a devDependency but there are no test files yet. Verify changes via Storybook and/or `npm run build`.

There is no CI-facing single-test command since there are no tests; when adding a component, verify it visually in Storybook.

### Releasing

Version bump + build, then publish (see README for full detail):

```bash
npm version patch|minor|major -m "chore(release): %s"
npm publish --access public   # after npm whoami confirms the correct account
```

## Architecture

### Component layout

Every component lives under `src/ui/<component-name>/` as a pair: `ComponentName.jsx` + `ComponentName.stories.jsx`. Some folders group related variants (e.g. `src/ui/inputs/<type>/`, `src/ui/buttons/<variant>/`). There is no per-component index file — everything is re-exported centrally.

### Central export surface (`src/index.js`)

All public API flows through `src/index.js`. It also does `import "./index.css"` at the top, which is what makes Tailwind's `sideEffects: ["*.css"]` bundling work — **any new component must be exported here** or it won't be part of the published package. Note `DefaultButton` and `Button` are both aliases for the same `Button.jsx` default export — follow that pattern (a `Default`-prefixed alias) if a similar naming collision arises.

### Styling: Tailwind v4, no config file

Tailwind v4 uses CSS-based config, not `tailwind.config.js` — theme tokens (colors, fonts, animations) are defined in `src/index.css` via `@theme`. The custom color tokens are `primary`, `background`, `disabled`, `danger`. Match new components to these tokens rather than raw hex values or ad hoc Tailwind colors.

Component styling conventions (see `src/ui/buttons/default/Button.jsx` and `src/ui/nav-bar/NavBar.jsx` for canonical examples):
- Variant/size logic is expressed as local `switch` helper functions (`buttonMode(variant)`, `buttonSize(size)`) returning class strings, not lookup objects, is the dominant pattern in older components — newer ones (`NavBar`) use `clsx(...)` to compose classes and accept per-part `className` override props (e.g. `buttonClassName`, `listClassName`, `linkClassName`) so consumers can restyle sub-elements. Prefer `clsx` for new components.
- Every component accepts a `className` prop merged into its root element's classes for consumer overrides.

### Icon system (`src/ui/icon/Icon.jsx`)

All icons are inlined SVGs in one large lookup object keyed by name (`icons[name]`), not separate files/imports. To add a new icon, add an entry to that object and to the `PropTypes.oneOf(Object.keys(icons))` validation (automatic since it derives from the same object). `size` and `color` are also constrained to fixed maps (`sizeClasses`, `colorClasses`) inside the same file — extend those maps rather than passing arbitrary Tailwind classes through props.

### Props conventions

- `PropTypes` (not TypeScript) on every component, declared as `Component.propTypes = {...}` after the component definition.
- Default values are set via destructuring defaults in the function signature, not `defaultProps`.
- Boolean/behavior props favor explicit named enums (`PropTypes.oneOf([...])`) over booleans when there are more than two states (e.g. `variant`, `size`, `burgerPosition`).

### Build pipeline (`rollup.config.js`)

- Single entry point `src/index.js`; `react`/`react-dom` are external (peer deps), not bundled.
- JSX is compiled via `rollup-plugin-esbuild` (`jsx: 'automatic'`), not Babel.
- CSS goes through `rollup-plugin-postcss` with the Tailwind v4 PostCSS plugin, autoprefixer, and cssnano (`mergeRules: false` is required — merging breaks Tailwind's responsive variants).
- A custom `inlineCssIcons()` plugin post-processes `dist/styles.css` after build, inlining any `url(assets/icons/*.svg)` references as base64/data URIs by reading from `src/assets/icons` or `src/styles/assets/icons`. This only matters if a component's CSS references an external SVG file path — most icons instead go through the inline `Icon.jsx` component above.
- `dist/` is deleted and fully regenerated on every build (`rollup-plugin-delete`).

### Routing dependency

`react-router-dom` is a regular dependency (not peer) — `NavBar` uses `NavLink` from it directly. Any component needing routing-aware active states should follow that same import, not reinvent it.
