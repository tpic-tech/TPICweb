import React from "react";
import coordinator from "../../assets/Teacher Coordinator.jpg"
function FacultyCoordinator() {
  return (
    <>
      <div className="flex flex-wrap w-full mx-auto  justify-center items-center mb-4 sm:mb-8 ">
      <p className="mt-10 text-white font-bold font-Montserrat text-justify text-[16px] sm:text-[20px] -tracking-tight leading-[135%]  p-2 rounded-md bg-base mb-6 sm:mb-10">
              Faculty Members
            </p>
        <div className="flex flex-wrap gap-8 sm:gap-16 w-full mx-auto  justify-center items-center">
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={coordinator}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 hover:grayscale"
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Dr. Digar Singh
            </p>
            <p className="text-base font-bold text-[14px] sm:text-[16px] sm:-mt-1">
              Faculty Co-ordinator
            </p>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={coordinator}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Dr. Rohit Meher
            </p>
            <p className="text-base font-bold text-[14px] sm:text-[16px] sm:-mt-1">
              Faculty Co-ordinator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyCoordinator;
