import React, { useState } from "react";
import List from "./List";

const sampleItems = [
    { id: 1, name: "Item 1", author: "Alice", description: "First item", createdAt: "2025-01-01", updatedAt: "2025-06-01" },
    { id: 2, name: "Item 2", author: "Bob", description: "Second item", createdAt: "2025-02-15", updatedAt: "2025-06-10" },
    { id: 3, name: "Item 3", author: "Charlie", description: "Third item", createdAt: "2025-03-20", updatedAt: "2025-07-01" },
];

const sampleItemsWithDeleted = [
    ...sampleItems,
    { id: 4, name: "Deleted Item", author: "Dave", description: "Soft-deleted", createdAt: "2025-04-01", updatedAt: "2025-05-01", isDeleted: true },
    { id: 5, name: "Another Deleted", author: "Eve", description: "Also removed", createdAt: "2025-04-10", updatedAt: "2025-05-15", isDeleted: true },
];

const allActions = {
    edit: { permission: "user:update", onClick: (item) => alert(`Edit: ${item.name}`) },
    delete: { permission: "user:delete", onClick: (item) => alert(`Delete: ${item.name}`) },
    restore: { permission: "user:write", onClick: (item) => alert(`Restore: ${item.name}`) },
    hardDelete: { permission: "user:delete", onClick: (item) => alert(`Hard delete: ${item.name}`) },
    viewDeleted: { permission: "user:read" },
    view: { permission: "user:read", onClick: (item) => alert(`View: ${item.name}`) },
};

export default {
    title: "components/UI/List",
    component: List,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export const BaseList = {
    render: (args) => <List {...args} />,
    args: {
        items: sampleItems,
    },
};

export const EmptyList = {
    render: (args) => <List {...args} />,
    args: {
        items: [],
        noItemsLabel: "No items to display.",
    },
};

export const WithSpecifiedColumns = {
    render: (args) => <List {...args} />,
    args: {
        items: sampleItems,
        columns: ["id", "name", "author", "description"],
        columnsLabels: {
            id: "#",
            name: "Name",
            author: "Author",
            description: "Description",
        },
    },
};

export const WithActions = {
    render: (args) => <List {...args} />,
    args: {
        items: sampleItems,
        columns: ["id", "name", "author"],
        columnsLabels: { id: "#", name: "Name", author: "Author" },
        actions: allActions,
        actionsLabel: "Actions",
        hasPermission: () => true,
    },
};

export const WithDeletedItems = {
    render: (args) => {
        const [showDeleted, setShowDeleted] = useState(true);
        const visibleItems = showDeleted
            ? args.items
            : args.items.filter((item) => !item.isDeleted);
        return (
            <List
                {...args}
                items={visibleItems}
                showDeleted={showDeleted}
                onToggleShowDeleted={setShowDeleted}
            />
        );
    },
    args: {
        items: sampleItemsWithDeleted,
        columns: ["id", "name", "author", "description"],
        columnsLabels: { id: "#", name: "Name", author: "Author", description: "Description" },
        actions: allActions,
        actionsLabel: "Actions",
        showDeletedLabel: "Show deleted items",
        hasPermission: () => true,
        confirmHardDeleteTitle: "Confirm Permanent Deletion",
        confirmHardDeleteText: "Are you sure you want to permanently delete this item? This action cannot be undone.",
    },
};

export const ReadOnly = {
    render: (args) => <List {...args} />,
    args: {
        items: sampleItems,
        columns: ["id", "name", "author", "description", "createdAt", "updatedAt"],
        columnsLabels: {
            id: "#",
            name: "Name",
            author: "Author",
            description: "Description",
            createdAt: "Created At",
            updatedAt: "Updated At",
        },
        actions: {
            view: { permission: "user:read", onClick: (item) => alert(`Viewing: ${item.name}`) },
        },
        hasPermission: () => true,
    },
};

export const LimitedPermissions = {
    render: (args) => <List {...args} />,
    args: {
        items: sampleItems,
        columns: ["id", "name", "author"],
        columnsLabels: { id: "#", name: "Name", author: "Author" },
        actions: allActions,
        actionsLabel: "Actions",
        hasPermission: (perm) => perm === "user:read",
    },
};