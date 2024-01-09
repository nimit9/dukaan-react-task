import React from 'react';

const StatsCard = ({ heading, stat }: { heading: string; stat: string }) => {
    return (
        <div className="flex-1 gap-3 flex-col flex p-4 bg-white shadow-sm rounded-md mb:w-full">
            <span className="text-xs text-[#8b8a8a]">{heading}</span>
            <span className="font-semibold text-xl">{stat}</span>
        </div>
    );
};

const DashboardStats = () => {
    const stats = [
        {
            heading: 'Online Orders',
            stat: '231',
        },
        {
            heading: 'Amount Received',
            stat: '₹ 23,92,312.19',
        },
    ];
    return (
        <div className="w-full flex items-center gap-4 mb:flex-col">
            {stats.map((item) => (
                <StatsCard {...item} key={item.heading} />
            ))}
        </div>
    );
};

export default DashboardStats;
