import InputNumber from "./InputNumber";

export default {
    title: "Components/UI/InputNumber",
    component: InputNumber,
    tags: ["autodocs"],
    layout: "fullscreen"
}

export const Default = {
  args: {
    id: "quantity",
    name: "quantity",
    label: "Quantity",
  },
};

export const WithMinMax = {
  args: {
    id: "age",
    name: "age",
    label: "Age",
    min: 18,
    max: 99,
    defaultValue: 25,
  },
};

export const LimitedValues = {
    args: {
        id: "number-1",
        name: "number-1",
        label: "Votre âge :",
        min: 0,
        max: 130,
        required: true
    }
};

export const schoolGrade = {
    args: {
        id: "school-grade",
        name: "school-grade",
        label: "School grade",
        min: 1,
        max: 6,
        step: 0.1,
        defaultValue: 4.5,
        required: true
    }
};

export const Disabled = {
    args: {
        id: "number-2",
        name: "number-2",
        label: "Quantité :",
        min: 10,
        max: 130,
        disabled: true,
        required: false
    }
};

export const Uncontrolled = {
    args: {
        id: "number-3",
        name: "number-3",
        defaultValue: 42,
        required: true
    }
};

export const Controlled = {
    args: {
        id: "number-4",
        name: "number-4",
        value: "",
        required: true,
        onChangeFunction: (number) => alert("The input contains \"" + number + "\".")
    }
};