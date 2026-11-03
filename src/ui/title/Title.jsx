import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Title = ({ children, align = "start" })=> {
    const alignClasses = {
        "start": "text-start",
        "center": "text-center",
        "end": "text-end"
    }

    const alignClass = alignClasses[align] || alignClasses["start"];
    const className = [alignClass, "text-2xl md:text-3xl mb-2 md:mr-10"].join(" ");

    return (
        <p className={className}>{children}</p>
    );
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    align: PropTypes.oneOf(["start", "center", "end"])
};

export default Title;