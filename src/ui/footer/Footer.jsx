// src/ui/footer/Footer.jsx
import React from "react";
import PropTypes from "prop-types";

const Footer = ({ children }) => {
  return (
    <footer className="w-full border-t border-black py-6 px-6 flex justify-center items-center">
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
