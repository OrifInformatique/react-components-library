import React from "react";
import SubTitle from "./SubTitle";

export default {
    title: "Components/UI/SubTitle",
    component: SubTitle,
    tags: ["autodocs"],
    parameters: { 
        layout: "fullscreen" 
    },
};

export const Standard = () => (
    <SubTitle>
        Mon sous-titre
    </SubTitle>
);