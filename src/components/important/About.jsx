import React from "react";
import { Link } from "react-router-dom";
import startup from "../../assets/Business Ideas.gif";

function About() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-12 mb-12 max-w-screen-lg mx-auto px-[24px]">
        <div className="sm:w-1/2 flex flex-wrap justify-center items-center">
          <img src={startup} alt="statrtup" width={1200} height={1200} className="w-[480px] md" />
        </div>
        <div className="sm:w-1/2 flex flex-wrap flex-col justify-center md:justify-start items-center md:items-start pl-4">
          <h1 className="text-base3 text-[40px] md:text-[56px] font-bold font-Montserrat">
            TPIC HNBGU
          </h1>
          <h2 className="text-white text-[20px] sm:text-[24px] md:text-[32px] leading-[135%] font-medium">
            Accelerate Your{" "}
            <span className="text-base2 font-bold">Entreprenurship</span>{" "}
            Journry!
          </h2>
          <p className="text-white text-[16px] md:text-[20px] leading-[135%] mt-4 text-justify">
            Welcome to the dynamic entrepreneurial hub of HNBGU Srinagar, where
            we foster <span className="font-bold text-base3">Ideas</span>,{" "}
            <span className="font-bold text-base3">Incubate</span> potential,
            drive <span className="font-bold text-base3">Innovate</span>, and{" "}
            <span className="font-bold text-base3">Serve</span> as a foundation
            for build a legacy of service for future innovations of tomorrow.
          </p>
          <button className="mt-8 border-2  border-base2 hover:bg-base2/60 text-base2 hover:text-white py-1 sm:py-2 px-8 rounded-xl font-SFProDisplay font-semibold  text-[16px] sm:text-[20px]">
            <Link to="discover">Get Started</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
