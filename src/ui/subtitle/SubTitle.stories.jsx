import React, { Children } from "react";
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

export const alignCenter = {
    args: {
        children: "My subtitle",
        align: "center"
    }
}

export const alignRight = {
    args: {
        children: "My subtitle",
        align: "end"
    }
}