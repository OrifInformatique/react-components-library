import React from "react";
import PropTypes from "prop-types";

// UI elements
import Icon from "../../icon/Icon";

const Button = ({
  className = "",
  variant = "primary",
  label = null,
  icon = null,
  size = "medium",
  hideTextOnMobile = false,
  ...props
}) => {
  const buttonMode = (variant) => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white before:border-transparent";
      case "secondary":
        return "bg-white text-primary opacity-120";
      case "tertiary":
        return "bg-white text-black";
      case "link":
        return "text-primary font-light hover:underline focus:underline";
      case "danger":
        return "bg-white text-danger before:border-danger";
      default:
        return "border border-black border-opacity-60 active:text-gray-700";
    }
  };

  const buttonSize = (size) => {
    switch (size) {
      case "small":
        return "text-sm";
      case "medium":
        return "text-base";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  const iconColor = (variant) => {
    switch (variant) {
      case "primary":
        return "white";
      case "secondary":
        return "primary";
      case "tertiary":
        return "black";
      case "danger":
        return "danger";
      default:
        return "black";
    }
  };

  const iconSize = (size) => {
    switch (size) {
      case "small":
        return "4";
      case "medium":
        return "6";
      case "large":
        return "8";
      default:
        return "6";
    }
  };

  return (
    <button
      className={[
        "group flex justify-center items-center font-medium",
        variant !== "link"
          ? `rounded-sm transition transform duration-300 px-4 py-2 gap-2  
          relative isolate
          before:content-[''] 
          before:absolute 
          before:inset-0 
          before:-z-10
          before:border 
          before:rounded
          before:bg-inherit
          before:transition-all before:duration-300
          hover:before:scale-105
          active:before:scale-[1.01]
          hover:shadow-lg/22
          active:shadow-lg/14
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:before:scale-100
          disabled:hover:shadow-none
          focus:outline-offset-2`
          : "",
        className,
        buttonMode(variant),
        buttonSize(size),
      ].join(" ")}
      aria-label={label || (icon ? icon : "button")}
      {...props}
    >
      {icon && (
        <Icon name={icon} color={iconColor(variant)} size={iconSize(size)} disableAnimation={true} />
      )}
      {label && (
        <span className={hideTextOnMobile && icon ? "hidden sm:inline" : ""}>
          {label}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "link",
    "danger",
  ]),
  label: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  hideTextOnMobile: PropTypes.bool,
};

export default Button;
