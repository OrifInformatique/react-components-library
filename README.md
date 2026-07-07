# @orif-informatique/react-components-library

A reusable **React component library** built with **Rollup**, **Storybook**, and **TailwindCSS**.  
It provides a set of shared UI components and styles to ensure design consistency across projects.

---

## Table of Contents

1. [Prerequisites](#prerequisites)  
2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Available Components](#available-components)  
5. [Development](#development)  
6. [Build & Distribution](#build--distribution)  
7. [Versioning & Publishing](#versioning--publishing)  
8. [Conventions](#conventions)  
9. [FAQ](#faq)  
10. [License](#license)  

---

## Prerequisites

This library relies on the following **peer dependencies**.  
They must be installed in the parent project:

- `react` `^18.3.1 || ^19`
- `react-dom` `^18.3.1 || ^19`
- `clsx` `^2.1.1`
- `prop-types` `^15.8.1`

Install them if missing:
   
```bash
npm install react react-dom clsx prop-types
```

---

## Installation

Install the package from npm:

```bash
npm install @orif-informatique/react-components-library
```

---

## Usage

Import the components you need, and don’t forget to include the library’s styles:

```jsx
import { PopUp, DefaultButton } from "@orif-informatique/react-components-library";
import "@orif-informatique/react-components-library/styles.css";

function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <DefaultButton
        label="Open"
        variant="primary"
        onClick={() => setOpen(true)}
      />
      <PopUp
        open={open}
        title="Confirmation"
        description="Are you sure you want to continue?"
        onClose={() => setOpen(false)}
      >
        <DefaultButton label="Yes" variant="primary" />
        <DefaultButton label="No" variant="danger" />
      </PopUp>
    </>
  );
}
```

---

## Available Components

The library provides a set of reusable UI components and form inputs.

Follow this Storybook link for details : [Storybook](https://orifinformatique.github.io/react-components-library/)


## Development

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd react-components-library
npm install
```

### Storybook

Run Storybook to develop and test components in isolation:

```bash
npm run storybook
```

Build a static Storybook bundle:

```bash
npm run build-storybook
```

### Local build

Clean and rebuild the library:

```bash
npm run clean
npm run build
```

---

## Build & Distribution

The Rollup build generates:

- `dist/index.cjs.js` → CommonJS bundle  
- `dist/index.esm.js` → ESModule bundle  
- `dist/styles.css` → compiled TailwindCSS styles  

Only the metadata files are published.

---

## Versioning & Publishing

To release a new version:

1. Option A, bump the version:

```bash
# For a patch version incrementation (1.0.0 > 1.0.1)
npm version patch -m "chore(release): %s"

# For a minor version incrementation (1.0.0 > 1.1.0)
npm version minor -m "chore(release): %s"

# For a major version incrementation (1.0.0 > 2.0.0)
npm version major -m "chore(release): %s"
```

OR

1. Option B, manually adjust the version number in package.json file and build the library :

```json
"version": "1.0.0",
```

```bash
npm run build
```

2. Publish to npm:

⚠️ Make sure you are logged in to the correct npm account before publishing:

```bash
npm whoami
```

If you're not logged in, run :
```bash
npm login
```

To publish, run
```bash
npm publish --access public
```

---

## Conventions

- **Component naming**: `PascalCase`
- **Props naming**: `camelCase`
- **Exports**: All components are exported at the root level.  
  Example:  
  ```js
  import { PopUp } from "@orif-informatique/react-components-library";
  ```
- **Styles**: Must be imported explicitly:  
  ```js
  import "@orif-informatique/react-components-library/styles.css";
  ```
- **Peer dependencies**: Always provided by the parent app.

---

## FAQ

**Q: Do I need a `public/` folder for assets?**  
A: No. Assets and styles are bundled inside the library. You only need to import the provided `styles.css`.

**Q: What Node.js version is required?**  
A: Use Node.js **20.19+** (or **22.12+**) to match the Vite engine requirements.

**Q: Can I use this with Create React App?**  
A: Yes. Both CRA and Vite are supported.

---

## License

[MIT](./LICENSE)
