import React from 'react'
import coordinator from "../../assets/ravi.jpg"
function tech() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      <div className='flex flex-wrap flex-col justify-center items-center text-center'>
      <h1 className='text-base3 font-SFPro text-[24px] sm:text-[28px] font-bold leading-[135%]'>
        Technical Development (Web Cell)
      </h1>
      <div className='text-center mt-4 inline-block h-[2px] w-[160px] bg-base2 rounded-lg'></div>
      </div>
      {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
      <p className='mt-10 text-white text-justify text-[14px] sm:text-[18px] -tracking-tight leading-[135%]'>
      Research and Development plays a vital role in a Technology Pre-Incubation Cell by fostering innovation, providing technical guidance, and developing proof-of-concept solutions. It helps identify viable ideas, conduct feasibility studies, and create prototypes that enhance the potential of early-stage startups. R&D also aids in securing intellectual property, reducing technical risks, and aligning innovations with market trends. By offering access to technical expertise, advanced tools, and collaborative networks, R&D helps startups refine their products and business models, making them more competitive and increasing their chances of success during the incubation phase.
      </p>
      </div>
      <div className='mt-12 flex flex-wrap flex-col w-full justify-center items-center '>
        <p className='text-base3 font-semibold text-[16px] sm:text-[18px] mb-8'>
          Members
        </p>
        <img src={coordinator} alt="Research and Development" width={240} height={240} className='w-160px sm:w-240px rounded-md mb-2 ' />
        <p className='text-base2 font-semibold text-[16px] sm:text-[20px]'>
          Ravi Kumar
        </p>
        <p className='text-base font-semibold text-[14px] sm:text-[16px] -mt-1'>
          Student Co-ordinator
        </p>
      </div>
    </div>
    </>
  )
}

export default tech