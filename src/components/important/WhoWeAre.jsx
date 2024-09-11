import React from "react";
import { Link } from "react-router-dom";
import rocket from "../../assets/who.gif";
import WhatWeDo from "./WhatWeDo";

function WhoWeAre() {
  return (
    <>
      <div className="bg-base3/75">
        <div className="hidden md:block">
          <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-12 mb-12 max-w-screen-lg mx-auto px-[24px] py-12">
            <div className="sm:w-1/2 flex flex-wrap flex-col justify-center md:justify-start items-center md:items-start pr-4">
              <h1 className="text-base2 text-[40px] md:text-[56px] font-bold font-Montserrat">
                Who we are?
              </h1>
              {/* <h2 className="text-white text-[20px] sm:text-[24px] md:text-[32px] leading-[135%] font-medium">
            Accelerate Your{" "}
            <span className="text-base2 font-bold">Entreprenurship</span>{" "}
            Journry!
          </h2> */}
              <p className="text-white text-[16px] md:text-[20px] leading-[135%] mt-6 text-justify">
              The Technology Pre-Incubation Cell (TPIC) is a student-run initiative designed to nurture and develop early-stage tech ideas and innovations. It serves as a foundational platform for aspiring entrepreneurs, researchers, and students to refine their concepts and transform them into viable business models.

              </p>
              <button className="mt-8 border-2  border-slate-700 hover:border-slate-500 bg-slate-700 hover:bg-slate-500 text-white hover:text-white py-1 sm:py-2 px-8 rounded-xl font-SFProDisplay font-light  text-[12px] sm:text-[16px]">
                <Link to="discover/who-we-are">
                  Get to know more about TPIC &rarr;
                </Link>
              </button>
            </div>
            <div className="sm:w-1/2 flex flex-wrap justify-center items-center">
              <img
                src={rocket}
                alt="statrtup"
                width={1200}
                height={1200}
                className="w-[480px] md"
              />
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-12 mb-12 max-w-screen-lg mx-auto px-[24px] py-12">
            <div className="sm:w-1/2 flex flex-wrap justify-center items-center">
              <img
                src={rocket}
                alt="statrtup"
                width={1200}
                height={1200}
                className="w-[480px] md"
              />
            </div>
            <div className="sm:w-1/2 flex flex-wrap flex-col justify-center md:justify-start items-center md:items-start pl-4">
              <h1 className="text-base2 text-[40px] md:text-[56px] font-bold font-Montserrat">
                Who we are?
              </h1>
              {/* <h2 className="text-white text-[20px] sm:text-[24px] md:text-[32px] leading-[135%] font-medium">
            Accelerate Your{" "}
            <span className="text-base2 font-bold">Entreprenurship</span>{" "}
            Journry!
          </h2> */}
              <p className="text-white text-[16px] md:text-[20px] leading-[135%] mt-6 text-justify">
                The Technology Pre-Incubation Cell (TPIC) is a supportive
                framework designed to nurture and develop early-stage tech ideas
                and innovations. It serves as a foundational platform for
                aspiring entrepreneurs, researchers, and students to refine
                their concepts and transform them into viable business models.
                The cell offers a range of services including mentorship, access
                to resources, and networking opportunities.
              </p>
              <button className="mt-8 border-2  border-slate-700 hover:border-slate-500 bg-slate-700 hover:bg-slate-500 text-white hover:text-white py-1 sm:py-2 px-8 rounded-xl font-SFProDisplay font-light  text-[16px] sm:text-[16px]">
                <Link to="discover/who-we-are">
                  Get to know more about TPIC &rarr;
                </Link>
              </button>
            </div>
          </div>
        </div>
        <WhatWeDo/>
      </div>
    </>
  );
}

export default WhoWeAre;
