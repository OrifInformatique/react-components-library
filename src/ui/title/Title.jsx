import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Title = ({ children, size = "3xl" })=> {
    const sizeClasses = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl"
    }

    const sizeClass = sizeClasses[size] || sizeClasses["3xl"];
    const className = ["font-bold", sizeClass, "md:mb-0 md:mr-10"].join(" ");

    Title.propTypes = {
        children: PropTypes.node.isRequired,
        size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"])
    };

    return (
        <p className={className}>{children}</p>
    );
}

export default Title;