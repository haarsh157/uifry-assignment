"use client";

import Image from "next/image";
import Group35933 from "@/utils/Group35933.svg";
import Bell from "@/utils/Bell.svg";
import Gradient1 from "@/utils/gradient1.svg";
import Group35937 from "@/utils/Group35937.svg";

const Advantages = () => {
  return (
    <div className="section">
      <div className="flex flex-col lg:flex-row flex-wrap  mx-auto md:px-28">
        <div className="lg:w-1/2 text-left z-10 max-lg:p-5 relative overflow-hidden px-10 mt-20">
          <p className="flex font-bold text-lg mb-4 text-red-500">ADVANTAGES</p>
          <h1 className="text-4xl font-bold mb-8">Why Choose Uifry?</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={Bell}
                width={25}
                height={20}
                alt=""
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Clever Notifications
              </h3>
            </div>
            <div></div>
            <p className="max-w-full leading-relaxed">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        <Image
          src={Gradient1}
          alt="hero"
          width={600}
          height={600}
          className="absolute right-96"
        />
        <div className="lg:w-1/2 flex flex-col items-center space-y-4 max-md:w-full z-10">
          <Image
            src={Group35933}
            alt="hero"
            width={550}
            height={550}
            className=" h-full w-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center flex-wrap ">
        <div className="lg:w-1/2 flex flex-col items-center space-y-4 max-md:w-full z-10">
          <Image
            src={Group35937}
            alt="hero"
            width={550}
            height={550}
            className="hidden md:block h-full w-full"
          />
        </div>

        <div className="lg:w-1/2 text-left z-10 max-lg:p-5 relative overflow-hidden px-20">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Image
                src={Bell}
                width={25}
                height={20}
                alt=""
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
            </div>
            <p className="leading-relaxed">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        <Image
          src={Gradient1}
          alt="hero"
          width={600}
          height={600}
          className="absolute hidden md:block"
        />
      </div>
    </div>
  );
};

export default Advantages;
