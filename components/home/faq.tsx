import Image from 'next/image';
import React, { useState } from 'react';

const plus = '/assets/img/svg/plus.svg';
const minus = '/assets/img/svg/minus.svg';

const Faq = () => {
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
    }
  ];

  const [active, setActive] = useState<number>();

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h3 className="text-3xl text-grey-900 font-bold">
          Frequently asked questions
        </h3>
        <p className="text-md text-gray-800 mt-4">
          Have some questions? We are here to help you.{' '}
        </p>
      </div>
      <div className="md:w-[785px] sm: w-[340px] mx-auto">
        {askQuestion.map((item: any, idx: number) => (
          <div className="border-b-2 border-grey-50" key={idx}>
            <div className="flex justify-between w-100 my-6">
              <h3 className="md:text-lg sm: text-md text-grey-900 font-bold">
                {item.title}
              </h3>
              <Image
                src={idx === active ? minus : plus}
                alt="btn"
                className="cursor-pointer w-4 h-4"
                width={16}
                height={16}
                onClick={() => setActive(idx === active ? -1 : idx)}
              />
            </div>
            {idx === active ? (
              <div className="text-left">
                {item.content.map((desc: string, i: number) => (
                  <p className="text-base text-gray-800 mb-5" key={i}>
                    {desc}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
