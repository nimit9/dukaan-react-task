import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import { LoadingContextType } from '@/types/api-loading';
import MOCK_DATA from '../mockData/MOCK_DATA.json';
interface TableRowsContextType {
    searchedRows: {
        orderId: string;
        orderDate: string;
        orderAmount: number;
        transactionFees: number;
    }[];

    search: (query: string) => void;
}
const TableRowsContext = createContext<TableRowsContextType | null>(null);

const rowsPerPage = 10;
export function TableRowsProvider({ children }: { children: ReactNode }) {
    const [searchedRows, setSearchedRows] = useState(MOCK_DATA);

    const [noOfPages, setNoOfPages] = useState(
        Math.ceil(MOCK_DATA.length / rowsPerPage),
    );

    useEffect(() => {
        setNoOfPages(Math.ceil(searchedRows.length / rowsPerPage));
    }, [searchedRows]);

    const search = (orderIdString: string) => {
        setSearchedRows(
            MOCK_DATA.filter((rows) => {
                return rows.orderId.includes(orderIdString);
            }),
        );
    };

    // const removeItemFromCart = (itemId) => {
    //     const updatedCart = cart.filter((item) => item.id !== itemId);
    //     setCart(updatedCart);
    // };

    // const updateCartItemQuantity = (itemId, newQuantity) => {
    //     const updatedCart = cart.map((item) => {
    //         if (item.id === itemId) {
    //             return { ...item, quantity: newQuantity };
    //         }
    //         return item;
    //     });
    //     setCart(updatedCart);
    // };

    return (
        <TableRowsContext.Provider
            value={{
                searchedRows,
                search,
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
