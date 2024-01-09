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
        <div className="w-full flex justify-center items-center gap-2 py-6">
            <DashboardButton
                leftIcon={<FaAngleLeft />}
                text="Previous"
                handleClick={handlePrev}
            />
            {Array.from({ length: noOfPages }).map((_, index) => (
                <button
                    className={`${
                        currentPage === index + 1
                            ? 'bg-[#146eb4] text-white'
                            : 'bg-white'
                    } p-2 w-6 h-6 rounded-sm flex items-center justify-center text-xs`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <DashboardButton
                icon={<FaAngleRight />}
                text="Next"
                handleClick={handleNext}
            />
        </div>
    );
};

export default Pagination;
