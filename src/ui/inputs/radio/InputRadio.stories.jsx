import React, { useState } from "react";
import InputRadio from "./InputRadio";

const meta = {
  title: "Components/UI/InputRadio",
  component: InputRadio,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Default = {
  args: {
    name: "example",
    label: "Choose one option",
    options: [
      { id: "opt1", label: "Option 1", defaultChecked: true },
      { id: "opt2", label: "Option 2" },
      { id: "opt3", label: "Option 3", disabled: true },
    ],
  },
};

export const LeftLabel = {
  args: {
    name: "example-left",
    label: "Left labels",
    options: [
      { id: "opt1", label: "Option 1", labelPosition: "left" },
      { id: "opt2", label: "Option 2", labelPosition: "left" },
    ],
  },
};

export const Controlled = {
  render: () => {
    const [selected, setSelected] = useState("opt1");
    return (
      <InputRadio
        name="controlled-example"
        label="Controlled radio input"
        options={[
          { id: "opt1", label: "Option 1" },
          { id: "opt2", label: "Option 2" },
        ]}
        onChange={(id) => setSelected(id)}
      />
    );
  },
};
