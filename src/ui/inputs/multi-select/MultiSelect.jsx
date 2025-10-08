import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Label from "../../label/Label";

const MultiSelect = ({
  name,
  options = [],
  selectedValues = [],
  defaultValues = [],
  disabled = false,
  onChangeFunction = null,
  errors = [],
  className = null,
  emptyLabel = "None selected",
  singleLabel = "selected",
  multipleLabel = "selected"
}) => {
  if (!name) {
    console.error("MultiSelect must have a name.");
    return;
  }

  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);
  const [isOpen, setIsOpen] = useState(false);

  const isDisabled = disabled || options.length < 1;

  const handleSelectedOptions = (value) => {
    if (onChangeFunction) {
      onChangeFunction((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    }

    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  useEffect(() => setSelectedCount(selectedOptions.length), [selectedOptions]);

  return (
    <div className="relative">
      <div
        onClick={() => {
          if (!isDisabled) setIsOpen((prev) => !prev);
        }}
        className={clsx(
          "rounded-md w-full h-fit px-4 py-2 border border-gray-500 text-center select-none hover:cursor-pointer",
          isDisabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
          errors.length > 0 && "border-2 border-solid border-red-500",
          className
        )}
      >
        {selectedCount > 0 ? (
          <p>
            {`${selectedCount} ${
              selectedCount > 1 ? multipleLabel : singleLabel
            }`}
          </p>
        ) : (
          <p>{emptyLabel}</p>
        )}
      </div>

      <div
        id={`${name}-multiselect`}
        className={`${!isOpen && "!hidden"} block absolute border border-blue min-w-max w-full py-2 space-y-2 rounded-md z-50 bg-white`}
        onClick={(e) => e.stopPropagation()}
      >
        {options.map((option, index) => (
          <div
            key={`${name}-${index}`}
            className="space-x-2 w-full px-2 select-none"
          >
            <input
              id={`${name}-${index}`}
              name={`${name}-${index}`}
              type="checkbox"
              value={option}
              {...(onChangeFunction !== null
                ? { checked: selectedValues.includes(option) }
                : { defaultChecked: defaultValues.includes(option) })}
              onChange={() => handleSelectedOptions(option)}
              className="rounded-sm hover:cursor-pointer"
            />

            <Label forInput={`${name}-${index}`}>{option}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
