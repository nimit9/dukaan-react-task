import { Outlet } from "react-router-dom";
import { useApiLoading } from "@/context/apiLoadingContext";

const Root = () => {
    const { apiLoading } = useApiLoading();

    return (
        <>
            <Outlet />
        </>
    );
};

export default Root;
