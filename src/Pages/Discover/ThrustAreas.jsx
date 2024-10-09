import React from 'react'
import ideas from '../../assets/ideate.gif'
import { Link, NavLink } from 'react-router-dom'
function ThrustAreas() {
  return (
    <>
    <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6 mb-20'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      <div className='flex flex-wrap flex-col justify-center items-center text-center'>
      <h1 className='text-base3 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]'>
        Thrust Areas
      </h1>
      <div className='text-center mt-4 inline-block h-1 w-[160px] sm:w-[240px] md:w-[320px] bg-base2 rounded-lg'></div>
      </div>
      <p className='mt-10 text-white text-center text-[16px] sm:text-[20px] -tracking-tight leading-[135%]'>
      The Technology Pre-Incubation Cell (TPIC) focuses on key areas that guide its projects and initiatives. These are the main fields where TPIC works, helping students and entrepreneurs develop practical solutions to real-world problems. The thrust areas include sectors like healthcare, sustainable development, digital technology, and entrepreneurship. By concentrating on these important fields, TPIC encourages creative thinking and supports the development of innovative projects. Each thrust area aligns with TPIC’s goal of helping individuals bring their ideas to life and make a positive impact on society.
      </p>
      </div>
      <div className='mt-8 sm:mt-12 md:mt-16'>
      <div className='flex flex-wrap w-full justify-evenly items-start text-center mt-10 mx-auto'>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Climate Change
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Startups tackling climate change focus on renewable energy, carbon capture, and energy-efficient technologies, promoting sustainable materials and solutions that reduce emissions, enhance energy security, and support green jobs.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Food Processing
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Food processing startups improve food security and reduce waste by developing preservation, packaging, and processing technologies, adding value to agricultural products, and creating market opportunities while promoting sustainability.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Med-Tech & Ed-Tech
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Med-tech and ed-tech startups improve rural life with affordable diagnostics, telemedicine, wearable health monitors, and e-learning platforms, bridging healthcare and education gaps in remote and underserved areas.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Waste Processing
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Waste processing startups can innovate by recycling waste into valuable resources, using technologies like waste-to-energy, biogas, and upcycling, while promoting efficient waste collection and sustainable management, especially in remote areas.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Logiatics & Supplies in remote areas
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Startups can address remote logistics challenges through drone delivery, autonomous transport, and decentralized supply chains, using blockchain for transparency and building efficient distribution networks for last-mile delivery in hard-to-reach areas.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Cloud Bursting
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Cloud bursting mitigation involves early warning systems, water management, disaster response technologies, and resilient infrastructure. Startups can use AI, IoT, and satellite data to predict and manage cloudburst impacts in vulnerable regions.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Water Resource Management
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Water resource management emphasizes sustainable use in water-scarce regions through rainwater harvesting, smart irrigation, recycling, river rejuvenation, groundwater recharge, and IoT-based monitoring for efficient conservation and management.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Eco-Tourism
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Eco-tourism promotes sustainable travel that preserves nature and supports communities through renewable energy, waste management, digital platforms for responsible tourism, IoT monitoring, and eco-friendly accommodations.
              </p>
            </div>
            <div className=' w-full sm:w-[30%] flex flex-wrap grid-flow-row justify-center /items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-gray-600 pt-4 pb-8 px-4 mb-4 sm:mb-8'>
              {/* <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' /> */}
              <h1 className='text-[24px] font-SFProDisplay font-semibold text-base2 leading-[135%] mt-4'>
                Hill Agriculture
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4 text-justify'>
              Hill agriculture faces challenges like tough terrain and limited resources. Startups can boost productivity with agritech solutions like precision farming, water-efficient irrigation, and better supply chains for sustainable farming.
              </p>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ThrustAreas