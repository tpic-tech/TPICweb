import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/image.png";

function GalleryHome() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg flex flex-wrap flex-col justify-center items-center text-center md:pt-8 px-6">
        <h1 className="text-[28px] sm:text-[48px] font-SFProDisplay font-bold text-base2 leadining-[135%] tracking-wide">
          Gallery
        </h1>
        <p className=" md:w-[720px] text-[16px] sm:text-[20px] md:-mt-2 font-Montserrat font-medium text-white leadinig-[135%] tracking-tight">
          Cherishing the remarkable and unforgettable moments at TPIC that
          define our journey of innovation and entrepreneurship.
        </p>
        <div className="w-full flex flex-wrap justify-evenly items-center mt-10">
          <div className="flex flex-wrap flex-row">
            <div className="md:w-[33%] ">
              <img
                src={images}
                alt="images"
                width={720}
                height={720}
                className="w-full h-[240px] object-cover"
              />
            </div>
            <div className="md:w-[33%] ">
              <img
                src={images}
                alt="images"
                width={720}
                height={720}
                className="w-full h-[240px] object-cover"
              />
            </div>
            <div className="md:w-[33%] ">
              <img
                src={images}
                alt="images"
                width={720}
                height={720}
                className="w-full h-[240px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-row mt-2">
            <div className="md:w-[33%] ">
              <img
                src={images}
                alt="images"
                width={720}
                height={720}
                className="w-full md:h-[144px] object-cover"
              />
            </div>
            <div className="md:w-[33%] ">
              <div className="flex flex-wrap flex-row">
                <div className="w-1/2">
                  <img
                    src={images}
                    alt="images"
                    width={720}
                    height={720}
                    className="w-full md:h-[144px] object-cover"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={images}
                    alt="images"
                    width={720}
                    height={720}
                    className="w-full md:h-[144px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-[33%] ">
              <div className="flex flex-wrap flex-row">
                <div className="w-3/4">
                  <img
                    src={images}
                    alt="images"
                    width={720}
                    height={720}
                    className="w-full md:h-[144px] object-cover"
                  />
                </div>
                <div className="w-1/4 bg-white flex flex-wrap justify-center items-center hover:bg-white/40 hover:text-white">
                  <Link to="gallery">
                    <button className="w-full text-[14px] font-semibold font-Montserrat tracking-tighter ">
                      <h1>view more &rarr;</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryHome;
