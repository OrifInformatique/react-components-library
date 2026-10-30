import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const SubTitle = ({ children, align = "start"}) => {
    const alignClasses = {
        "start": "text-start",
        "center": "text-center",
        "end": "text-end"
    }

    const alignClass = alignClasses[align] || alignClasses["start"];
    const className = [alignClass, "text-xl lg:text-2xl  md:mb-0 md:mr-10"].join(" ");

    SubTitle.propTypes = {
        children: PropTypes.node.isRequired,
        align: PropTypes.oneOf(["start", "center", "end"])
    };

    return (
        <p className={className}>{children}</p>
    );
}

export default SubTitle;
  