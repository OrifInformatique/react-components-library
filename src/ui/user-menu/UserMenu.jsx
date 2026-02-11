import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "../buttons/default/Button";

const UserMenu = ({
    user = null,
    setIsOpen,
    onLogin = () => {},
    onLogout = () => {},
    greetingLabel = "Bonjour",
    passwordChangeLabel = "Changer de mot de passe",
    administrationLabel = "Administration",
    loginLabel = "Login",
    logoutLabel = "Logout",
    notConnectedLabel = "Vous n'êtes pas connecté"
}) => {
    const ref = useRef(null);

    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClosing(true);
                setTimeout(() => setIsOpen(false), 300);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [setIsOpen]);

    return (
        <div ref={ref} className={`absolute flex flex-col items-start gap-2 mt-4 right-2 top-full rounded-md shadow-lg bg-background p-4 transition transform duration-300
                     ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`} >
            {user ? (<>
                <span>{greetingLabel}, <b>{user.name}</b> !</span>
                <ul className="flex flex-col items-start text-primary">
                    {user.role === "admin" && <li><a href="/">{administrationLabel}</a></li>}
                    <li><a href="/">{passwordChangeLabel}</a></li>
                </ul>
                <Button className="self-end" label={logoutLabel} icon="logout" onClick={onLogout} />
            </>) : (<>
                <p>{notConnectedLabel}</p>
                <Button className="self-end" variant="primary" label={loginLabel} icon="login" onClick={onLogin} />
            </>)}
        </div>
    );
}

UserMenu.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.oneOf(["admin", "user"]).isRequired
    }),
    setIsOpen: PropTypes.func.isRequired,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func
}

export default UserMenu;