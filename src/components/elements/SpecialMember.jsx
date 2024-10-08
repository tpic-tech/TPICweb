import React from 'react'
import coordinator from "../../assets/rahul.jpg"
function SpecialMember() {
  return (
    <>
      <div className="flex flex-wrap w-full mx-auto  justify-center items-center mb-4 sm:mb-8 ">
      <p className="mt-10 text-white font-bold font-Montserrat text-justify text-[16px] sm:text-[20px] -tracking-tight leading-[135%]  p-2 rounded-md bg-base mb-6 sm:mb-10">
              Special Members
            </p>
        <div className="flex flex-wrap gap-x-8 sm:gap-x-16 w-full mx-auto  justify-center items-center">
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={coordinator}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Rahul Singh
            </p>
            <p className="text-base font-bold text-[14px] sm:text-[16px] sm:-mt-1">
              Research Assistant
            </p>
          </div>
          {/* <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={coordinator}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[120px] sm:w-[160px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Dr. Rohit Meher
            </p>
            <p className="text-base font-semibold text-[14px] sm:text-[16px] sm:-mt-1">
              Faculty Co-ordinator
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default SpecialMember