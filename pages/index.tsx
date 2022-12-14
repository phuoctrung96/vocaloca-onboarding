import React, { useState } from 'react';
// assets
const logoImg = '/assets/img/logo.png';
const step1 = '/assets/img/svg/step1.svg';
const step2 = '/assets/img/svg/step2.svg';
const step3 = '/assets/img/svg/step3.svg';
const step4 = '/assets/img/svg/step4.svg';
const plus = '/assets/img/svg/plus.svg';
const minus = '/assets/img/svg/minus.svg';

export default function Home() {
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

  const askQuestion = [
    {
      title: 'What makes Everstory different from YouTube Analytics?',
      content: [
        "In order to best scale our tracking to meet the needs of millions that use Everstory, we pull data from YouTube's public API.This means that we're getting the same information you see on public YouTube channel pages, we just work to examine that data across multiple days and aggregate it into a display format that is useful to you.",
        "That being said, Everstorey is not a replacement for YouTube Analytics, but rather another resource you have for viewing information about other channels and seeing user-friendly information about your own channel on-the-fly. YouTube Analytics will typically be the most up-to-date, as it's private data that's only available to you, the channel owner."
      ]
    },
    {
      title: 'How does Everstory promote my YouTube channel?',
      content: [
        "In order to best scale our tracking to meet the needs of millions that use Everstory, we pull data from YouTube's public API.This means that we're getting the same information you see on public YouTube channel pages, we just work to examine that data across multiple days and aggregate it into a display format that is useful to you.",
        "That being said, Everstorey is not a replacement for YouTube Analytics, but rather another resource you have for viewing information about other channels and seeing user-friendly information about your own channel on-the-fly. YouTube Analytics will typically be the most up-to-date, as it's private data that's only available to you, the channel owner."
      ]
    },
    {
      title: 'How are the estimated earnings calculated for a YouTube channel?',
      content: [
        "In order to best scale our tracking to meet the needs of millions that use Everstory, we pull data from YouTube's public API.This means that we're getting the same information you see on public YouTube channel pages, we just work to examine that data across multiple days and aggregate it into a display format that is useful to you.",
        "That being said, Everstorey is not a replacement for YouTube Analytics, but rather another resource you have for viewing information about other channels and seeing user-friendly information about your own channel on-the-fly. YouTube Analytics will typically be the most up-to-date, as it's private data that's only available to you, the channel owner."
      ]
    },
    {
      title: 'What process should I expect from Everstory?',
      content: [
        "In order to best scale our tracking to meet the needs of millions that use Everstory, we pull data from YouTube's public API.This means that we're getting the same information you see on public YouTube channel pages, we just work to examine that data across multiple days and aggregate it into a display format that is useful to you.",
        "That being said, Everstorey is not a replacement for YouTube Analytics, but rather another resource you have for viewing information about other channels and seeing user-friendly information about your own channel on-the-fly. YouTube Analytics will typically be the most up-to-date, as it's private data that's only available to you, the channel owner."
      ]
    },
  ]

  const [active, setActive] = useState<number>();

  return (
    <div>
      <div className='bg-header-bg bg-no-repeat bg-[length:100%_100%]'>
        <div className='container mx-auto'>
          <div className='pt-5'>
            <div className='flex items-center'>
              <img src={logoImg} className='w-5 h-5 mr-2' alt="logo" />
              <h1 className='font-bold text-lg text-grey-900 uppercase'>Everstory</h1>
            </div>
            <div className='py-[162px]'>
              <h1 className='text-5xl font-bold text-grey-900 mb-6 mt-[84px]'>
                Localize. Grow. <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient-via to-gradient-end'>Earn.</span>
              </h1>
              <p className='text-md text-gray-800'>Expand the reach of your content using our unique AI technology</p>
              <button className='text-md text-white px-[55px] py-[14px] my-[64px]'>Analyze</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-dark-blue'>
        <div className='container mx-auto py-8'>
          <div className='text-center mt-16'>
            <h3 className='text-3xl text-white text-bold mb-4'>How it works</h3>
            <p className='text-md text-white/75'>We get it done in 4 simple steps</p>
          </div>
          <div className='py-16 grid grid-row-3 grid-flow-col grid-flow-col gap-8'>
            {
              steps.map((item: any, idx: number) => (
                <div key={idx} className='w-100 bg-white/10 px-6 py-12 rounded-lg flex items-center flex-col'>
                  <div className='rounded-full bg-dark-blue p-4 mb-8'>
                    <img src={item.img} alt='step' />
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
      <div className='container mx-auto py-24'>
        <div className='text-center mb-16'>
          <h3 className='text-3xl text-grey-900 font-bold'>Frequently asked questions</h3>
          <p className='text-md text-gray-800 mt-4'>Have some questions?  We are here to help you. </p>
        </div>
        <div className='w-[785px] mx-auto'>
          {
            askQuestion.map((item: any, idx: number) => (
              <div className='border-b-2 border-grey-50' key={idx}>
                <div className='flex justify-between w-100 my-6'>
                  <h3 className='text-lg text-grey-900 font-bold'>{item.title}</h3>
                  <img src={idx === active ? minus : plus} alt='btn' className='cursor-pointer' onClick={() => setActive(idx === active ? -1 : idx)} />
                </div>
                {
                  idx === active ?
                    <div className='text-left'>
                      {
                        item.content.map((desc: string, i: number) => (
                          <p className='text-base text-gray-800 mb-5' key={i}>{desc}</p>
                        ))
                      }
                    </div> : null
                }
              </div>
            ))
          }
        </div>
      </div>
      <footer className='text-center p-6 bg-[#12225205]'>
        <p className='text-sm text-grey-600'>All Rights Reserved © Everstory 2022</p>
      </footer>
    </div>
  );
}
