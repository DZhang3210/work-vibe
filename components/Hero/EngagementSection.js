import React from 'react';
import './EngagementSection.css';
import Image from 'next/image';
import UseInView from './UseInView';

const EngagementSection = () => {
  return (
    <section>
      <div className='w-full shapedividers h-[10rem]'/>
      <div className='w-full bg-engagement'>
        <div className='block md:grid grid-cols-12 pl-20 pr-10 pt-32 pb-10 gap-5'>
          <div className='col-span-12 uppercase text-lg text-black'>
            Employee Engagement
          </div>
          <div className='flex flex-col gap-5 items-start col-span-4'>
            <h1 className='text-5xl'>
              Insights that make <br/>
              work better 
            </h1>
            <p className='text-lg mt-5 max-w-xl text-gray-700'>
              Retain top talent by continually improving your workplace culture with real-time employee engagement insights. Get to know your people with Pulse Surveys, eNPS&reg; scoring, and anonymous feedback and messaging.
            </p>
            <button className='border border-black px-8 py-2 rounded-md transition hover:bg-blue-800 hover:border-blue-800 hover:text-white'>
              Discover Engagement
            </button>
          </div>
          <div className='h-full justify-start col-span-8'>
            <UseInView>
              <Image
                src="/engage/WorkVibe-Engage1.webp"
                alt="logo"
                width={1472}
                height={1840}
              />
            </UseInView>
          </div>
        </div>
        <div className='block md:grid grid-cols-12 pl-20 pr-10 pt-32 pb-10 gap-5'>
          <div className='col-span-7'></div>
          <div className='col-span-5 uppercase text-lg text-black'>
            Recognition
          </div>
          <div className='flex flex-col gap-5 items-start col-span-5 col-star order-2'>
            <h1 className='text-5xl'>
              Meaningful recognition <br/>
              that inspires great work
            </h1>
            <p className='text-lg mt-5 max-w-xl text-gray-700'>
              Foster meaningful and interactive peer recognition with prompts that invite employees to recognize each other in a more genuine way. Create personalized collections to celebrate employees who champion your company&rsquo;s culture and values.
            </p>
            <button className='border border-black px-8 py-2 rounded-md transition hover:bg-blue-800 hover:border-blue-800 hover:text-white'>
              Discover Recognition
            </button>
          </div>
          <div className='h-full col-span-7 order-1'>
            <UseInView>
              <Image
                src="/engage/WorkVibe-Engage2.webp"
                alt="logo"
                width={1472}
                height={1840}
              />
            </UseInView>
          </div>
        </div>
        <div className='block md:grid grid-cols-12 gap-5 px-20 py-10'>
          <div className='col-span-12 uppercase text-lg text-black'>
            Performance Management
          </div>
          <div className='flex flex-col gap-5 items-start col-span-4'>
            <h1 className='text-5xl'>
              Drive continuous <br/>
              performance
            </h1>
            <p className='text-lg mt-5 max-w-xl text-gray-700'>
              Intuitive and flexible tools to help HR design the best performance process for your business. Go from simply measuring team performance to actually driving it with reviews, checkpoints, OKRs, one-on-ones, and more.
            </p>
            <button className='border border-black px-8 py-2 rounded-md transition hover:bg-blue-800 hover:border-blue-800 hover:text-white'>
              Discover Performance
            </button>
          </div>
          <div className='col-span-8'>
            <UseInView>
              <Image
                src="/engage/WorkVibe-Engage3.webp"
                alt="logo"
                width={1472}
                height={1840}
              />
            </UseInView>
          </div>
        </div>
        <div className='block md:grid grid-cols-12 gap-10 px-20 py-10'>
          <div className='flex flex-col items-start py-10 col-span-5'>
            <div className='indent-[5rem] text-3xl text-gray-500'>
              &ldquo;The data that Officevibe provides us is great to influence business decisions at an executive level &hellip; and support other projects that we&rsquo;re working on.&rdquo;
            </div>
            <div className='text-lg font-bold mt-10'>
              St&eacute;phanie Nadeau
            </div>
            <div className='text-gray-500'>
              Director of HR
            </div>
          </div>
          <div className='col-span-5'>
            <UseInView>
              <Image
                src="/engage/WorkVibe-Engage4.webp"
                alt="logo"
                width={961}
                height={805}
                className='rounded-2xl'
              />
            </UseInView>
          </div>
          <div className='col-span-2 flex flex-col gap-10'>
            <h1 className='uppercase font-bold text-2xl mt-2'>Stingray</h1>
            <div>
              <div className='uppercase font-semibold'>
                Company Size
              </div>
              <div className='text-gray-700'>
                1200
              </div>
            </div>
            <div>
              <div className='uppercase font-semibold'>
                Industry
              </div>
              <div className='text-gray-700'>
                Media
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
