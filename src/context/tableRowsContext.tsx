import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import MOCK_DATA from '../mockData/MOCK_DATA.json';

export interface ITableRow {
    orderId: string;
    orderDate: string;
    orderAmount: number;
    transactionFees: number;
}
interface TableRowsContextType {
    searchedRows: ITableRow[] | null;
    currentPage: number;
    noOfPages: number;
    handlePageChange: (page: number) => void;
    search: (query: string) => void;
    sortRows: () => void;
}
const TableRowsContext = createContext<TableRowsContextType | null>(null);

const rowsPerPage = 10;
export function TableRowsProvider({ children }: { children: ReactNode }) {
    const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC' | null>(null);
    const [searchedRows, setSearchedRows] = useState(MOCK_DATA);
    const [currentPage, setCurrentPage] = useState(1);

    const [currentPageRows, setCurrentPageRows] = useState<ITableRow[] | null>(
        null,
    );

    const sortRows = () => {
        setSortOrder((prev) => {
            switch (prev) {
                case 'ASC':
                    setSearchedRows(
                        searchedRows
                            .slice()
                            .sort((a, b) => b.orderAmount - a.orderAmount),
                    );
                    return 'DESC';

                case 'DESC':
                case null:
                    setSearchedRows(
                        searchedRows
                            .slice()
                            .sort((a, b) => a.orderAmount - b.orderAmount),
                    );
                    return 'ASC';
                default:
                    return null;
            }
        });
    };

    const [noOfPages, setNoOfPages] = useState(
        Math.ceil(MOCK_DATA.length / rowsPerPage),
    );

    // Sets Number of pages and current page when rows are searched
    useEffect(() => {
        console.log('that rendered');
        setNoOfPages(Math.ceil(searchedRows.length / rowsPerPage));
        setCurrentPage(1);
    }, [searchedRows]);

    // sets the current page data when page number is changed
    useEffect(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        setCurrentPageRows(searchedRows?.slice(startIndex, endIndex));
    }, [currentPage, searchedRows]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const search = (orderIdString: string) => {
        setSearchedRows(
            MOCK_DATA.filter((rows) => {
                return rows.orderId.includes(orderIdString);
            }),
        );
    };

    return (
        <TableRowsContext.Provider
            value={{
                searchedRows: currentPageRows,
                search,
                noOfPages,
                handlePageChange,
                currentPage,
                sortRows,
            }}
        >
            {children}
        </TableRowsContext.Provider>
    );
}

// Custom hook to access the shopping cart context
export function useTableRows() {
    return useContext(TableRowsContext);
}
