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
Below is the full list with a short description for each.

---


### **Buttons**
- **DefaultButton** – Standard button with multiple variants (`primary`, `secondary`, `tertiary`, `danger`).  
- **ScrollToTopButton** – Floating utility button that scrolls the page back to the top.

---

### **Footer**
- **Footer** – Application footer layout component.

---

### **Header**
- **Header** – Application header/navigation bar.

---

### **Icon**
- **Icon** – Generic SVG icon component supporting multiple sizes and names.

---

### **Image**
- **Image** – Wrapper for optimized image rendering.

---

### **Inputs**
A wide range of controlled form input components, styled consistently.

- **InputCheckbox** – Checkbox input with label support.  
- **ColorChange** – Color picker input.  
- **InputDate** – Date picker input.  
- **InputEmail** – Email input with validation.  
- **InputFile** – File upload input with custom button trigger.  
- **InputHidden** – Hidden field for form usage.  
- **InputImage** – Image upload input.  
- **InputMultiSelect** – Multi-select dropdown.  
- **InputNumber** – Numeric input with validation.  
- **InputPassword** – Password input with masking.  
- **InputRadio** – Radio button group.  
- **InputSearch** – Search input with built-in clear option.  
- **InputSingleSelect** – Single-select dropdown.  
- **InputText** – Standard text input.  
- **InputTextarea** – Multi-line text input.

---

### **Label**
- **Label** – Styled label for form fields.

---

### **PopUp**
- **PopUp** – Modal popup component, supports title, description, and action buttons.

---

### **Snackbar**
- **SnackBar** – Temporary message/notification toast.

---

### **User Menu**
- **UserMenu** – Dropdown menu for authenticated user actions.

---

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
npm version patch --no-git-tag-version -m "chore(release): %s"
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

```bash
npm publish --access public
```

⚠️ Make sure you are logged in to the correct npm account before publishing:

```bash
npm whoami
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
