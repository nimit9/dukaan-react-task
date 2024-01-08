import { AiOutlineCaretDown } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";

const TableRows = () => {
    const tableRows = Array.from({ length: 2 }).map(() => [
        "#281209",
        "7 July, 2023",
        "₹1278.23",
        "₹22",
    ]);

    return (
        <>
            {tableRows.map((row, rowIndex) => {
                return (
                    <>
                        <div className='grid grid-cols-4 px-3 py-1 text-sm rounded'>
                            {row.map((value, index) => (
                                <div
                                    className={`flex items-center gap-0.5 w-full py-2 ${
                                        index < 2
                                            ? "justify-start"
                                            : "justify-end"
                                    }`}
                                >
                                    <span
                                        className={
                                            index === 0
                                                ? "text-[#146eb4] font-medium"
                                                : ""
                                        }
                                    >
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <hr className='w-full' />
                    </>
                );
            })}
        </>
    );
};

export default TableRows;
