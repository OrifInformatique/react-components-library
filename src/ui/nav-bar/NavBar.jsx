import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

// UI elements
import Icon from "../icon/Icon";

const NavBar = ({
  links = [],
  ariaLabel = "Main navigation",
  menuButtonLabel = "Menu",
  burgerPosition = "right",
  linksAlign = "center",
  className = "",
  buttonClassName = "", // the burger button
  listClassName = "", // the <ul>
  linkClassName = "", // each link (normal state)
  activeLinkClassName = "underline text-primary", // active link
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  // Burger Position on Mobile Devices
  const burgerAlignment = (position) => {
    switch (position) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      default:
        return "justify-end";
    }
  };

  // Link alignment on desktop (prefix “md:” → applies only to “medium” and larger)
  const linksAlignment = (align) => {
    switch (align) {
      case "start":
        return "md:justify-start";
      case "center":
        return "md:justify-center";
      case "end":
        return "md:justify-end";
      default:
        return "md:justify-center";
    }
  };

  // Close the mobile menu when the user presses Escape (keyboard accessibility)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav
      aria-label={ariaLabel}
      className={clsx(
        "flex flex-wrap items-center gap-y-4",
        burgerAlignment(burgerPosition),
        linksAlignment(linksAlign),
        className,
      )}
    >
      <button
        type="button"
        aria-label={menuButtonLabel}
        className={clsx("md:hidden", buttonClassName)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon name="burger" size="8" />
      </button>
      <ul
        id={menuId}
        className={clsx(
          "w-full md:w-auto flex-col md:flex-row md:flex gap-4",
          listClassName,
          isOpen ? "flex" : "hidden",
        )}
      >
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                clsx(linkClassName, isActive && activeLinkClassName)
              }
              onClick={() => setIsOpen(false)}
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
  burgerPosition: PropTypes.oneOf(["left", "right"]),
  linksAlign: PropTypes.oneOf(["start", "center", "end"]),
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  listClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  activeLinkClassName: PropTypes.string,
};

export default NavBar;
