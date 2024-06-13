"use client";

import Image from "next/image";
import Gradient1 from "@/utils/gradient1.svg";
import Play from "@/utils/Play.svg";
import Group35924 from "@/utils/Group35924.svg";
import { useDarkMode } from "@/context/DarkModeProvider";

export const Hero: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative mt-10 md:mt-32 lg:w-[45%]">
      <div className="absolute -top-28 md:-top-40 md:right-20 -z-10">
        <Image
          className="hidden md:block -rotate-180 backdrop-blur-sm"
          src={Gradient1}
          alt="Gradient"
          width={500}
          height={600}
        />
        <Image
          className="hidden md:block -rotate-180 backdrop-blur-sm"
          src={Gradient1}
          alt="Gradient"
          width={350}
          height={600}
        />
      </div>

      <div className="z-50">
        <h1
          className={`text-2xl sm:text-3xl md:text-6xl font-extrabold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Make The Best Financial Decisions
        </h1>
        <p
          className={`py-6 font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex items-center gap-8 pt-8 cursor-pointer">
          <div className="w-auto">
            <button
              className={`text-base rounded-md transition ease transform duration-300 ${
                darkMode ? "bg-white text-black " : "bg-[#000000] text-white"
              } px-7 py-3 md:px-12 md:py-4 hover:bg-[#FF5555]`}
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image className="bg-white rounded-full" src={Play} alt="play" height={30} width={30} />
            <span className={`${darkMode ? "text-white" : "text-black"}`}>
              Watch Video
            </span>
          </div>
        </div>
        <div className="py-16">
          <Image
            className="hidden md:block"
            src={Group35924}
            height={500}
            width={500}
            alt="banner"
          />
          <Image
            className="md:hidden"
            src={Group35924}
            height={400}
            width={300}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};
