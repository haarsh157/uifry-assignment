"use client";

import Image from "next/image";
import Group1000002332 from "@/utils/Group1000002332.svg";
import Group35917 from "@/utils/Group35917.svg";
import Gradient1 from "@/utils/gradient1.svg";

const Testimonials = () => {
  return (
    <div>
      <div>
        <p className="text-center text-red-500">Testimonial</p>
        <p className="capitalize text-4xl font-bold text-center">
          what our users <br /> say about us?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center flex-wrap">
        <div className="lg:w-1/2 flex flex-col items-center space-y-4 max-md:w-full z-10">
          <Image
            src={Group1000002332}
            alt="hero"
            width={550}
            height={550}
            className=" h-full w-full"
          />
        </div>

        <div
          className="lg:w-1/2 text-left z-10 max-lg:p-5 relative overflow-hidden px-20"
          id=""
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex justify-center items-center gap-2">
              <h3 className="text-2xl font-semibold mb-4 pt-3">
                The Best Financial According App Ever!
              </h3>
            </div>
            <div></div>
            <p className="max-lg:w-full">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <Image
            src={Group35917}
            width={200}
            height={40}
            alt=""
            className="flex justify-center items-center"
          />
          <div className="flex  gap-2">
            <h3 className="text-lg font-semibold mb-4 pt-3">Nick Jonas</h3>
          </div>
        </div>

        <Image
          src={Gradient1}
          alt="hero"
          width={600}
          height={600}
          className="absolute "
        />
      </div>
    </div>
  );
};

export default Testimonials;
