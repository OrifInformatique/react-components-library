import Header from "./Header";
import { fn } from "@storybook/test";

export default {
    title: "Components/UI/Header",
    component: Header,
    tags: ["autodocs"],
    layout: "fullscreen",
    args: {
        title: "App title",
        showAdminMenu:true,
        onLogin: fn(),
        onLogout: fn(),
        onAccountClick: fn()
    }
}

export const LoggedIn = {
    args: {
        user: {
            name: "Jean-Pierre",
            role: "admin"
        }
    }
}

export const LoggedOut = {}