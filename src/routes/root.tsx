import Dashboard from "@/components/dashboard/Dashboard";
import DashboardPanel from "@/components/DashboardPanel";
import { useApiLoading } from "@/context/apiLoadingContext";

const Root = () => {
    const { apiLoading } = useApiLoading();

    return (
        <div className='w-full flex items-stretch'>
            <DashboardPanel />

            <Dashboard />
        </div>
    );
};

export default Root;
