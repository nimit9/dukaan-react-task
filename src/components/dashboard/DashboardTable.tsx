import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { CiCircleInfo } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import DashboardButton from './DashboardButton';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import { TbArrowsSort } from 'react-icons/tb';
import { useTableRows } from '@/context/tableRowsContext';

const DashboardTable = () => {
    const { search } = useTableRows()!;
    return (
        <div className="w-full bg-white p-2 rounded-md shadow-sm">
            <div className="flex justify-between w-full">
                <div className="border-[##d9d9d9] border  py-1.5 px-2 flex items-center gap-2 rounded text-sm w-1/4">
                    <CiSearch size={20} />
                    <input
                        placeholder="Search by order ID..."
                        className="w-full outline-none placeholder:text-[#919090]"
                        onChange={(e) => {
                            search(e.target.value);
                        }}
                    />
                </div>
                <div className="flex gap-2 items-stretch">
                    <DashboardButton icon={<TbArrowsSort />} text="Sort" />
                    <DashboardButton icon={<BsDownload />} />
                </div>
            </div>
            <TableHeader />
            <TableRows />
            <div className="w-full flex justify-center items-center gap-2 py-6">
                <DashboardButton leftIcon={<FaAngleLeft />} text="Previous" />
                {Array.from({ length: 10 }).map((_, index) => (
                    <button
                        className={`${
                            index === 4 ? 'bg-[#146eb4] text-white' : 'bg-white'
                        } p-2 w-6 h-6 rounded-sm flex items-center justify-center text-xs`}
                    >
                        {index + 1}
                    </button>
                ))}
                <DashboardButton icon={<FaAngleRight />} text="Next" />
            </div>
        </div>
    );
};

export default DashboardTable;
