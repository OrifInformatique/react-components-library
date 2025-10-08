// src/ui/inputs/checkbox/InputCheckbox.stories.jsx
import React, { useState } from "react";
import InputCheckbox from "./InputCheckbox";

const meta = {
  title: "Components/UI/InputCheckbox",
  component: InputCheckbox,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Basic = {
  args: {
    label: "Choose your options",
    options: [
      { id: "1", name: "opt1", label: "Option 1" },
      { id: "2", name: "opt2", label: "Option 2" },
      { id: "3", name: "opt3", label: "Option 3", defaultChecked: true },
    ],
  },
};

export const LabelLeft = {
  args: {
    label: "Choose with labels on the left",
    options: [
      { id: "a", name: "optA", label: "Option 1", labelPosition: "left" },
      { id: "b", name: "optB", label: "Option 2", labelPosition: "left" },
    ],
  },
};

export const DisabledOptions = {
  args: {
    label: "Some disabled options",
    options: [
      { id: "x", name: "optX", label: "Enabled option" },
      { id: "y", name: "optY", label: "Disabled option", disabled: true },
    ],
  },
};

export const AllDisabled = {
  args: {
    label: "All options disabled",
    allDisabled: true,
    options: [
      { id: "p", name: "optP", label: "Option P" },
      { id: "q", name: "optQ", label: "Option Q" },
    ],
  },
};

export const Required = {
  args: {
    label: "This field is required",
    required: true,
    options: [
      { id: "r1", name: "optR1", label: "Required 1" },
      { id: "r2", name: "optR2", label: "Required 2" },
    ],
  },
};

export const Controlled = {
  render: (args) => {
    const [selected, setSelected] = useState(["c1"]);
    return (
      <div className="space-y-4">
        <InputCheckbox
          {...args}
          value={selected}
          onChange={setSelected}
        />
        <p className="text-sm text-gray-600">
          Selected: {selected.length > 0 ? selected.join(", ") : "none"}
        </p>
      </div>
    );
  },
  args: {
    label: "Controlled example",
    options: [
      { id: "c1", name: "optC1", label: "Controlled 1" },
      { id: "c2", name: "optC2", label: "Controlled 2" },
    ],
  },
};
