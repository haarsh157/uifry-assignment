"use client";

import Image from "next/image";
import Phone1 from "@/utils/iPhone-13-Pro-Front.svg";
import Phone2 from "@/utils/iPhone-13-Pro-Front1.svg";
import Phone3 from "@/utils/iPhone-13-Pro-Front2.svg";
import Rings from "@/utils/Group35887.svg";
import Group35930 from "@/utils/Group35930.svg";

const Phone = () => {
  return (
    <div className="">
      <div className="hidden lg:block md:relative">
        <Image
          className="absolute top-0 z-40 "
          src={Phone1}
          height={1000}
          width={500}
          alt="phone-1"
        />
        <Image
          className="absolute left-24 top-14 z-30"
          src={Phone2}
          height={800}
          width={500}
          alt="phone-2"
        />
        <Image
          className="absolute left-48 top-28 z-20"
          src={Phone3}
          height={800}
          width={500}
          alt="phone-3"
        />
        <Image
          className="relative top-10 left-36 z-10 "
          src={Rings}
          alt="ring"
          height={800}
          width={600}
        />
        <Image
          className="absolute -bottom-32 right-1 z-0 backdrop:blur-md"
          src={Group35930}
          alt="Gradient"
          width={800}
          height={300}
        />
      </div>
    </div>
  );
};

export default Phone;
