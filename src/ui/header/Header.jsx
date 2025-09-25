import React, { useState } from "react";
import PropTypes from "prop-types";

// UI elements
import Icon from "../icon/Icon";
import Logo from "../logo";
import UserMenu from "../user-menu/UserMenu";

const Header = ({
  user = null,
  title = null,
  childElement = null }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-primary py-6 px-2">
            <div className="relative flex justify-between items-center">
                <Logo className={"h-10"} />
                <h1 className="absolute text-4xl left-1/2 transform -translate-x-1/2 center">
                    {title}
                </h1>
                <div className="flex items-center gap-x-4">
                    {childElement}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(prev => !prev);
                        }}
                    >
                        <Icon name="user" />
                    </a>
                </div>
                {isOpen && (
                    <UserMenu user={user} setIsOpen={setIsOpen} />
                )}
            </div>
        </header>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.oneOf(["admin", "user"]).isRequired
    }),
    title: PropTypes.string,
    childElement: PropTypes.element
}

export default Header;