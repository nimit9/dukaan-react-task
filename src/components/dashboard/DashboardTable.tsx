import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { CiCircleInfo } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import DashboardButton from './DashboardButton';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import { TbArrowsSort } from 'react-icons/tb';
import { useTableRows } from '../../context/tableRowsContext';
import Pagination from './Pagination';

const DashboardTable = () => {
    const { search, sortRows, searchedRows } = useTableRows()!;
    return (
        <div className="w-full bg-white p-2 rounded-md shadow-sm">
            <div className="flex justify-between w-full">
                <div className="border-[##d9d9d9] border  py-1.5 px-2 flex items-center gap-2 rounded text-sm w-1/4 mb:w-3/5">
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
                    <DashboardButton
                        icon={<TbArrowsSort />}
                        text="Sort"
                        handleClick={sortRows}
                    />
                    <DashboardButton icon={<BsDownload />} />
                </div>
            </div>
            {searchedRows && searchedRows.length > 0 ? (
                <>
                    <TableHeader />
                    <TableRows />
                    <Pagination />
                </>
            ) : (
                <div className="w-full p-10 flex items-center justify-center">
                    No Rows Found
                </div>
            )}
        </div>
    );
};

export default DashboardTable;
