"use client";

import Image from "next/image";
import Group35933 from "@/utils/Group35933.svg";
import Star2 from "@/utils/star-05.svg";
import Cube2 from "@/utils/cube-02.svg";
import Cube4 from "@/utils/cube-04.svg";
import Gradient1 from "@/utils/gradient1.svg";

export const Features = () => {
  return (
    <div className="section">
      <div className="flex flex-col lg:flex-row items-center flex-wrap my-5">
        <div className="lg:w-1/2 flex flex-col items-center space-y-4 max-md:w-full z-10">
          <Image
            src={Group35933}
            alt="hero"
            width={550}
            height={550}
            className=" h-full w-full"
          />
        </div>
        <div className="lg:w-1/2 text-left z-10 max-lg:p-5 relative overflow-hidden font-bolder">
          <p className="flex font-medium text-lg mb-4 text-red-500">Features</p>
          <h1 className="text-4xl font-bold mb-8">UiFry Premium</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Image
                src={Star2}
                width={25}
                height={20}
                alt=""
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Budgeting Intervals
              </h3>
            </div>
            <p className="text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Image
                src={Cube2}
                width={25}
                height={20}
                alt=""
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Another Feature</h3>
            </div>
            <p className="text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Image
                src={Cube4}
                width={25}
                height={20}
                alt=""
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Third Feature</h3>
            </div>
            <p className="text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <Image
            src={Gradient1}
            alt="hero"
            width={400}
            height={400}
            className="absolute top-0 -right-48 bg-cover max-lg:hidden rounded-lg"
          />
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
