import React, { ReactNode } from 'react';

const DashboardButton = ({
    text,
    icon,
    leftIcon,
    handleClick,
}: {
    text?: string;
    leftIcon?: ReactNode;
    icon?: ReactNode;
    handleClick?: () => void;
}) => {
    return (
        <button
            className="rounded-sm px-2 py-1 flex text-xs items-center gap-2 bg-white border-[#d9d9d9] border text-[#4d4d4c]"
            onClick={() => {
                handleClick ? handleClick() : null;
            }}
        >
            {leftIcon || null}
            {text ? <span>{text}</span> : null}
            {icon || null}
        </button>
    );
};

export default DashboardButton;
