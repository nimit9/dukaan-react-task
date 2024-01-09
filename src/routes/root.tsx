import Dashboard from '../components/dashboard/Dashboard';
import DashboardPanel from '../components/DashboardPanel';

const Root = () => {
    return (
        <div className="w-full flex items-stretch">
            <DashboardPanel />

            <Dashboard />
        </div>
    );
};

export default Root;
