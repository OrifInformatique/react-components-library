import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

// UI elements
import Icon from "../icon/Icon";

const NavBar = ({
  links = [],
  ariaLabel = "Main navigation",
  menuButtonLabel = "Menu",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label={ariaLabel} className={clsx("border-b border-primary py-6 px-2", className)}>
      <button
        aria-label={menuButtonLabel}
        className="md:hidden"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon name="burger" />
      </button>
      <ul className={clsx("flex-col md:flex-row md:flex gap-4", isOpen ? "flex" : "hidden")}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                clsx("", isActive && "underline text-primary")
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
  ariaLabel: PropTypes.string,
  menuButtonLabel: PropTypes.string,
  className: PropTypes.string,
};

export default NavBar;
