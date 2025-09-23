// src/ui/inputs/color-change/ColorChange.stories.jsx
import React, { useState } from "react";
import ColorChange from "./ColorChange";

const meta = {
  title: "Components/UI/ColorChange",
  component: ColorChange,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

export const Default = {
  args: {
    label: "Pick a color",
    defaultColor: "#005ba9",
    required: true,
  },
};

export const WithoutLabel = {
  args: {
    defaultColor: "#ff0000",
  },
};

export const CustomPrefix = {
  args: {
    label: "Custom prefix",
    defaultColor: "#00ff00",
    prefix: "HEX:",
  },
};

export const Interactive = {
  render: (args) => {
    const [color, setColor] = useState(args.defaultColor);
    return (
      <div className="flex flex-col items-center gap-4">
        <ColorChange
          {...args}
          defaultColor={color}
          onChange={(val) => setColor(val)}
        />
        <p>Selected: <strong>{color}</strong></p>
      </div>
    );
  },
  args: {
    label: "Interactive Color Picker",
    defaultColor: "#ff9900",
  },
};
