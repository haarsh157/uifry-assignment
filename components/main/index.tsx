"use client";

import React from "react";
import { Hero } from "./hero";
import Phone from "./phone";

export const Main: React.FC = () => {
  return (
    <div className="md:flex md:flex-row flex-col px-3 md:px-5 lg:px-0 mx-auto justify-center ">
      <Hero />
      <Phone />
    </div>
  );
};
