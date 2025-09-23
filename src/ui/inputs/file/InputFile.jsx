import React from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";

const InputFile = ({
  id,
  name,
  label = null,
  accept = "",
  disabled = false,
  required = false,
  onChange = () => {}
}) => {
  const isRequired = !disabled && required;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;
    onChange(selectedFile);
  };

  return (
    <Label htmlFor={id} required={isRequired}>
      <Label.Title>{label}</Label.Title>
      <input
        type="file"
        id={id}
        name={name}
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
        required={isRequired}
        className="
          file:cursor-pointer
          file:rounded-md
          file:border file:border-primary
          file:px-4 file:py-2
          file:text-primary file:bg-transparent
          hover:file:bg-primary hover:file:text-white
          focus:file:outline-none focus:file:ring-2 focus:file:ring-primary/30
          disabled:file:opacity-50 disabled:file:cursor-not-allowed
        "
      />
    </Label>
  );
};

InputFile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default InputFile;
