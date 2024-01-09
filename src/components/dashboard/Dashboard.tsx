import DashboardButton from './DashboardButton';
import DashboardHeader from './DashboardHeader';
import DashboardHeading from './DashboardHeading';
import DashboardStats from './DashboardStats';
import DashboardTable from './DashboardTable';
import { RxCaretDown } from 'react-icons/rx';

const Dashboard = () => {
    return (
        <div className="w-full flex-1 bg-[#fafbfb] min-h-screen mb:w-[90%]">
            <DashboardHeader />
            <div className="w-full p-6 flex flex-col gap-6 mb:p-4">
                <div className="flex justify-between items-center w-full text-sm">
                    <DashboardHeading heading="Overview" />
                    <DashboardButton
                        text="Last Month"
                        icon={<RxCaretDown size={24} />}
                    />
                </div>
                <DashboardStats />
                <DashboardHeading heading="Transactions | This Month" />

                <DashboardTable />
            </div>
        </div>
    );
};

export default Dashboard;
