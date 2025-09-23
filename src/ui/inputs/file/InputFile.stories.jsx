// src/ui/inputs/file/InputFile.stories.jsx
import React, { useState } from "react";
import InputFile from "./InputFile";

const meta = {
  title: "Components/UI/InputFile",
  component: InputFile,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Default = {
  render: (args) => {
    const [file, setFile] = useState(null);

    return (
      <div className="space-y-4">
        <InputFile
          {...args}
          onChange={(selectedFile) => {
            setFile(selectedFile);
            console.log("File selected:", selectedFile);
          }}
        />

        {file && (
          <p className="text-sm text-gray-700">
            Selected file: <strong>{file.name}</strong> ({file.type})
          </p>
        )}
      </div>
    );
  },
  args: {
    id: "file-upload",
    name: "file-upload",
    label: "Upload a file",
    accept: "*/*",
    required: false,
    disabled: false,
  },
};

export const WithImageRestriction = {
  args: {
    id: "image-upload",
    name: "image-upload",
    label: "Upload an image",
    accept: "image/*",
  },
};

export const WithPDFRestriction = {
  args: {
    id: "pdf-upload",
    name: "pdf-upload",
    label: "Upload a PDF",
    accept: "application/pdf",
  },
};

export const Disabled = {
  args: {
    id: "disabled-upload",
    name: "disabled-upload",
    label: "File upload disabled",
    disabled: true,
  },
};

export const Required = {
  args: {
    id: "required-upload",
    name: "required-upload",
    label: "This file is required",
    required: true,
  },
};
