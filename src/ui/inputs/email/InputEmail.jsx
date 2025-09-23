import React from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";

const InputEmail = ({
  id,
  name,
  label,
  value = null,
  defaultValue = null,
  onChange = null,
  disabled = false,
  placeholder = "",
  required = false
}) => {
  const isRequired = !disabled && required;

  return (
    <Label htmlFor={id} required={isRequired}>
      <Label.Title>{label}</Label.Title>
      <input
        className="rounded-md disabled:bg-disabled focus:ring-primary focus:border-primary w-fit"
        type="email"
        id={id}
        name={name}
        {...(value !== null
          ? { value }
          : { defaultValue })}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        required={isRequired}
      />
    </Label>
  );
};

InputEmail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default InputEmail;
