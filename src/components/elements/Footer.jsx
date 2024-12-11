import React from "react";
import logo from "../../assets/c3 copy.png";
import collegeLogo from "../../../src/assets/HNBG-new-logo 1.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-base w-full mt-[40px] sm:mt-[80px] px-6">
        <div className="mx-auto max-w-screen-xl pt-10 pb-10">
          <div className="flex flex-wrap justify-between mx-auto gap-8 grid-flow-row">
            <nav className="mb-4">
              <div>
                <h2 className="text-base2 font-Montserrat font-bold text-[16px] sm:text-[20px] mb-2">
                  Connect with us
                </h2>
                {/* <img
              src={logo}
              alt="logo"
              width={240}
              height={240}
              className="w-[60px] sm:w-[80px] md:w-[120px] object-cover border-2 border-base2 rounded-full m-2"
            /> */}
                <h2 className="text-white font-Montserrat text-[14px] sm:text-[16px] font-semibold leading-[135%]">
                  Technology Pre-Incubation Cell
                </h2>
                <p className="text-white font-Montserrat text-[14px] sm:text-[16px] font-semibold leading-[135%]">
                  Hemvati Nandan Bahuguna Garhwal University, <br /> 1st Floor, USIC Building, Chauras
                  Campus, <br /> Srinagar (Garhwal), Uttarakhand-246174
                </p>
              </div>
            </nav>
            <nav className="mb-4">
              <h2 className="text-base2 font-Montserrat font-bold text-[16px] sm:text-[20px] mb-2">
                Discover
              </h2>
              <ul className="text-white font-Montserrat text-[14px] sm:text-[16px] font-medium leading-[135%]">
                <li>
                  <NavLink
                    to="discover/mission-and-vision"
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
                    to="events"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="initiatives"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Initiatives
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="gallery"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="learn"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Learn
                  </NavLink>
                </li>
              </ul>
            </nav>
            <nav className="mb-4">
              <h2 className="text-base2 font-Montserrat font-bold text-[16px] sm:text-[20px] mb-2">
                Important Links
              </h2>
              <ul className="text-white font-Montserrat text-[14px] sm:text-[16px] font-medium leading-[135%]">
                <li>
                  <NavLink
                    to="discover/who-we-are"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Who we are?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="discover/thrust-areas"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    How TPIC works
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="team"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Meet the Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="discover/partners-and-collaborators"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Partners and Collaborators
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="connect"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <nav className="mb-4">
              <h2 className="text-base2 font-Montserrat font-bold text-[16px] sm:text-[20px] mb-2">
                Follow us on
              </h2>
              <ul className="text-white font-Montserrat text-[14px] sm:text-[16px] font-medium leading-[135%]">
                <li className="hover:text-base2">
                  <a href="">Facebook</a>
                </li>
                <li className="hover:text-base2">
                  <a href="">Instagram</a>
                </li>
                <li className="hover:text-base2">
                  <a href="">Twitter</a>
                </li>
                <li className="hover:text-base2">
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" flex flex-wrap flex-col justify-center items-center text-center mt-8">
            <a href="https://www.hnbgu.ac.in/">
              <img
                src={collegeLogo}
                alt="College Logo"
                width={100}
                height={100}
                className="flex w-[32px] sm:w-[48px] object-cover rounded-full mb-2"
              />
            </a>
            <h3 className="text-white/50 font-Montserrat text-[12px] font-semibold leading-[135%]">
              Copyright 2024 TPIC HNBGU. All Rights Reserved
            </h3>
            <h3 className="text-white/50 font-Montserrat text-[12px] font-semibold leading-[135%]">
              Designed and Developed by TPIC Tech Team
            </h3>
            <h3 className="text-white/50 font-Montserrat text-[12px] font-semibold leading-[100%] mt-4 ">
              Credits:  <br /> <span className="font-bold text-white">Dr. Alok Negi </span> (Logo Design) <br /> <span className="font-bold text-white">Graphikx Studio </span> (UI Design)
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
