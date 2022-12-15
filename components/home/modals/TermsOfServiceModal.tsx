import { useState } from "react";
import Image from "next/image";
import Modal from "../../Modal";

const termFill = '/assets/img/svg/term-fill.svg';
const checkActive = '/assets/img/svg/check-active.svg';
const checkDisable = '/assets/img/svg/check-disable.svg';

const AnalyzingModal = ({ openModal, setOpenModal }: any) => {
    const [check, setCheck] = useState<boolean>(false);
    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(0)}
        >
            <div className="mt-3 text-center">
                <div className="mx-auto mb-6 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white">
                        <Image src={termFill} alt="step" className="w-8 h-8" width={32} height={32} />
                    </div>
                </div>
                <h3 className="text-xl text-grey-900 font-bold">Terms of service</h3>
                <p className="text-base text-gray-800 my-2">
                    Before we start, we need you to agree to our terms of service
                </p>
                <div className="border-[1px] border-grey-200 rounded-md p-4 h-[240px] term overflow-auto">
                    <div className="text-start mb-3">
                        <h4 className="text-sm font-bold uppercase text-grey-900">Overview</h4>
                        <h4 className="text-sm text-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus. </h4>
                    </div>
                    <div className="text-start mb-3">
                        <h4 className="text-sm font-bold uppercase text-grey-900">Overview</h4>
                        <h4 className="text-sm text-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus. </h4>
                    </div>
                    <div className="text-start mb-3">
                        <h4 className="text-sm font-bold uppercase text-grey-900">Overview</h4>
                        <h4 className="text-sm text-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus. </h4>
                    </div>
                    <div className="text-start mb-3">
                        <h4 className="text-sm font-bold uppercase text-grey-900">Overview</h4>
                        <h4 className="text-sm text-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus. </h4>
                    </div>
                    <div className="text-start mb-3">
                        <h4 className="text-sm font-bold uppercase text-grey-900">Overview</h4>
                        <h4 className="text-sm text-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus. </h4>
                    </div>
                </div>
            </div>
            <div className="flex mt-6">
                <Image src={check ? checkActive : checkDisable} onClick={() => setCheck(!check)} alt="step" className="cursor-pointer w-5 h-5 mr-2" width={20} height={20} />
                <p className="text-sm text-grey-900 font-medium">I agree to the terms and conditions</p>
            </div>
            <div className="items-center pt-4">
                <button onClick={() => setOpenModal(3)} className="px-4 py-3 text-white text-base rounded-md w-full">
                    Analyze
                </button>
            </div>
        </Modal>
    )
}

export default AnalyzingModal;