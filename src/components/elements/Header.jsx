import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/HNBG-new-logo 1.png";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isEventDropDownOpen, setIsEventDropDownOpen] = useState(false); 
  const [isDiscoverDropDownOpen, setIsDiscoverDropDownOpen] = useState(false); 

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const toggleDiscoverDropDown = () => {
    setIsDiscoverDropDownOpen(!isDiscoverDropDownOpen);
  };
  const toggleEventDropDown = () => {
    setIsEventDropDownOpen(!isEventDropDownOpen);
  };

  return (
    <>
      <header className=" sticky z-50 top-0">
        <nav className="bg-base backdrop-blur-[8px] px-4 lg:px-6 py-2">
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
            <div className="block lg:hidden" onClick={toggleSideBar}>
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
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="discover"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
                    }
                  >
                    Discover
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="initiatives"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
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
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
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
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
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
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
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
                          ? "text-base2 font-bold inline-block after:block after:h-1 after:w-full after:bg-base2 after:transition-all after:mt-[10px]"
                          : "text-white font-medium"
                      } hover:text-base2 font-SFProDisplay leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
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
          <ul className="mt-4 font-SFProDisplay text-[16px] font-medium">
            <li className="py-2 px-4">
              <NavLink
                to="discover"
                onClick={toggleDiscoverDropDown}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  } hover:text-base2 lg:p-0`
                }
              >
                Discover
              </NavLink>

              {/* Dropdown options */}
              {isDiscoverDropDownOpen && (
                <ul className=" text-white font-SFProDisplay">
                  <li className="py-1 px-4">
                    <NavLink
                      to="discover/who-we-are"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Who we are?
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="discover/mission-and-vision"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Our Mission and Vision
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="discover/culture"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Culture
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="discover/thrust-areas"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Thrust Areas
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="discover/nodes"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Nodes of TPIC
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="discover/partners-abd-collaborators"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Partners and Collaborators
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="initiatives"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  } hover:text-base2 lg:p-0`
                }
              >
                Initiatives
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="learn"
                onClick={toggleEventDropDown}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  } hover:text-base2 lg:p-0`
                }
              >
                Learn
              </NavLink>

              {/* Dropdown options */}
              {isEventDropDownOpen && (
                <ul className=" text-white font-SFProDisplay">
                  <li className="py-1 px-4">
                    <NavLink
                      to="learn/blogs"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="learn/newsletter"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Newsletter
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="learn/startup-guide"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      StartUp Guide
                    </NavLink>
                  </li>
                  <li className="py-1 px-4">
                    <NavLink
                      to="learn/incubators"
                      onClick={toggleSideBar}
                      className={({ isActive }) =>
                        `block pr-4 pl-3 duration-200 ${
                          isActive ? "text-base2 font-bold" : "text-white"
                        } hover:bg-gray-50 lg:hover:bg-transparent hover:text-base2 lg:p-0`
                      }
                    >
                      Incubators
                    </NavLink>
                  </li>
                  </ul>
              )}
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="events"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  } hover:text-base2 lg:p-0`
                }
              >
                Events
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="gallery"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  } hover:text-base2 lg:p-0`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="connect"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${
                    isActive ? "text-base2 font-bold" : "text-white"
                  } hover:text-base2 lg:p-0`
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
