import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Title = ({ children, align = "start", className = null }) => {
    const alignClasses = {
        "start": "text-start",
        "center": "text-center",
        "end": "text-end"
    }

    const alignClass = alignClasses[align] || alignClasses["start"];

    return (
        <p className={clsx(alignClass, "text-2xl md:text-3xl mb-2 md:mr-10", className)}>{children}</p>
    );
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    align: PropTypes.oneOf(["start", "center", "end"]),
    className: PropTypes.string
};

export default Title;