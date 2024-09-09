import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import discover from "../../assets/image.png";
import DiscoverPage from "../../components/important/DiscoverPage";
function Discover() {
  return (
    <>
      <div className="bg-black">
        <div className="">
          <img
            src={discover}
            alt="Discover"
            className="absolute w-full h-[240px] sm:h-[360px] md:h-[420px] object-cover"
          />
          <div className="relative h-[240px] sm:h-[360px] md:h-[420px] bg-gradient-to-b from-black to-base/40 inset-0 flex justify-center sm:justify-center items-center text-center px-[16px]">
            <div class="w-full flex flex-wrap flex-col justify-center items-center text-[#F2F0EF] mx-auto max-w-screen-lg">
              <p className="text-[16px] sm:text-[24px] font-semibold tracking-widest -mb-4 sm:-mb-6">
                GET TO KNOW MORE ABOUT
              </p>
              <h1 className="text-base2 text-[64px] sm:text-[96px] font-bold">
                <span className="tracking-[0.6em]">T</span>
                <span className="tracking-[0.6em]">P</span>
                <span className="tracking-[0.6em]">I</span>C
              </h1>
              <p className="text-white text-[16px] sm:text-[24px] font-semibold tracking-wide -mt-4 sm:-mt-6">
                Technology Pre-Incubation Cell
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-base/60">
          <div className="px-6 py-2 sm:py-4 pb-4 flex flex-wrap max-w-screen-xl justify-evenly mx-auto text-white">
            <div className="w-full overflow-x-auto lg:overflow-visible">
              <ul className="flex mt-4 font-bold text-[16px] font-Montserrat leading-[135%] space-x-4 lg:flex-row lg:space-x-24 lg:mt-0 whitespace-nowrap">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Discover
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="mission-and-vision"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Mission and Vision
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="culture"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Culture
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="thrust-areas"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Thrust Areas
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="nodes"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Nodes of TPIC
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="partners-and-collaborators"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Partners and Collaborators
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      {/* <DiscoverPage /> */}
    </>
  );
}

export default Discover;
