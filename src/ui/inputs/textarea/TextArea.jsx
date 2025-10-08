import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Label from "../../label/Label";

const Textarea = ({
  id,
  name,
  label,
  placeholder = "",
  value = null,
  defaultValue = null,
  rows = 4,
  cols = null,
  resizeX = true,
  resizeY = true,
  readonly = false,
  disabled = false,
  required = false,
  onChangeFunction = null,
  errors = [],
  className = ""
}) => {
  if (disabled) required = false;

  let resizeClass = "";
  switch (true) {
    case resizeX && resizeY:
      resizeClass = "resize";
      break;
    case !resizeX && resizeY:
      resizeClass = "resize-y";
      break;
    case resizeX && !resizeY:
      resizeClass = "resize-x";
      break;
    case !resizeX && !resizeY:
      resizeClass = "resize-none";
      break;
  }

  return (
    <Label htmlFor={id} required={required}>
      <Label.Title>{label}</Label.Title>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        {...(value !== null ? { value } : { defaultValue })}
        rows={rows}
        cols={cols}
        readOnly={readonly}
        disabled={disabled}
        required={required}
        onChange={onChangeFunction}
        className={clsx(
          "rounded-md w-full px-2 py-1",
          resizeClass,
          disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
          errors.length > 0 && "border-2 border-red-500",
          className
        )}
      />
      {errors.length > 0 && (
        <p className="text-sm text-red-600 mt-1">{errors[0]}</p>
      )}
    </Label>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  resizeX: PropTypes.bool,
  resizeY: PropTypes.bool,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChangeFunction: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Textarea;
