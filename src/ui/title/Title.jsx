import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Title = ({ children })=> {
    return (
        <p className="font-bold text-3xl md:mb-0 md:mr-10">{children}</p>
    );
}

Title.propTypes = {
    children: PropTypes.node.isRequired
};

export default Title;