import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";

const InputCheckbox = ({
  options = [],
  value = undefined,              // contrôlé
  onChange = () => {},
  allDisabled = false,
  label = null,
  required = false,
}) => {
  const [selectedIds, setSelectedIds] = useState(
    value ?? options.filter((o) => o.defaultChecked).map((o) => o.id)
  );

  const labelRefs = useRef([]);
  const [longestLabelWidth, setLongestLabelWidth] = useState(0);

  const handleCheckboxChange = (id, isChecked) => {
    const updated = isChecked
      ? [...selectedIds, id]
      : selectedIds.filter((item) => item !== id);

    if (value === undefined) {
      setSelectedIds(updated);
    }
    onChange(updated);
  };

  useEffect(() => {
    if (value !== undefined) {
      setSelectedIds(value);
    }
  }, [value]);

  useEffect(() => {
    const widths = labelRefs.current.map((ref) => ref?.offsetWidth || 0);
    const maxWidth = Math.max(...widths);
    if (maxWidth > 0) {
      setLongestLabelWidth(maxWidth);
    }
  }, [options]);

  return (
    <Label required={required && !allDisabled}>
      {label && <Label.Title>{label}</Label.Title>}
      <div className="flex flex-col gap-2" role="group">
        {options.map(
          (
            {
              id,
              name,
              label,
              disabled = false,
              defaultChecked = false,
              labelPosition = "right",
            },
            index
          ) => {
            const isLeft = labelPosition === "left";
            const isDisabled = allDisabled || disabled;
            const isChecked = selectedIds.includes(id);

            return (
              <div key={id} className="flex items-center">
                {isLeft && (
                  <span
                    ref={(el) => (labelRefs.current[index] = el)}
                    className="text-sm"
                    style={{
                      minWidth: `${longestLabelWidth}px`,
                      textAlign: "left",
                      marginRight: "0.5rem",
                    }}
                  >
                    <label
                      htmlFor={id}
                      className="cursor-pointer w-full"
                      style={{ display: "block" }}
                    >
                      <Label.Title unstyled>{label}</Label.Title>
                    </label>
                  </span>
                )}
                <input
                  className="disabled:bg-disabled focus:border-primary disabled:hover:bg-disabled disabled:focus:outline-none disabled:cursor-not-allowed"
                  type="checkbox"
                  id={id}
                  name={name}
                  checked={isChecked}
                  disabled={isDisabled}
                  onChange={(e) =>
                    handleCheckboxChange(id, e.target.checked)
                  }
                  style={{ marginRight: isLeft ? 0 : "0.5rem" }}
                />
                {!isLeft && (
                  <span
                    ref={(el) => (labelRefs.current[index] = el)}
                    className="text-sm"
                  >
                    <label
                      htmlFor={id}
                      className="cursor-pointer w-full"
                      style={{ display: "block" }}
                    >
                      <Label.Title unstyled>{label}</Label.Title>
                    </label>
                  </span>
                )}
              </div>
            );
          }
        )}
      </div>
    </Label>
  );
};

InputCheckbox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      defaultChecked: PropTypes.bool,
      labelPosition: PropTypes.oneOf(["left", "right"]),
    })
  ).isRequired,
  value: PropTypes.arrayOf(PropTypes.string), // mode contrôlé
  onChange: PropTypes.func,
  allDisabled: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default InputCheckbox;
