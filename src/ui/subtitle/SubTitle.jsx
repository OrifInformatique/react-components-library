import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const SubTitle = ({children}) => {
    return (
        <p className="font-bold text-2xl md:mb-0 md:mr-10">{children}</p>
    );
};

SubTitle.propTypes = {
    children: PropTypes.node.isRequired
};

export default SubTitle;
  