import React from 'react'
import rocket from "../../assets/TPIC_logo-removebg-preview.png"
function ContentAwaited() {
  return (
    <>
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] flex flex-wrap flex-col justify-center items-center px-4 ">
        <img
          src={rocket}
          alt="Content Awaited"
          height={240}
          width={240}
          className="w-[120px] object-cover "
        />
        <div className="flex flex-wrap justify-center flex-col mx-auto  -z-10">
          <h1 className="text-center font-poppins text-[36px] font-bold text-base2">
            Content Comming Soon!
          </h1>
          <h2 className="text-center font-poppins text-[20px] font-medium text-white">
            We are working on something amazing. Stay Tuned!
          </h2>
          <p className="text-center font-poppins text-[14px] text-white/40">Why the Wait? We’re committed to quality and want to ensure that every piece of content we share meets our high standards. We’re currently crafting this section to provide you with valuable insights and resources. Our team is dedicated to delivering top-notch content that will enhance your experience and knowledge. This section will be filled with informative and engaging material soon.</p>
        </div>
      </div>
    </>
  )
}

export default ContentAwaited