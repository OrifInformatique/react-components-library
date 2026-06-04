import { fn } from "@vitest/spy";
import UserMenu from "./UserMenu";
import Icon from "../icon/Icon";

export default {
    title: "Components/UI/UserMenu",
    component: UserMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen"
    },
    args: {
        showAdminMenu:false
    }
}

export const LoggedIn = {
    render: (args) => (
        <div class="relative flex justify-end">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(prev => !prev);
                }}
            >
                <Icon name="user" />
            </a>
            <UserMenu {...args} />
        </div>
    ),
    args: {
        user: {
            name: "John Doe"
        },
        showAdminMenu:false,
        isOpen: true,
        setIsOpen: fn()
    }
}

export const LoggedOut = {
    render: (args) => (
        <div class="relative flex justify-end">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(prev => !prev);
                }}
            >
                <Icon name="user" />
            </a>
            <UserMenu {...args} />
        </div>
    ),
    args: {
        user: null,
        isOpen: true,
        showAdminMenu:false,
        setIsOpen: fn()
    }
}

export const FrenchLoggedIn = {
    render: (args) => (
        <div class="relative flex justify-end">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(prev => !prev);
                }}
            >
                <Icon name="user" />
            </a>
            <UserMenu {...args} />
        </div>
    ),
    args: {
        user: {
            name: "John Doe"
        },
        showAdminMenu:false,
        isOpen: true,
        setIsOpen: fn(),
        greetingLabel: "Bonjour",
        passwordChangeLabel: "Changer le mot de passe",
        administrationLabel: "Administration",
        loginLabel: "Se connecter",
        logoutLabel: "Se déconnecter",
        notConnectedLabel: "Vous n'êtes pas connecté"
    }
}

export const ShownAdminMenu = {
    render: (args) => (
        <div class="relative flex justify-end">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(prev => !prev);
                }}
            >
                <Icon name="user" />
            </a>
            <UserMenu {...args} />
        </div>
    ),
    args: {
        user: {
            name: "John Doe"
        },
        showAdminMenu:true,
        isOpen: true,
        setIsOpen: fn()
    }
}