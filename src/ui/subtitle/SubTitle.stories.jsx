import React from "react";
import SubTitle from "./SubTitle";

export default {
    title: "Components/UI/SubTitle",
    component: SubTitle,
    tags: ["autodocs"],
    parameters: { 
        layout: "fullscreen" 
    }
};

export const Standard = {
    args: {
        children: "My subtitle"
    }
};

export const AlignCenter = {
    args: {
        children: "My subtitle",
        align: "center"
    }
}

export const AlignEnd = {
    args: {
        children: "My subtitle",
        align: "end"
    }
}