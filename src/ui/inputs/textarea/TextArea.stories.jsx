import React, { useState } from "react";
import Textarea from "./TextArea";

const meta = {
  title: "Components/UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "left" },
};
export default meta;

export const Default = {
  args: {
    id: "bio",
    name: "bio",
    label: "Biography",
    placeholder: "Write something here...",
  },
};

export const WithError = {
  args: {
    id: "description",
    name: "description",
    label: "Description",
    errors: ["Description is required"],
  },
};

export const Controlled = {
  render: () => {
    const [value, setValue] = useState("Hello world");
    return (
      <Textarea
        id="controlled"
        name="controlled"
        label="Controlled textarea"
        value={value}
        onChangeFunction={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Disabled = {
  args: {
    id: "disabled",
    name: "disabled",
    label: "Disabled field",
    defaultValue: "This cannot be edited",
    disabled: true,
  },
};
