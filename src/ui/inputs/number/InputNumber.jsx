import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";

const InputNumber = ({
  id,
  name,
  label,
  min = -Infinity,
  max = Infinity,
  step = 1,
  value,
  defaultValue = null,
  onChangeFunction = null,
  disabled = false,
  required = false,
  placeholder = ""
}) => {
  const [internalValue, setInternalValue] = useState(
    value ?? defaultValue ?? ""
  );

  // Sync with the value prop (controlled mode)
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value ?? "");
    }
  }, [value]);

  if (disabled) required = false;

  const handleNumberChange = (event) => {
    const rawValue = event.target.value;

    // Empty case
    if (rawValue === "") {
      // Partial input ("-", "1e"...): the browser returns "" with badInput
      if (event.target.validity?.badInput) {
        return;
      }
      setInternalValue("");
      onChangeFunction && onChangeFunction(null);
      return;
    }

    // Normalization
    const numericValue = Number(rawValue);

    if (!Number.isFinite(numericValue)) {
      return;
    }

    // Keep the raw input so typing is not disrupted ("1.", "0.0"...)
    setInternalValue(rawValue);
    onChangeFunction && onChangeFunction(numericValue);
  };

  // Clamp to min / max when the field loses focus
  const handleNumberBlur = () => {
    if (internalValue === "") {
      return;
    }

    const numericValue = Number(internalValue);

    if (!Number.isFinite(numericValue)) {
      return;
    }

    const finalValue = Math.min(Math.max(numericValue, min), max);

    if (finalValue !== numericValue) {
      setInternalValue(finalValue);
      onChangeFunction && onChangeFunction(finalValue);
    }
  };

  return (
    <Label htmlFor={id} required={required}>
      <Label.Title>{label}</Label.Title>
      <input
        className="rounded-md disabled:bg-disabled focus:ring-primary focus:border-primary w-fit"
        type="number"
        id={id}
        name={name}
        min={Number.isFinite(min) ? min : undefined}
        max={Number.isFinite(max) ? max : undefined}
        step={step}
        value={internalValue}
        onChange={handleNumberChange}
        onBlur={handleNumberBlur}
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
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["any"])]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChangeFunction: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

export default InputNumber;
