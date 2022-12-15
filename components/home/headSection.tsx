import Header from "../header";
import Link from "next/link";

const HeadSection = () => {
    return (
        <div className='bg-header-bg bg-no-repeat bg-[length:100%_100%]'>
            <Header />
            <div className='container mx-auto px-4'>
                <div className='py-[162px]'>
                    <h1 className='md:text-5xl text-3xl font-bold text-grey-900 mb-6 mt-[84px]'>
                        Localize. Grow. <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient-via to-gradient-end'>Earn.</span>
                    </h1>
                    <p className='md:text-md text-base text-gray-800'>Expand the reach of your content using our unique AI technology</p>
                    <Link href='preview'>
                        <button className='text-md text-white px-[55px] py-[14px] my-[64px] max-[450px]:w-full'>Analyze</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeadSection