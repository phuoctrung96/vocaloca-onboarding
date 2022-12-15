import { useState } from "react";
import Image from "next/image";
import Modal from "../../Modal";

const step1Fill = '/assets/img/svg/step1-fill.svg';

const DetailModal = ({ openModal, setOpenModal }: any) => {

    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(0)}
        >
            <div className="mt-3 text-center">
                <div className="mx-auto mb-6 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white">
                        <Image src={step1Fill} alt="step" className="w-8 h-8" width={32} height={32} />
                    </div>
                </div>
                <h3 className="text-xl text-grey-900 font-bold">Please provide your details</h3>
                <div className="mt-2 px-7 py-3">
                    <p className="text-base text-gray-800">
                        Add your name, email id and youtube channel URL to analyze your channel.
                    </p>
                </div>
                <div>
                    <input type="text" placeholder="Name" name="name" className="border-[1px] border-grey-50 rounded-md w-full px-4 py-3 my-2 text-base" />
                    <input type="email" placeholder="Email" name="email" className="border-[1px] border-grey-50 rounded-md w-full px-4 py-3 my-2 text-base" />
                    <input type="text" placeholder="YouTube channel URL" name="url" className="border-[1px] border-grey-50 rounded-md w-full px-4 py-3 my-2 text-base" />
                </div>
                <div className="items-center pt-4">
                    <button className="px-4 py-3 text-white text-base rounded-md w-full">
                        Analyze
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default DetailModal;