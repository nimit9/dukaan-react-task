import { AiOutlineCaretDown } from 'react-icons/ai';
import { CiCircleInfo } from 'react-icons/ci';

const TableHeader = () => {
    const tableHeaders = [
        {
            text: 'Order ID',
        },
        {
            text: 'Order date',
            icon: <AiOutlineCaretDown />,
        },
        {
            text: 'Order amount',
        },
        {
            text: 'Transaction fees',
            icon: <CiCircleInfo />,
        },
    ];

    const mobileTableHeaders = [
        {
            text: 'Order ID',
        },
        {
            text: 'Date',
            icon: <AiOutlineCaretDown />,
        },
        {
            text: 'Amount',
        },
        {
            text: 'Fees',
            icon: <CiCircleInfo />,
        },
    ];

    return (
        <>
            <div className="grid grid-cols-4 mt-3 px-3 text-sm bg-[#f2f3f3]  rounded text-[#4d4d4c] font-semibold mb:hidden">
                {tableHeaders.map((header, index) => {
                    return (
                        <div
                            className={`flex items-center gap-0.5 w-full py-2 ${
                                index < 2 ? 'justify-start' : 'justify-end'
                            }`}
                        >
                            <span>{header.text}</span>
                            {header.icon || null}
                        </div>
                    );
                })}
            </div>
            <div className="grid-cols-4 mt-3 px-3 bg-[#f2f3f3]  rounded text-[#4d4d4c] font-semibold hidden mb:grid text-xs">
                {mobileTableHeaders.map((header, index) => {
                    return (
                        <div
                            className={`flex items-center gap-0.5 w-full py-2 ${
                                index < 2 ? 'justify-start' : 'justify-end'
                            }`}
                        >
                            <span>{header.text}</span>
                            {header.icon || null}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TableHeader;
