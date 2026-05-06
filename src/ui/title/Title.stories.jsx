import React from "react";
import Title from "./Title";

export default {
    title: "Components/UI/Title",
    component: Title,
    tags: ["autodocs"],
    parameters: { 
        layout: "fullscreen" 
    },
};

export const Standard = () => (
    <Title>
        Mon titre
    </Title>
);