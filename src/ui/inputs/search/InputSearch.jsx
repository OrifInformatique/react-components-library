import React from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";

const InputSearch = ({
  id,
  name,
  label,
  value = null,
  defaultValue = null,
  onChangeFunction = null,
  disabled = false,
  placeholder = "",
  required = false,
}) => {
  if (disabled) required = false;

  return (
    <Label htmlFor={id} required={required}>
      <Label.Title>{label}</Label.Title>
      <input
        type="search"
        id={id}
        name={name}
        {...(value !== null ? { value } : { defaultValue })}
        onChange={onChangeFunction}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        className="border px-2 py-1 rounded w-full max-w-sm disabled:bg-disabled focus:ring-primary focus:border-primary"
      />
    </Label>
  );
};

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeFunction: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default InputSearch;
