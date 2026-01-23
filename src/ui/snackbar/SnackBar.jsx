import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import Icon from "../icon/Icon";

const snackBarTypes =
{
    "neutral": {
        icon: null,
        backgroundColor: "bg-white",
        borderColor: "border-black",
        color: "text-black"
    },
    "info": {
        icon: "info",
        backgroundColor: "bg-primary",
        borderColor: "border-black",
        color: "text-white"
    },
    "success": {
        icon: "check",
        backgroundColor: "bg-green-500/80",
        borderColor: "border-black",
        color: "text-black"
    },
    "warning": {
        icon: "exclamation-triangle",
        backgroundColor: "bg-amber-500/80",
        borderColor: "border-black",
        color: "text-black"
    },
    "error": {
        icon: "exclamation-circle",
        backgroundColor: "bg-red-500/80",
        borderColor: "border-black",
        color: "text-black"
    }
}

const Snackbar = ({
    type = "neutral",
    message,
    autoCloseTimer = 5000,
    className
}) => {

    const [isDisplayed, setIsDisplayed] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    // To display the time in a thin horizontal line.
    const [progress, setProgress] = useState(100);
    const intervalDelay = 50;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => setIsDisplayed(false), 300);
    };

    useEffect(() => {
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const percentage = Math.max(100 - (elapsed / autoCloseTimer) * 100, 0);
            setProgress(percentage);
        }, intervalDelay);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            handleClose();
        }, autoCloseTimer + 100);

        return () => clearTimeout(timeout);
    }, [autoCloseTimer]);


    return (
        isDisplayed && (
            <article
                title="Cliquer pour fermer" // TODO : Use i18n
                onClick={handleClose}
                className={clsx(
                    `fixed bottom-4
                     right-1/2
                     translate-x-1/2
                     flex flex-col
                     gap-2
                     w-max
                     max-w-[95%]
                     border-2
                     rounded-lg
                     hover:cursor-pointer
                     z-[9999]
                     transition transform duration-300
                     animate-fade-in
                     shadow-lg/22
                     hover:shadow-lg/14
                     active:shadow-lg/22`,
                    isClosing && "animate-fade-out",
                    snackBarTypes[type].backgroundColor,
                    snackBarTypes[type].borderColor,
                    snackBarTypes[type].color,
                    className
                )}
            >
                <div className="flex gap-4 px-4 pt-3">
                    {snackBarTypes[type].icon !== null &&
                        <span className="self-center">
                            <Icon
                                name={snackBarTypes[type].icon}
                                color={snackBarTypes[type].color}
                                size={8}
                                disableAnimation={true}
                            />
                        </span>
                    }
                    <p className="self-center break-words">
                        {message}
                    </p>
                </div>

                <div className="h-[3px] w-full overflow-hidden">
                    <div
                        className="h-full bg-black rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </article>
        )
    )
}

Snackbar.propTypes = {
    type: PropTypes.oneOf(Object.keys(snackBarTypes)),
    message: PropTypes.string.isRequired,
    autoCloseTimer: PropTypes.number,
    className: PropTypes.string
}

export default Snackbar;