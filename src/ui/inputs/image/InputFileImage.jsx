import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Button from "../../buttons/default/Button";
import Image from "../../image/Image";
import Label from "../../label/Label";

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const InputFileImage = ({
  name,
  imagePreviewSize = 300,
  className = null,
  accept = ["image/png", "image/jpg", "image/jpeg"],
  labelText = "Upload or update image",
  deleteButtonLabel = "Remove image",
  onChange,
}) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imagePreviewSrc, setImagePreviewSrc] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState(0);

  if (!name) {
    console.error("InputFileImage must have a name.");
    return null;
  }

  const handleFileUpload = (event) => {
    const image = event.target.files[0];

    if (!image) {
      deleteUploadedFile();
      return;
    }

    if (!accept.includes(image.type)) {
      console.error("Invalid file type: ", image.type);
      deleteUploadedFile();
      return;
    }

    setImagePreviewSrc(URL.createObjectURL(image));
    setImageName(image.name);
    setImageSize(formatBytes(image.size));
    setIsImageUploaded(true);

    onChange && onChange(image);
  };

  const deleteUploadedFile = () => {
    const input = document.getElementById(name);
    if (input) input.value = "";

    setImagePreviewSrc("");
    setImageName("");
    setImageSize(0);
    setIsImageUploaded(false);

    URL.revokeObjectURL(imagePreviewSrc);

    onChange && onChange(null);
  };

  useEffect(() => {
    return () => {
      if (isImageUploaded) URL.revokeObjectURL(imagePreviewSrc);
    };
  }, [imagePreviewSrc]);

  return (
    <div className={className}>
      {/* Preview */}
      <div className="flex justify-center mb-2">
        <Image src={imagePreviewSrc} size={imagePreviewSize} />
      </div>

      {/* Upload button */}
      <div className="flex justify-center">
        <Button
          variant="primary"
          label={labelText}
          onClick={() => document.getElementById(name)?.click()}
        />
      </div>

      {/* File info + delete */}
      {isImageUploaded && (
        <div className="mt-2">
          <p className="flex justify-between text-sm">
            <span>{imageName}</span>
            <span>{imageSize}</span>
          </p>
          <Button
            variant="danger"
            label={deleteButtonLabel}
            onClick={deleteUploadedFile}
            className="mt-2"
          />
        </div>
      )}

      {/* Hidden input */}
      <input
        type="file"
        id={name}
        name={name}
        accept={accept.join(",")}
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

InputFileImage.propTypes = {
  name: PropTypes.string.isRequired,
  imagePreviewSize: PropTypes.number,
  className: PropTypes.string,
  accept: PropTypes.arrayOf(PropTypes.string),
  labelText: PropTypes.string,
  deleteButtonLabel: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputFileImage;
