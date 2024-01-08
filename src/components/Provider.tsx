import { TableRowsProvider } from '@/context/tableRowsContext';
import { ReactNode } from 'react';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return <TableRowsProvider>{children}</TableRowsProvider>;
};

export default AppProvider;
