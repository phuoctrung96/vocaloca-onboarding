import Image from "next/image";
import Link from "next/link";

const back = '/assets/img/svg/back.svg';

const Introduction = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='md:py-[100px] pt-12 pb-8 w-full'>
                <div className="inline-block">
                    <Link href='/' className="flex items-center">
                        <Image src={back} width={16} height={16} className='h-4 w-4' alt="back" />
                        <span className="text-gray-800 md:text-md text-base ">Home</span>
                    </Link>
                </div>
                <h1 className='md:text-5xl text-3xl font-bold text-grey-900 md:mb-8 mb-4 md:mt-4 mt-2'>
                    Localize. Grow. <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient-via to-gradient-end'>Earn.</span>
                </h1>
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div>
                        <p className='md:text-md text-base text-gray-800 mb-1'>Here is a preview of initial analysis for the channel <span className="text-grey-900 font-bold">Nature Freaks.</span></p>
                        <p className='md:text-md text-base text-gray-800'>The channel is spoken in <span className="language">EN</span> and is about <span className="label-success">nature</span> <span className="label-info">other</span></p>
                    </div>
                    <button className='md:mt-0 mt-6 md:text-md text-base text-white px-[55px] py-[14px] max-[450px]:w-full'>Let’s Start Localizing</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction;