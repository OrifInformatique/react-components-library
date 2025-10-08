// src/ui/inputs/image/InputFileImage.stories.jsx
import React, { useState } from "react";
import InputFileImage from "./InputFileImage";

const meta = {
  title: "Components/UI/InputFileImage",
  component: InputFileImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

export const Default = {
  render: () => {
    const [file, setFile] = useState(null);

    return (
      <div className="space-y-4">
        <InputFileImage
          name="profileImage"
          onChange={(img) => {
            console.log("Image uploaded:", img);
            setFile(img);
          }}
        />
        {file && (
          <p className="text-sm text-gray-700">
            Selected file: <strong>{file.name}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const CustomLabels = {
  render: () => (
    <InputFileImage
      name="customImage"
      labelText="Select an image"
      deleteButtonLabel="Clear image"
    />
  ),
};

export const SmallPreview = {
  render: () => (
    <InputFileImage
      name="smallImage"
      imagePreviewSize={150}
    />
  ),
};
