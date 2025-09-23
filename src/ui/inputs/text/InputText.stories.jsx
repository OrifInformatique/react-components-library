import React, { useState } from "react";
import InputText from "./InputText";

const meta = {
  title: "Components/UI/InputText",
  component: InputText,
  tags: ["autodocs"],
  parameters: { layout: "left" },
};
export default meta;

export const Default = {
  args: {
    id: "username",
    name: "username",
    label: "Username",
    placeholder: "Enter your username"
  },
};

export const WithError = {
  args: {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    errors: ["Email is required"],
  },
};

export const Controlled = {
  render: () => {
    const [value, setValue] = useState("Hello");
    return (
      <InputText
        id="controlled"
        name="controlled"
        label="Controlled Input"
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
    label: "Disabled input",
    disabled: true,
    defaultValue: "Can't edit this"
  },
};
