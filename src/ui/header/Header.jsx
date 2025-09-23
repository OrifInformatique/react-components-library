import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ 
  title, 
  logo, 
  childElement = null, 
  userMenu = null, 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`border-b shadow-sm py-8 px-6 ${className}`}>
      <div className="relative flex justify-between items-center">
        {/* Logo is passed as prop */}
        {logo && <div className="flex-shrink-0">{logo}</div>}

        {/* Title is optional */}
        {title && (
          <h1 className="absolute text-4xl left-1/2 transform -translate-x-1/2">
            {title}
          </h1>
        )}

        <div className="flex items-center gap-x-4">
          {childElement}

          {/* User menu toggle, only if provided */}
          {userMenu && (
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              {userMenu.icon ?? "☰"}
            </button>
          )}
        </div>

        {/* Render userMenu content */}
        {isOpen && userMenu?.content && (
          <div className="absolute right-0 mt-2">
            {typeof userMenu.content === "function"
              ? userMenu.content({ close: () => setIsOpen(false) })
              : userMenu.content}
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.node, // any JSX (e.g. <Logo />)
  childElement: PropTypes.element,
  userMenu: PropTypes.shape({
    icon: PropTypes.node, // button/icon to toggle menu
    content: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func // allows passing a function with close callback
    ])
  }),
  className: PropTypes.string
};

export default Header;
