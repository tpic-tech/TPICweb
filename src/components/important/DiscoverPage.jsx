import React from 'react'
import Message from './Message'

function DiscoverPage() {
  return (
    <>
    <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-8 px-6'>
      <div className='flex flex-wrap justify-center item-center text-center'>
      <h1 className='text-base3 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]'>
        Who we are?
      </h1>
      <p className='mt-4 text-white text-center text-[16px] sm:text-[20px] -tracking-tight leading-[135%]'>
      The Technology Pre-Incubation Cell is a supportive framework designed to nurture and develop early-stage tech ideas and innovations. It serves as a foundational platform for aspiring entrepreneurs, researchers, and students to refine their concepts and transform them into viable business models. <br />
      The cell offers a range of services including mentorship, access to resources, and networking opportunities. The goal is to minimize risks and increase the chances of success for start-ups by providing a structured environment where ideas can evolve into market-ready products or services. This approach helps bridge the gap between raw innovation and market entry, fostering a culture of entrepreneurship and technological advancement.
      </p>
      </div>
      <div className='mt-8 sm:mt-12 md:mt-16'>
      <Message />
      </div>
    </div>
    </>
  )
}

export default DiscoverPage