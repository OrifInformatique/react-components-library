// src/ui/pop-up/PopUp.stories.jsx
import React, { useState } from "react";
import PopUp from "./PopUp";
import Button from "../buttons/default/Button";

const meta = {
  title: "Components/UI/PopUp",
  component: PopUp,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

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
            <Button
              label="Accepter"
              onClick={() => console.log("Oui cliqué")}
              variant="primary"
            />
            <Button
              label="Annuler"
              onClick={() => setOpen(false)}
              variant="danger"
            />
          </PopUp>
        ) : null}
      </>
    );
  },
  args: {
    title: "Titre",
    description:
      "Press F12 to test responsive or use the tool within storybook",
  },
};
export const Default = { // <-- différent de "Example"
  args: {
    open: true,
    title: "Confirmation",
    children: "Voulez-vous continuer ?",
    confirmText: "Oui",
    cancelText: "Non",
  },
};
export const Closed = {
  args: {
    open: false,
    title: "Fermé",
    children: "Contenu masqué",
  },
};