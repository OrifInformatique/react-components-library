import { useState } from "react";
import { fn } from "@storybook/test";
import UserMenu from "./UserMenu";
import Icon from "../icon/Icon";

export default {
  title: "Components/UI/UserMenu",
  component: UserMenu,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export const LoggedIn = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="relative flex justify-end p-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen((v) => !v);
          }}
          className="inline-flex"
        >
          <Icon name="user" />
        </a>
        <UserMenu {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  },
  args: {
    user: { name: "John Doe", role: "admin" },
    setIsOpen: fn(), // mocké pour les actions
  },
};

export const LoggedOut = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="relative flex justify-end p-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen((v) => !v);
          }}
          className="inline-flex"
        >
          <Icon name="user" />
        </a>
        <UserMenu {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  },
  args: {
    user: null,
    setIsOpen: fn(),
  },
};
