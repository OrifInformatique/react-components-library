import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Label from "../../label/Label";

const InputText = ({
  id,
  name,
  label,
  value = null,
  defaultValue = null,
  onChangeFunction = null,
  disabled = false,
  required = false,
  placeholder = "",
  errors = [],
  className = ""
}) => {
  if (disabled) required = false;

  return (
    <Label htmlFor={id} required={required}>
      <Label.Title>{label}</Label.Title>
      <input
        className={clsx(
          "rounded-md text-gray-800 disabled:bg-disabled focus:ring-primary focus:border-primary px-2 py-1",
          errors.length > 0 && "border-2 border-solid border-red-500",
          className
        )}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        {...(value !== null
          ? { value }
          : { defaultValue })}
        onChange={onChangeFunction}
        disabled={disabled}
        required={required}
      />
      {errors.length > 0 && (
        <p className="text-sm text-red-600 mt-1">{errors[0]}</p>
      )}
    </Label>
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeFunction: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string
};

export default InputText;
