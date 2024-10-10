import React from "react";
import ContentAwaited from "../../components/elements/ContentAwaited";
import logo from "../../assets/TPIC_logo-removebg-preview.png"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Connect() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-12 px-6 mb-20">
        <div className="w-full  flex flex-wrap flex-col sm:flex-row justify-center items-center bg-slate-800 border-2 border-slate-300 rounded-xl px-4 pt-12 pb-16">
          <div className="w-full flex flex-wrap justify-center items-center flex-col">
            <img src={logo}  alt="Technology Pre-Incubation Cell" className="w-[96px] sm:w-[120px]" />
            <h2 className="text-center font-semibold font-Montserrat text-[18px] sm:text-[24px] text-base3 mt-4">
              Technology Pre-Incubation Cell <br /> HNBGU Srinagar
            </h2>
          </div>
          <div className='text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg '></div>
          <div className=" flex flex-wrap justify-center items-center flex-col">
            <h1 className="text-center font-semibold font-Montserrat text-[18px] sm:text-[24px] text-base2 mt-4 sm:mt-8">
              Address
            </h1>
            <p className="text-center font-medium font-Montserrat text-[16px] sm:text-[18px] text-white mt-2 ">
              Technology Pre-Incubation Cell (TPIC) Office,  USIC Building, Chauras Campus, Hemvati Nandan Bahuguna Garhwal University, Srinagar (Garhwal) Uttarakhand-246174
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center flex-col">
            <h1 className="text-center font-semibold font-Montserrat text-[18px] sm:text-[24px] text-base2 mt-8 sm:mt-12">
              Contact Us
            </h1>
            <p className="text-center font-normal font-Montserrat text-[14px] text-white mt-2 ">
              +917060846801 (Rahul Singh, Research Assistent) <br />
              +917668162645 (Aayushi Uniyal, Student Head) <br />
              +918271964681 (Ravi Kumar, Technicology Develooment) <span className="text-white/60 font-Montserrat text-[12px]">* For Website related issues</span>
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center flex-col">
          <h1 className="text-center font-semibold font-Montserrat text-[18px] sm:text-[24px] text-base2 mt-4 sm:mt-8">
              Follow us on
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-[20px] sm:text-[24px] text-center mt-2">
            <a href="#" className="text-base3 hover:text-base3/60"><FaLinkedin/></a>
            <a href="#" className="text-base3 hover:text-base3/60"><RiInstagramFill/></a>
            <a href="#" className="text-base3 hover:text-base3/60"><FaTwitter/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
