import React from 'react'
import ResearchDevelopment from '../../components/important/ResearchDevelopment'
import Finance from '../../components/important/Finance'
import MediaandBranding from '../../components/important/MediaandBranding'
import StudentPresident from '../../components/important/StudentPresident'
import Technology from '../../components/important/Technology'

function Nodes() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      {/* <div className='flex flex-wrap flex-col justify-center items-center text-center'>
      <h1 className='text-base3 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]'>
        Who we are?
      </h1>
      <div className='text-center mt-4 inline-block h-1 w-[160px] sm:w-[240px] md:w-[320px] bg-base2 rounded-lg'></div>
      </div> */}
      {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
      <p className='mt-10 text-white text-justify sm:text-center text-[16px] sm:text-[20px] -tracking-tight leading-[135%]'>
      In TPIC, the "Node" refers to specialized departments that are vital to the smooth operation of the Technology Pre-Incubation Cell. These Nodes include areas such as Media and Branding, Finance and Management, Technology, and Research and Development. Each Node acts as a pillar, overseeing specific functions like project management, resource coordination, mentoring, and event execution. Together, they ensure TPIC runs efficiently by facilitating communication, organizing activities, and addressing the needs of budding entrepreneurs. While TPIC focuses on fostering innovation and entrepreneurial growth, these Nodes provide essential support, aligning with TPIC's core values — <span className='text-base2 text-center '>
      "Ideate, Incubate, Innovate, and Serve."
      </span>
      </p>
      </div>
      <div className='mt-8 sm:mt-12'>
        <StudentPresident/>
      <ResearchDevelopment/>
      <Finance/>
      <Technology/>
      <MediaandBranding/>
      </div>
    </div>
    </>
  )
}

export default Nodes