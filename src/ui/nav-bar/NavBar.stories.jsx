import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/UI/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  layout: "fullscreen",
  decorators: [
    // NavLink needs a router to work. We wrap every story in a MemoryRouter.
    // A story can set the "current page" via parameters.initialEntries.
    (Story, { parameters }) => (
      <MemoryRouter initialEntries={parameters.initialEntries || ["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  // Shared default data: most stories only need to override what they demonstrate.
  args: {
    links: [
      { label: "Accueil", to: "/" },
      { label: "Utilisateurs", to: "/users" },
      { label: "Paramètres", to: "/settings" },
    ],
  },
  // Nice, self-documenting controls that mirror the component API.
  argTypes: {
    burgerPosition: {
      control: "inline-radio",
      options: ["left", "right"],
      description: "Position du bouton burger (visible sur mobile)",
    },
    linksAlign: {
      control: "inline-radio",
      options: ["start", "center", "end"],
      description: "Alignement des liens sur desktop",
    },
    links: { control: "object" },
    ariaLabel: { control: "text" },
    menuButtonLabel: { control: "text" },
    className: { control: "text" },
    buttonClassName: { control: "text" },
    listClassName: { control: "text" },
    linkClassName: { control: "text" },
    activeLinkClassName: { control: "text" },
  },
};

/* -------------------------------------------------------------------------- */
/* Data-driven stories: SAME component, different data                        */
/* -> proves the NavBar is "dumb" and role-agnostic.                          */
/* -------------------------------------------------------------------------- */

// "Regular user" case: few links.
export const UserMenu = {
  args: {
    links: [
      { label: "Accueil", to: "/" },
      { label: "Mon profil", to: "/profile" },
    ],
  },
};

// "Administrator" case: more links. The consumer built this list from the role.
export const AdminMenu = {
  args: {
    links: [
      { label: "Tableau de bord", to: "/dashboard" },
      { label: "Utilisateurs", to: "/users" },
      { label: "Paramètres", to: "/settings" },
      { label: "Journaux", to: "/logs" },
    ],
  },
};

// Single link: minimal case.
export const SingleLink = {
  args: {
    links: [{ label: "Accueil", to: "/" }],
  },
};

// Empty list: edge case. The component must NOT crash, just render an empty bar.
export const NoLinks = {
  args: {
    links: [],
  },
};

// Many links + long labels: responsive stress test (they should wrap).
export const ManyLinks = {
  args: {
    links: [
      { label: "Tableau de bord", to: "/dashboard" },
      { label: "Gestion des utilisateurs", to: "/users" },
      { label: "Rapports et statistiques", to: "/reports" },
      { label: "Paramètres avancés", to: "/settings" },
      { label: "Historique des connexions", to: "/history" },
      { label: "Documentation", to: "/docs" },
    ],
  },
};

// Active link: shows the isActive style of the NavLink.
// We force the "current page" to /users via initialEntries.
export const ActiveLink = {
  parameters: { initialEntries: ["/users"] },
};

/* -------------------------------------------------------------------------- */
/* Layout stories: the enum props (burgerPosition, linksAlign)                */
/* -------------------------------------------------------------------------- */

// Links aligned to the start (left) on desktop.
export const LinksAlignStart = {
  args: { linksAlign: "start" },
};

// Links aligned to the end (right) on desktop.
export const LinksAlignEnd = {
  args: { linksAlign: "end" },
};

// Burger on the left. NOTE: only visible on a NARROW viewport
// (the burger is hidden from the "md" breakpoint up). Shrink the
// Storybook canvas to see it move.
export const BurgerLeft = {
  args: { burgerPosition: "left" },
};

/* -------------------------------------------------------------------------- */
/* Styling story: the className slots (fully re-skinnable from outside)       */
/* -------------------------------------------------------------------------- */

// Demonstrates that every part can be restyled via className slots,
// without a single CSS-property-specific prop.
export const CustomStyle = {
  parameters: { initialEntries: ["/users"] },
  args: {
    className: "bg-slate-900 px-8 py-4",
    linkClassName: "text-white",
    activeLinkClassName: "text-amber-400 font-bold underline",
    buttonClassName: "text-white",
    listClassName: "gap-8",
  },
};
