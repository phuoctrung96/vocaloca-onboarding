import { useState } from "react";

import Header from "../header";
import DetailModal from "./modals/DetailModal";
import TermsOfServiceModal from "./modals/TermsOfServiceModal";
import AnalyzingModal from "./modals/AnalyzingModal";


const HeadSection = () => {
    const [openModal, setOpenModal] = useState<Number>(0);
    return (
        <>
            <div className='bg-home-head bg-no-repeat bg-[length:100%_100%]'>
                <Header />
                <div className='container mx-auto px-4'>
                    <div className='py-[162px]'>
                        <h1 className='md:text-5xl text-3xl font-bold text-grey-900 mb-6 mt-[84px]'>
                            Localize. Grow. <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient-via to-gradient-end'>Earn.</span>
                        </h1>
                        <p className='md:text-md text-base text-gray-800'>Expand the reach of your content using our unique AI technology</p>
                        <button onClick={() => setOpenModal(1)} className='text-md text-white px-[55px] py-[14px] my-[64px] max-[450px]:w-full'>Analyze</button>
                    </div>
                </div>
            </div>
            <DetailModal openModal={openModal === 1} setOpenModal={setOpenModal} />
            <TermsOfServiceModal openModal={openModal === 2} setOpenModal={setOpenModal} />
            <AnalyzingModal openModal={openModal === 3} setOpenModal={setOpenModal} />
        </>
    )
}

export default HeadSection;