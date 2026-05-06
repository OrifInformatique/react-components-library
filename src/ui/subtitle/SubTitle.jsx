import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const SubTitle = ({
    subTitle = "sous-titre"
}) => {
    return (
        <p className="font-bold text-3xl md:mb-0 md:mr-10">{subTitle}</p>
    );
};

SubTitle.PropTypes = {
    subTitle: PropTypes.string.isRequired
};

export default SubTitle;
