import { CiWallet } from 'react-icons/ci';
import PanelHeader from './PanelHeader';
import PanelMenu from './PanelMenu';

const DashboardPanel = () => {
    return (
        <>
            <div className="w-1/6 mb:w-[10%]"></div>
            <div className="w-1/6 mb:w-[10%] h-screen bg-primary overflow-y-auto text-white fixed">
                <PanelHeader />
                <PanelMenu />
                <div className="w-full absolute bottom-0 p-2 cursor-pointer mb:p-1">
                    <div className="bg-primary-light rounded-sm p-1 flex gap-2">
                        <div className="rounded-sm shadow-lg bg-[#494e65] p-1 flex items-center justify-center mb:flex-1">
                            <CiWallet size={24} />
                        </div>
                        <div className="flex flex-col justify-between flex-1 text-xs mb:hidden">
                            <span className=" text-text-white-secondary">
                                Available Credits
                            </span>
                            <span>222.10</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPanel;
