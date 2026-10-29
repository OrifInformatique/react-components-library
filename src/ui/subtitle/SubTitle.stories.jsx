import React, { Children } from "react";
import SubTitle from "./SubTitle";
import { ArgTypes } from "@storybook/addon-docs";

export default {
    title: "Components/UI/SubTitle",
    component: SubTitle,
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
        children: "My subtitle",
        size: "2xl"
    }
};

export const Small = {
    args: {
        children: "My subtitle",
        size: "lg"
    }
};

export const Large = {
    args: {
        children: "My subtitle",
        size: "3xl"
    }
};