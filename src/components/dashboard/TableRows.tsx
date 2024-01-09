import { useTableRows } from '@/context/tableRowsContext';

const TableRows = () => {
    const { searchedRows } = useTableRows()!;

    return (
        <>
            {searchedRows?.map((row, rowIndex) => {
                return (
                    <>
                        <div className="grid grid-cols-4 px-3 py-2 text-sm rounded">
                            <span className="text-[#146eb4] font-medium cursor-pointer">
                                {row.orderId}
                            </span>

                            <span>{row.orderDate}</span>

                            <span className="text-right">
                                ₹{row.orderAmount}
                            </span>

                            <span className="text-right">
                                ₹{row.transactionFees}
                            </span>
                        </div>

                        <hr className="w-full" />
                    </>
                );
            })}
        </>
    );
};

export default TableRows;
