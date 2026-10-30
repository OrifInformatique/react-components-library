import React, { Children } from "react";
import Title from "./Title";

export default {
    title: "Components/UI/Title",
    component: Title,
    tags: ["autodocs"],
    parameters: { 
        layout: "fullscreen" 
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]
        }
    }
};

export const Standard = {
    args: {
        children: "My title",
        size: "3xl"
    }
};

export const Small = {
    args: {
        children: "My title",
        size: "xl"
    }
};

export const Large = {
    args: {
        children: "My title",
        size: "4xl"
    }
};