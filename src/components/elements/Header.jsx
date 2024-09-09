import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/c3 copy.png";

function Header() {
  return (
    <>
      <header className="stickry z-50 top-0">
        <nav className="bg-base backdrop-blur-[8px] px-4 lg:px-6 py-2">
          <div className="flex flex-wrap justify-evenly items-center max-w-screen-xl mx-auto">
            <Link to='/' className="flex items-center">
              <img
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-[20px] sm:w-[40px] md:w-[60px] object-cover rounded-full"
              />
            </Link>
            <div className="block sm:hidden">
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
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
