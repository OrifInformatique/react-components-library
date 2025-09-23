import React, { useState } from "react";
import SingleSelect from "./SingleSelect";

const meta = {
  title: "Components/UI/SingleSelect",
  component: SingleSelect,
  tags: ["autodocs"],
  parameters: { layout: "left" },
};
export default meta;

const OPTIONS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export const Default = {
  args: {
    name: "fruit",
    label: "Choose a fruit",
    options: OPTIONS,
  },
};

export const WithPlaceholder = {
  args: {
    name: "fruit",
    label: "Select with placeholder",
    options: OPTIONS,
    placeholder: "Pick a fruit...",
  },
};

export const Controlled = {
  render: () => {
    const [value, setValue] = useState("banana");
    return (
      <SingleSelect
        name="controlled-fruit"
        label="Controlled Select"
        options={OPTIONS}
        selectedValue={value}
        onChangeFunction={(val) => setValue(val)}
      />
    );
  },
};

export const Disabled = {
  args: {
    name: "fruit-disabled",
    label: "Disabled select",
    options: OPTIONS,
    disabled: true,
  },
};
