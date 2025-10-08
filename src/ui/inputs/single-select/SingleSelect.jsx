import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Label from "../../label/Label";

const SingleSelect = ({
  id,
  name,
  label,
  options = [],
  selectedValue = null,
  defaultValue = null,
  disabled = false,
  required = false,
  placeholder = "Select an option...",
  onChangeFunction = null,
  errors = [],
  className = null,
}) => {
  if (!name) {
    console.error("SingleSelect must have a name.");
    return null;
  }

  const isDisabled = disabled || options.length < 1;
  if (isDisabled) required = false;

  const handleSingleSelect = (event) => {
    if (onChangeFunction) onChangeFunction(event.target.value);
  };

  return (
    <Label htmlFor={id ?? name} required={required}>
      {label && <Label.Title>{label}</Label.Title>}
      <select
        id={id ?? name}
        name={name}
        {...(selectedValue !== null
          ? { value: selectedValue }
          : { defaultValue })}
        disabled={isDisabled}
        required={required}
        onChange={handleSingleSelect}
        className={clsx(
          "rounded-md w-full px-2 py-1 border focus:ring-primary focus:border-primary",
          isDisabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
          errors.length > 0 && "border-2 border-solid border-red-500",
          className
        )}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors.length > 0 && (
        <p className="text-sm text-red-600 mt-1">{errors[0]}</p>
      )}
    </Label>
  );
};

SingleSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeFunction: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default SingleSelect;
