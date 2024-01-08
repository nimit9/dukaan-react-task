import { ReactNode, createContext, useContext, useState } from "react";

import { LoadingContextType } from "@/types/api-loading";

function TableRowsProvider({}) {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeItemFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    const updateCartItemQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cart,
                addItemToCart,
                removeItemFromCart,
                updateCartItemQuantity,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

// Custom hook to access the shopping cart context
function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export const useApiLoading = () => {
    const context = useContext(ApiLoadingContext);

    if (!context) {
        throw new Error("useApiLoading must be used inside ApiProvider");
    }

    return context;
};

export const ApiLoadingContext = createContext<LoadingContextType | null>(null);

const ApiLoadingProvider = ({ children }: { children: ReactNode }) => {
    const [apiLoading, setApiLoading] = useState(false);

    const updateApiLoading = (loading: boolean) => {
        setApiLoading(loading);
    };

    return (
        <ApiLoadingContext.Provider value={{ apiLoading, updateApiLoading }}>
            {children}
        </ApiLoadingContext.Provider>
    );
};

export default ApiLoadingProvider;
