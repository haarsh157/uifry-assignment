"use client";

import Image from "next/image";
import Apple from "@/utils/Apple.svg";
import Gradient1 from "@/utils/gradient1.svg";
import Star7 from "@/utils/Star7.svg";
import Star2 from "@/utils/Star2.svg";
import Eleft from "@/utils/Eleft.png";
import Iphones from "@/utils/iphones.svg";

const Download = () => {
  return (
    <div className=" relative lg:mx-0  mx-4 flex lg:block justify-center items-center lg:p-48">
      <Image
        className=" absolute  -left-[200px] top-0 lg:top-auto lg:scale-100 scale-75"
        src={Gradient1}
        alt=""
      />

      <div className="relative mt-48 rounded-xl bg-primary-black lg:w-full w-[425px] min-h-[508px] text-primary-white flex lg:flex-row flex-col bg-black text-white shadow-lg">
        {" "}
        {/* Stars */}
        <Image
          className=" absolute bottom-[100px] left-[450px]"
          src={Star7}
          alt=""
        />
        <Image
          className=" absolute -left-[150px] top-[120px]"
          src={Star2}
          alt=""
        />
        <Image
          className=" absolute lg:-right-[130px] -top-[120px] right-20 lg:scale-100 scale-75"
          src={Star2}
          alt=""
        />
        <Image
          className=" absolute right-[320px] top-4 lg:scale-100 scale-75"
          src={Star7}
          alt=""
        />
        {/* Left */}
        <div className=" w-[62%] relative  h-[508px] justify-center gap-5  pl-20 flex flex-col">
          <Image
            className=" re absolute lg:-bottom-0 lg:left-[0] -bottom-[466px] -left-[30px] lg:scale-100 scale-75"
            src={Eleft}
            alt=""
          />
          <h1 className="  font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] capitalize  leading-none">
            ready to get started?
          </h1>
          <p className="  capitalize [word-spacing:5px] leading-relaxed lg:text-[18px]">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className=" bg-primary-white  flex text-primary-black w-[208px] h-[60px] rounded-md  items-center justify-center gap-2 relative  hover:bg-primary-red ease-linear transition-all lg:scale-100 scale-90 lg:ml-0 -ml-3 bg-white text-black hover:bg-[#FF5555]">
            <span className=" mt-[2px] font-[ClashDisplay-Medium] lg:text-[18px] ">
              Download App
            </span>
            <Image className=" scale-90" src={Apple} alt="" />
          </button>
        </div>
        {/* Right */}
        <div className=" relative">
          <Image
            className=" absolute left-[20px] lg:scale-100 scale-75  top-4"
            src={Gradient1}
            alt=""
          />
          <Image
            className="lg:mt-8 
             pb-20 lg:pb-0 relative w-[425px]"
            src={Iphones}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
