import React, { useEffect, useRef } from "react";
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
  placeholder,
  onChangeFunction = null,
  errors = [],
  className = null,
}) => {
  const selectRef = useRef(null);
  const lastReportedValue = useRef(null);

  // Report the value actually displayed by the browser on load (and when options change),
  // even if the user hasn't interacted with the list yet
  useEffect(() => {
    const currentValue = selectRef.current?.value;
    if (!currentValue || currentValue === lastReportedValue.current) return;

    lastReportedValue.current = currentValue;
    if (onChangeFunction) onChangeFunction(currentValue);
  }, [options, selectedValue]);

  if (!name) {
    console.error("SingleSelect must have a name.");
    return null;
  }

  const isDisabled = disabled || options.length < 1;
  if (isDisabled) required = false;

  const handleSingleSelect = (event) => {
    lastReportedValue.current = event.target.value;
    if (onChangeFunction) onChangeFunction(event.target.value);
  };

  return (
    <Label htmlFor={id ?? name} required={required}>
      {label && <Label.Title>{label}</Label.Title>}
      <select
        ref={selectRef}
        id={id ?? name}
        name={name}
        {...(selectedValue !== null
          ? { value: selectedValue }
          : { defaultValue: defaultValue ?? "" })}
        disabled={isDisabled}
        required={required}
        onChange={handleSingleSelect}
        className={clsx(
          "rounded-md w-full px-2 py-1 border focus:ring-primary focus:border-primary",
          isDisabled ? "bg-disabled cursor-not-allowed" : "bg-background",
          errors.length > 0 && "border-2 border-solid border-red-500",
          className
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
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
