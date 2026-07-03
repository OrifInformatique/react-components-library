import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/UI/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  layout: "fullscreen",
  decorators: [
    (Story, { parameters }) => (
      <MemoryRouter initialEntries={parameters.initialEntries || ["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// 1. "Regular user" case: few links
export const UserMenu = {
  args: {
    links: [
      { label: "Accueil", to: "/" },
      { label: "Mon profil", to: "/profile" },
    ],
  },
};

// 2. "Administrator" case: more links.
//    SAME component, different data -> proves it is role-agnostic.
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

// 3. Single link: minimal case
export const SingleLink = {
  args: {
    links: [{ label: "Accueil", to: "/" }],
  },
};

// 4. Empty list: edge case. The component must NOT crash,
//    it should just render a bar with no links.
export const NoLinks = {
  args: {
    links: [],
  },
};

// 5. Many links + long labels: responsive stress test
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

// 6. Active link: demonstrates the isActive style of the NavLink.
//    We force the "current page" to /users via the initialEntries
//    parameter, which the global MemoryRouter decorator reads.
export const ActiveLink = {
  args: {
    links: [
      { label: "Accueil", to: "/" },
      { label: "Utilisateurs", to: "/users" },
      { label: "Paramètres", to: "/settings" },
    ],
  },
  parameters: { initialEntries: ["/users"] },
};
