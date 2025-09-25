import React, { useState } from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";

const InputNumber = ({
  id,
  name,
  label,
  min = -Infinity,
  max = Infinity,
  value = null,
  defaultValue = null,
  onChangeFunction = null,
  disabled = false,
  required = false,
  placeholder = ""
}) => {
  const [internalValue, setInternalValue] = useState(
    value ?? defaultValue ?? ""
  );

  if (disabled) required = false;

  const handleNumberChange = (event) => {
    const rawValue = event.target.value;

    // Cas vide
    if (rawValue === "") {
      setInternalValue("");
      onChangeFunction && onChangeFunction(null);
      return;
    }

    // Normalisation
    const numericValue = Number(rawValue);

    if (isNaN(numericValue)) {
      return;
    }

    let finalValue = numericValue;

    if (numericValue < min) {
      finalValue = min;
    } else if (numericValue > max) {
      finalValue = max;
    }

    setInternalValue(finalValue);
    onChangeFunction && onChangeFunction(finalValue);
  };

  return (
    <Label htmlFor={id} required={required}>
      <Label.Title>{label}</Label.Title>
      <input
        className="rounded-md disabled:bg-disabled focus:ring-primary focus:border-primary w-fit"
        type="number"
        id={id}
        name={name}
        min={min}
        max={max}
        value={internalValue}
        onChange={handleNumberChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
      />
    </Label>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChangeFunction: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

export default InputNumber;
