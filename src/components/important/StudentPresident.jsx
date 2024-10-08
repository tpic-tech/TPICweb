import React from "react";
import coordinator from "../../assets/aayushi.jpeg";
import analyst from "../../assets//rahul.jpg";

function StudentPresident() {
  return (
    <div className="flex flex-wrap w-full mx-auto  justify-center items-center mb-16 ">
      <p className="text-base3 font-semibold text-[16px] sm:text-[18px] mb-8">
        Core Members
      </p>
      <div className="flex flex-wrap gap-8 sm:gap-16 w-full mx-auto  justify-center items-center">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img
            src={analyst}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-[120px] sm:w-[160px] rounded-md mb-2 "
          />
          <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
            Rahul Singh
          </p>
          <p className="text-base font-semibold text-[14px] sm:text-[16px] -mt-1">
            Reseach Assistant
          </p>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img
            src={coordinator}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-[120px] sm:w-[160px] rounded-md mb-2 "
          />
          <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
            Aayushi uniyal
          </p>
          <p className="text-base font-semibold text-[14px] sm:text-[16px] -mt-1">
            Student Head
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentPresident;
