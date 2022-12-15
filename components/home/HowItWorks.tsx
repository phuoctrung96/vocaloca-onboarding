import Image from "next/image";

const step1 = '/assets/img/svg/step1.svg';
const step2 = '/assets/img/svg/step2.svg';
const step3 = '/assets/img/svg/step3.svg';
const step4 = '/assets/img/svg/step4.svg';



const HowItWorks = () => {
    const steps = [
        {
            img: step1,
            title: 'Your channel details',
            description: 'Providing us with your required details regarding your Youtube channel.'
        },
        {
            img: step2,
            title: 'AI Analysis',
            description: 'Our AI will analyze your content and predict which videos are suitable for localization and target geographics.'
        },
        {
            img: step3,
            title: 'Localization & Distribution',
            description: 'If your eligble to our program, our automation process will start localizing your content, dub it if needed,and distribute it to relevant channel.'
        },
        {
            img: step4,
            title: 'Start Earning Money',
            description: 'Once it’s done, we will share the revenue with you.'
        },
    ]

    return (
        <div className='bg-dark-blue'>
            <div className='container mx-auto py-8 px-4'>
                <div className='md:text-center md:mt-16 mt-6'>
                    <h3 className='md:text-3xl text-xl text-white font-bold md:mb-4 mb-2'>How it works</h3>
                    <p className='md:text-md text-base text-white/75'>We get it done in 4 simple steps</p>
                </div>
                <div className='md:py-16 py-8 grid grid-row-3 md:grid-flow-col sm:grid-flow-row gap-8'>
                    {
                        steps.map((item: any, idx: number) => (
                            <div key={idx} className='w-100 bg-card-bg px-6 py-12 rounded-lg flex md:items-center item-start flex-col'>
                                <div className="inline-flex">
                                    <div className='rounded-full bg-dark-blue p-4 md:mb-8 mb-6'>
                                        <Image src={item.img} alt="step" className="w-8 h-8" width={32} height={32} />
                                    </div>
                                </div>
                                <div className='md:text-center'>
                                    <p className='text-xm text-white/60'>{`STEP ${idx + 1}`}</p>
                                    <h5 className='text-md text-white text-bold md:my-3 my-2'>{item.title}</h5>
                                    <p className='text-base text-white/75'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;