import React from "react";
import Title from "./Title";

export default {
    title: "Components/UI/Title",
    component: Title,
    tags: ["autodocs"],
    parameters: { 
        layout: "fullscreen" 
    }
};

export const Standard = {
    args: {
        children: "My title"
    }
};

export const AlignCenter = {
    args: {
        children: "My title",
        align: "center"
    }
}

export const AlignEnd = {
    args: {
        children: "My title",
        align: "end"
    }
}

