import React, { ReactNode } from "react";

const DashboardButton = ({
    text,
    icon,
    leftIcon,
}: {
    text?: string;
    leftIcon?: ReactNode;
    icon?: ReactNode;
}) => {
    return (
        <button className='rounded-sm px-2 py-1 flex text-xs items-center gap-2 bg-white border-[#d9d9d9] border text-[#4d4d4c]'>
            {leftIcon || null}
            {text ? <span>{text}</span> : null}
            {icon || null}
        </button>
    );
};

export default DashboardButton;
