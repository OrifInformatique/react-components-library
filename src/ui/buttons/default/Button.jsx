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
        return "bg-primary text-white active:bg-opacity-80";
      case "secondary":
        return "border border-primary text-primary hover:bg-primary hover:text-white active:bg-opacity-80 active:border-opacity-0";
      case "tertiary":
        return "border border-black border-opacity-60 hover:bg-gray-800 hover:text-white active:bg-gray-600 active:border-opacity-0";
      case "link":
        return "text-primary font-light hover:underline focus:underline";
      case "danger":
        return "border border-danger text-danger hover:bg-danger hover:text-white active:bg-opacity-80 active:border-opacity-0";
      default:
        return "border border-black border-opacity-60 active:text-gray-700";
    }
  };

  const buttonSize = (size) => {
    switch (size) {
      case "small":
        return "text-sm";
      case "medium":
        return "text-md";
      case "large":
        return "text-lg";
      default:
        return "text-md";
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
        "group flex justify-center items-center font-semibold",
        variant !== "link"
          ? "rounded-sm transition transform duration-300 px-4 py-2 gap-2 hover:scale-105"
          : "",
        className,
        buttonMode(variant),
        buttonSize(size),
      ].join(" ")}
      aria-label={label || (icon ? icon : "button")}
      {...props}
    >
      {icon && (
        <Icon name={icon} color={iconColor(variant)} size={iconSize(size)} />
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
