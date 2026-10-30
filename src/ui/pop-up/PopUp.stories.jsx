// src/ui/pop-up/PopUp.stories.jsx
import React, { useState } from "react";
import PopUp from "./PopUp";
import Button from "../buttons/default/Button";
import SingleSelect from "../inputs/single-select/SingleSelect";
import InputRadio from "../inputs/radio/InputRadio";

const meta = {
  title: "Components/UI/PopUp",
  component: PopUp,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

const HTMLButton = (
  <>
    <div className="flex flex-row justify-end gap-2">
      <Button
        label="Confirm"
        onClick={() => console.log("Confirmé cliqué")}
        variant="primary"
      />
      <Button
        label="Cancel"
        onClick={() => console.log("Annulé cliqué")}
        variant="danger"
      />
    </div>
  </>
);

const HTMLexample = (
  <>
    <div className="flex flex-col gap-4">
      <SingleSelect
        label="Choose a object"
        name="object"
        options={[
          { label: "Table", value: "table" },
          { label: "Chair", value: "chair" },
          { label: "Desk", value: "desk" }
        ]}
      />
      <InputRadio
        label="Choose a size"
        name="size"
        options={[
          { defaultChecked: true, id: "opt1", label: "size M" },
          { id: "opt2", label: "size L" },
          { id: "opt3", label: "size XL" }
        ]}
      />
    </div>
    {HTMLButton}
  </>
);



export const DialogueResponsive = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          onClick={() => setOpen(true)}
          label="Ouvrir le PopUp"
          variant="primary"
        />

        {open ? (
          <PopUp
            title={args.title}
            description={args.description}
            onClose={() => setOpen(false)}
          >

            {HTMLButton}

          </PopUp>
        ) : null}
      </>
    );
  },
  args: {
    title: "Titre",
    description: "Press F12 to test responsive or use the tool within storybook",
  },
};

export const Default = { // <-- différent de "Example"
  args: {
    open: true,
    title: "Confirmation",
    description: "Voulez-vous continuer ?",
    children: HTMLButton
  },
};

export const Closed = {
  args: {
    open: false,
    title: "Fermé",
    description: "Contenu masqué",
  },
};

export const MultipleChildren = {
  args: {
    open: true,
    title: "Mutiple children",
    description: "Display multiple components in one popup",
    children: HTMLexample
  },
};