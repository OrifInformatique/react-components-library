// src/ui/header/Header.stories.jsx
import React from "react";
import Header from "./Header";
import Logo from "../logo";
import Icon from "../icon/Icon";
import Button from "../buttons/default/Button";

export default {
  title: "Components/UI/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export const Default = {
  args: {
    title: "Dashboard",
    logo: <Logo />,
  },
};

export const WithChildElement = {
  render: (args) => (
    <Header
      {...args}
      logo={<Logo />}
      title="Header with Child"
      childElement={<Button label="Action" variant="primary" />}
    />
  ),
};

export const WithUserMenu = {
  render: (args) => (
    <Header
      {...args}
      logo={<Logo />}
      title="Header with User Menu"
      userMenu={{
        icon: <Icon name="user" />,
        content: ({ close }) => (
          <div className="bg-white border rounded-md shadow-lg p-4 w-40">
            <p className="mb-2">Hello, User</p>
            <button
              onClick={close}
              className="text-sm text-blue-500 hover:underline"
            >
              Logout
            </button>
          </div>
        ),
      }}
    />
  ),
};

export const Minimal = {
  args: {},
};
