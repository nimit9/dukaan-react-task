import { RxCaretDown } from 'react-icons/rx';

const PanelHeader = () => {
    return (
        <div className="w-full p-3 py-2 flex items-center gap-3 h-[54px]">
            <div className="bg-white w-8 h-8 rounded-sm">
                <img src="/img/dukaan-logo.png" alt="" />
            </div>
            <div className="flex flex-col flex-1 text-sm gap-px">
                <span className="font-semibold">Dukaan</span>
                <a
                    href="https://mydukaan.io"
                    className="text-text-white-secondary underline text-xs"
                >
                    Visit Store
                </a>
            </div>
            <RxCaretDown size={24} className="cursor-pointer" />
        </div>
    );
};

export default PanelHeader;
