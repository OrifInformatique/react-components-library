// src/ui/inputs/color-change/ColorChange.stories.js
import ColorChange from "./ColorChange";

const meta = {
  title: "Components/UI/ColorChange",
  component: ColorChange,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

export const Example = {           // <-- OK, car title différent de PopUp
  args: {
    id: "color-change",
    label: "Choose a color",
    color: "#005ba9",
    required: false,
    disabled: false,
  },
};
