import React, { useState } from "react";
import InputSearch from "./InputSearch";

const meta = {
  title: "Components/UI/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  parameters: { layout: "left" },
};
export default meta;

export const Default = {
  args: {
    id: "search-default",
    name: "search",
    label: "Search",
    placeholder: "Type to search...",
  },
};

export const Controlled = {
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <InputSearch
        id="search-controlled"
        name="search"
        label="Search input"
        value={query}
        onChangeFunction={(e) => setQuery(e.target.value)}
        placeholder="Controlled search..."
      />
    );
  },
};
