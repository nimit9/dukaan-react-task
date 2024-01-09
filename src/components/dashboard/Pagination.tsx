import React from 'react';
import DashboardButton from './DashboardButton';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useTableRows } from '@/context/tableRowsContext';

const Pagination = () => {
    const { noOfPages, handlePageChange, currentPage } = useTableRows()!;

    const handleNext = () => {
        if (currentPage < noOfPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    return (
        <div className="w-full flex justify-center items-center gap-2 py-6 mb:gap-0.5 mb:items-stretch">
            <div className="mb:hidden">
                <DashboardButton
                    leftIcon={<FaAngleLeft />}
                    text="Previous"
                    handleClick={handlePrev}
                />
            </div>
            <div className="hidden mb:block">
                <DashboardButton
                    leftIcon={<FaAngleLeft />}
                    handleClick={handlePrev}
                />
            </div>

            {Array.from({ length: noOfPages }).map((_, index) => (
                <button
                    className={`${
                        currentPage === index + 1
                            ? 'bg-[#146eb4] text-white'
                            : 'bg-white'
                    } p-2 w-6 h-6 rounded-sm flex items-center justify-center text-xs mb:text-[10px]`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <div className="mb:hidden">
                <DashboardButton
                    icon={<FaAngleRight />}
                    text="Next"
                    handleClick={handleNext}
                />
            </div>
            <div className="hidden mb:block">
                <DashboardButton
                    icon={<FaAngleRight />}
                    handleClick={handleNext}
                />
            </div>
        </div>
    );
};

export default Pagination;
