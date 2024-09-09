import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/HNBG-new-logo 1.png";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <header className="stickry z-50 top-0">
        <nav className="bg-base backdrop-blur-[8px] px-4 lg:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-[40px] sm:w-[50px] md:w-[60px] object-cover rounded-full"
              />
            </Link>
            <div className="block sm:hidden" onClick={toggleSideBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0,0,256,256"
                className="cursor-pointer"
              >
                <g
                  fill="#fffffa"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-bold text-[18px] font-SFProDisplay leading-[135%] lg:flex-row lg:space-x-16 lg:mt-0">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%]`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="initiatives"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%]`
                    }
                  >
                    Initiatives
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="learn"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%]`
                    }
                  >
                    Learn
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="events"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%]`
                    }
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="gallery"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%]`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="connect"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%]`
                    }
                  >
                    Connect
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 z-40 w-full pt-10 bg-base text-white transform ${
            isSideBarOpen ? "translate-x-full" : "-translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-between p-4 font-SFProDisplay ">
            <span className="text-lg font-bold text-white">Menu</span>
            <div className="mt-[-60px]">
              <button
                onClick={toggleSideBar}
                className="text-white focus:outline-none"
              >
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="mt-4 font-poppins text-[16px] font-medium">
            <li className="py-2 px-4 ">
              <NavLink
                to="/"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 px-4 ">
              <NavLink
                to="initiatives"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                initiatives
              </NavLink>
            </li>
            <li className="py-2 px-4 ">
              <NavLink
                to="learn"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                Learn
              </NavLink>
            </li>
            <li className="py-2 px-4 ">
              <NavLink
                to="events"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                Events
              </NavLink>
            </li>
            <li className="py-2 px-4 ">
              <NavLink
                to="gallery"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="py-2 px-4 ">
              <NavLink
                to="team"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                Team
              </NavLink>
            </li>
            <li className="py-2 px-4 ">
              <NavLink
                to="connect"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                }
              >
                Connect
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
