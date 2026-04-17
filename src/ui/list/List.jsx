import React from 'react';

import Button from '../buttons/default/Button';
import PopUp from '../pop-up/PopUp';
import PropTypes from 'prop-types';

const List = ({
    items = [],
    actions = {},
    columns,
    columnsLabels = {},
    showDeleted = false,
    onToggleShowDeleted,
    actionsLabel,
    showDeletedLabel,
    noItemsLabel,
    confirmHardDeleteTitle,
    confirmHardDeleteText,
    hasPermission = () => true,
    deletedKey = 'isDeleted',
}) => {
    const [hardDeleteTarget, setHardDeleteTarget] = React.useState(null);

    // Derive columns from the first item's keys if not explicitly provided
    const cols = columns ?? (items.length ? Object.keys(items[0]) : []);

    // Check permissions for each action
    const can = (key) =>
        actions[key] &&
        (!actions[key].permission || hasPermission(actions[key].permission));
    const canEdit = can('edit');
    const canDelete = can('delete');
    const canRestore = can('restore');
    const canHardDelete = can('hardDelete');
    const canViewDeleted = can('viewDeleted');
    const canView = can('view');
    const hasVisibleActions =
        canEdit || canDelete || canRestore || canHardDelete;

    return (
        <div className="overflow-x-auto">
            {onToggleShowDeleted && canViewDeleted && (
                <label className="flex items-center justify-end gap-2 mb-4 mr-4">
                    {showDeletedLabel ?? 'Show deleted items'}
                    <input
                        type="checkbox"
                        checked={showDeleted}
                        onChange={(e) => onToggleShowDeleted(e.target.checked)}
                    />
                </label>
            )}
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {cols.map((col) => (
                            <th
                                key={col}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {columnsLabels[col] ?? col}
                            </th>
                        ))}
                        {hasVisibleActions && (
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {actionsLabel ?? ''}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {items.length === 0 ?
                        <tr>
                            <td
                                colSpan={
                                    cols.length + (hasVisibleActions ? 1 : 0)
                                }
                                className="px-6 py-4 text-sm text-gray-500 italic text-center"
                            >
                                {noItemsLabel ?? 'No items to display.'}
                            </td>
                        </tr>
                    :   items.map((item, index) => (
                            <tr
                                key={item.id ?? index}
                                className="hover:bg-gray-50"
                            >
                                {cols.map((col) => (
                                    <td
                                        key={col}
                                        className={`px-6 py-4 text-sm text-gray-900 ${item[deletedKey] ? 'line-through text-gray-400' : ''} ${canView ? 'cursor-pointer hover:underline' : ''}`}
                                        onClick={
                                            canView ?
                                                () => actions.view.onClick(item)
                                            :   undefined
                                        }
                                    >
                                        {String(item[col] ?? '')}
                                    </td>
                                ))}
                                {hasVisibleActions && (
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium align-middle">
                                        <div className="flex justify-end items-center gap-2">
                                            {canEdit && !item[deletedKey] && (
                                                <Button
                                                    variant="secondary"
                                                    icon="edit"
                                                    onClick={() =>
                                                        actions.edit.onClick(
                                                            item,
                                                        )
                                                    }
                                                />
                                            )}
                                            {canDelete && !item[deletedKey] && (
                                                <Button
                                                    variant="secondary"
                                                    icon="delete"
                                                    onClick={() =>
                                                        actions.delete.onClick(
                                                            item,
                                                        )
                                                    }
                                                />
                                            )}
                                            {canRestore && item[deletedKey] && (
                                                <Button
                                                    variant="secondary"
                                                    icon="restore"
                                                    onClick={() =>
                                                        actions.restore.onClick(
                                                            item,
                                                        )
                                                    }
                                                />
                                            )}
                                            {canHardDelete &&
                                                item[deletedKey] && (
                                                    <>
                                                        <Button
                                                            variant="danger"
                                                            icon="delete"
                                                            onClick={() =>
                                                                setHardDeleteTarget(
                                                                    item,
                                                                )
                                                            }
                                                        />
                                                        {hardDeleteTarget &&
                                                            hardDeleteTarget.id ===
                                                                item.id && (
                                                                <PopUp
                                                                    title={
                                                                        confirmHardDeleteTitle
                                                                    }
                                                                    onClose={() =>
                                                                        setHardDeleteTarget(
                                                                            null,
                                                                        )
                                                                    }
                                                                >
                                                                    <p className="whitespace-normal break-words text-left">
                                                                        {
                                                                            confirmHardDeleteText
                                                                        }
                                                                    </p>
                                                                    <div className="flex justify-end gap-2 mt-4">
                                                                        <Button
                                                                            variant="secondary"
                                                                            icon="restore"
                                                                            onClick={() =>
                                                                                setHardDeleteTarget(
                                                                                    null,
                                                                                )
                                                                            }
                                                                        />
                                                                        <Button
                                                                            variant="danger"
                                                                            icon="delete"
                                                                            onClick={() => {
                                                                                actions.hardDelete.onClick(
                                                                                    item,
                                                                                );
                                                                                setHardDeleteTarget(
                                                                                    null,
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </PopUp>
                                                            )}
                                                    </>
                                                )}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};



List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.objectOf(
        PropTypes.shape({
            permission: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
    columns: PropTypes.arrayOf(PropTypes.string),
    columnsLabels: PropTypes.objectOf(PropTypes.string),
    showDeleted: PropTypes.bool,
    onToggleShowDeleted: PropTypes.func,
    actionsLabel: PropTypes.string,
    showDeletedLabel: PropTypes.string,
    noItemsLabel: PropTypes.string,
    confirmHardDeleteTitle: PropTypes.string,
    confirmHardDeleteText: PropTypes.string,
    hasPermission: PropTypes.func,
    deletedKey: PropTypes.string,
};

export default List;
