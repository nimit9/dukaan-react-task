import { ReactNode, useState } from 'react';

import { HiOutlineChartBar as AnalyticsIcon } from 'react-icons/hi';
import { MdOutlinePalette as AppearanceIcon } from 'react-icons/md';
import { MdOutlineGroup as AudienceIcon } from 'react-icons/md';
import { CiDeliveryTruck as DeliveryIcon } from 'react-icons/ci';
import { TbDiscount2 as DiscountsIcon } from 'react-icons/tb';
import { GoHome as HomeIcon } from 'react-icons/go';
import { AiOutlineSound as MarketingIcon } from 'react-icons/ai';
import { LiaClipboardListSolid as OrdersIcon } from 'react-icons/lia';
import { MdOutlinePayments as PaymentsIcon } from 'react-icons/md';
import { IoFlashOutline as PluginsIcon } from 'react-icons/io5';
import { IoGridOutline as ProductsIcon } from 'react-icons/io5';
import { LuMousePointer2 as ToolsIcon } from 'react-icons/lu';

const PanelMenuItem = ({
    icon,
    text,
    handleClick,
    isActive,
}: {
    icon: ReactNode;
    text: string;
    handleClick: () => void;
    isActive: boolean;
}) => {
    return (
        <div
            className={`${
                isActive
                    ? 'bg-primary-light text-white'
                    : 'text-text-white-secondary'
            } flex items-center gap-2 px-3 py-2 mb:px-0 mb:justify-center cursor-pointer rounded-sm flex-1`}
            onClick={handleClick}
        >
            {icon}
            <span className="text-xs mb:hidden">{text}</span>
        </div>
    );
};

const PanelMenu = () => {
    const [activeItem, setActiveItem] = useState('Payments');
    const menuItems = [
        {
            icon: <HomeIcon />,
            text: 'Home',
        },
        {
            icon: <OrdersIcon />,
            text: 'Orders',
        },
        {
            icon: <ProductsIcon />,
            text: 'Products',
        },
        {
            icon: <DeliveryIcon />,
            text: 'Delivery',
        },
        {
            icon: <MarketingIcon />,
            text: 'Marketing',
        },
        {
            icon: <AnalyticsIcon />,
            text: 'Analytics',
        },
        {
            icon: <PaymentsIcon />,
            text: 'Payments',
        },
        {
            icon: <ToolsIcon />,
            text: 'Tools',
        },
        {
            icon: <DiscountsIcon />,
            text: 'Discounts',
        },
        {
            icon: <AudienceIcon />,
            text: 'Audience',
        },
        {
            icon: <AppearanceIcon />,
            text: 'Appearance',
        },
        {
            icon: <PluginsIcon />,
            text: 'Plugins',
        },
    ];
    return (
        <div className="flex flex-col gap-px px-2 mt-2">
            {menuItems.map((item) => {
                return (
                    <PanelMenuItem
                        {...item}
                        handleClick={() => setActiveItem(item.text)}
                        isActive={activeItem === item.text}
                    />
                );
            })}
        </div>
    );
};

export default PanelMenu;
3;
