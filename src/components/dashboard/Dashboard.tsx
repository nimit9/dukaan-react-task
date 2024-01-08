import DashboardButton from "./DashboardButton";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import DashboardTable from "./DashboardTable";
import { RxCaretDown } from "react-icons/rx";

const Dashboard = () => {
    return (
        <div className='w-full flex-1 bg-[#fafbfb] min-h-screen'>
            <DashboardHeader />
            <div className='w-full p-6 flex flex-col gap-6'>
                <div className='flex justify-between items-center w-full text-sm'>
                    <h2 className='text-base font-semibold'>Overview</h2>
                    <DashboardButton
                        text='Last Month'
                        icon={<RxCaretDown size={24} />}
                    />
                </div>
                <DashboardStats />

                <h2 className='text-base font-semibold'>
                    Transactions | This Month
                </h2>

                <DashboardTable />
            </div>
        </div>
    );
};

export default Dashboard;
