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
                <div className='text-center mt-16'>
                    <h3 className='text-3xl text-white text-bold mb-4'>How it works</h3>
                    <p className='text-md text-white/75'>We get it done in 4 simple steps</p>
                </div>
                <div className='py-16 grid grid-row-3 md:grid-flow-col sm:grid-flow-row gap-8'>
                    {
                        steps.map((item: any, idx: number) => (
                            <div key={idx} className='w-100 bg-white/10 px-6 py-12 rounded-lg flex items-center flex-col'>
                                <div className='rounded-full bg-dark-blue p-4 mb-8'>
                                    <Image src={item.img} alt='step' className="w-8 h-8" width={32} height={32} />
                                </div>
                                <div className='text-center'>
                                    <p className='text-xm text-white/60'>{`STEP ${idx + 1}`}</p>
                                    <h5 className='text-md text-white text-bold my-3'>{item.title}</h5>
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