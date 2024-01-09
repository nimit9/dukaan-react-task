import { RxCaretDown } from 'react-icons/rx';

const PanelHeader = () => {
    return (
        <div className="w-full px-3 py-2 flex items-center gap-3 h-[54px] mb:px-2 justify-between">
            <div className="bg-white w-8 h-8 rounded-sm mb:flex mb:items-center mb:justify-center">
                <img src="/img/dukaan-logo.png" alt="" />
            </div>
            <div className="flex flex-col flex-1 text-sm gap-px tb:hidden">
                <span className="font-semibold">Dukaan</span>
                <a
                    href="https://mydukaan.io"
                    className="text-text-white-secondary underline text-xs"
                >
                    Visit Store
                </a>
            </div>
            <RxCaretDown size={24} className="cursor-pointer mb:hidden" />
        </div>
    );
};

export default PanelHeader;
