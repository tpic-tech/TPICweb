import React from "react";
import FacultyCoordinator from "../../components/elements/FacultyCoordinator";
import StudentCoordinator from "../../components/elements/StudentCoordinator";
import SpecialMember from "../../components/elements/SpecialMember";
import StudentMembers from "../../components/elements/StudentMembers";

function team() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 sm:mt-16">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base3 font-SFPro text-[24px] sm:text-[28px] font-bold leading-[135%]">
              Team Member
            </h1>
            <h3 className="text-white font-SFPro text-[16px] sm:text-[20px] sm:-mt-1 font-bold leading-[135%]">
              (Session 2024-25)
            </h3>
            <div className="text-center mt-4 inline-block h-[4px] w-[180px] sm:w-[240px] bg-base2 rounded-lg"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-4 sm:mt-12">
            <FacultyCoordinator/>
            <SpecialMember/>
            <StudentCoordinator/>
            {/* <StudentMembers/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default team;
