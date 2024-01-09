import { BsChatLeftDotsFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineCaretDown as DownCaretIcon } from 'react-icons/ai';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { ReactNode } from 'react';

const Search = () => {
    return (
        <div className="flex-1 flex justify-center mb:hidden">
            <div className="bg-[#f2f3f3]  py-1.5 px-2 flex items-center gap-2 rounded w-1/2 tb:w-5/6 text-sm">
                <CiSearch size={20} />
                <input
                    className="outline-none bg-[#f2f3f3] flex-1 placeholder:text-[#7e7f7e]"
                    placeholder="Search features, tutorials, etc...."
                />
            </div>
        </div>
    );
};

const ActionButton = ({ icon }: { icon: ReactNode }) => {
    return (
        <button className="rounded-full bg-[#e6e7e7] text-[#4d4d4c] flex items-center justify-center w-8 h-8 p-2">
            {icon}
        </button>
    );
};

const DashboardHeader = () => {
    return (
        <div className="w-full h-[54px] shadow-sm flex items-center gap-4 py-1.5 px-6 bg-white mb:px-4">
            <h1 className="font-medium cursor-pointer">Payments</h1>
            <div className="flex items-center gap-1.5 text-text-secondary text-xs cursor-pointer">
                <FaRegCircleQuestion />
                <span>How it works</span>
            </div>

            <Search />

            <div className="flex gap-2 mb:flex-1 mb:justify-end">
                <div className="hidden mb:block">
                    <ActionButton icon={<CiSearch size={20} />}></ActionButton>
                </div>
                <ActionButton icon={<BsChatLeftDotsFill size={16} />} />
                <ActionButton icon={<DownCaretIcon />} />
            </div>
        </div>
    );
};

export default DashboardHeader;
