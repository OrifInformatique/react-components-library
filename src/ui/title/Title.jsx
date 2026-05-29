import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Title = ({
    title = "My title"
}) => {
    return (
        <p className="font-bold text-3xl md:mb-0 md:mr-10">{title}</p>
    );
}

Title.PropTypes = {
    title: PropTypes.string.isRequired
};

export default Title;