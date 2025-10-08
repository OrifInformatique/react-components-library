import React, { useState } from "react";
import MultiSelect from "./MultiSelect";

const meta = {
  title: "Components/UI/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

export const Default = {
  render: () => <MultiSelect name="fruits" options={["Apple", "Banana", "Orange"]} />,
};

export const WithDefaultValues = {
  render: () => (
    <MultiSelect
      name="colors"
      options={["Red", "Green", "Blue"]}
      defaultValues={["Green"]}
    />
  ),
};

export const Controlled = {
  render: () => {
    const [values, setValues] = useState(["Dog"]);
    return (
      <MultiSelect
        name="animals"
        options={["Dog", "Cat", "Bird"]}
        selectedValues={values}
        onChangeFunction={setValues}
      />
    );
  },
};

export const CustomLabels = {
  render: () => (
    <MultiSelect
      name="custom"
      options={["One", "Two", "Three"]}
      emptyLabel="Nothing picked"
      singleLabel="choice"
      multipleLabel="choices"
    />
  ),
};
