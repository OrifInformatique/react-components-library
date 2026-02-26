import React, { useState } from "react";
import PropTypes from "prop-types";
import Label from "../../label/Label";
import Button from "../../buttons/default/Button";

const InputFile = ({
  id,
  name,
  label = null,
  accept = "",
  disabled = false,
  required = false,
  buttonLabel = "Browse",
  onChange = () => { }
}) => {
  const [fileName, setFileName] = useState("");
  const isRequired = !disabled && required;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;
    setFileName(selectedFile.name || "");
    onChange(selectedFile);
  };

  return (
    <Label htmlFor={id} required={isRequired}>
      <Label.Title>{label}</Label.Title>
      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          label={buttonLabel}
          onClick={() => document.getElementById(id)?.click()}
          disabled={disabled}
        />
        {fileName && <span className="text-sm">{fileName}</span>}
      </div>
      <input
        type="file"
        id={id}
        name={name}
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
        required={isRequired}
        className="hidden"
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
