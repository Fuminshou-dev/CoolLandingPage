"use client";

import React from "react";
import HeroImage from "@/app/images/illustration-1.svg";
import Image from "next/image";
function Hero() {
  return (
    <div className="my-20 flex flex-col gap-4 md:mx-24">
      <Image
        className="md:w-1/2 md:absolute md:left-2/4"
        src={HeroImage}
        alt="Hero Image"
      />
      <div className="flex flex-col gap-5 px-5 text-center md:relative md:text-start md:w-2/4">
        <h1 className="font-bold text-xl md:text-4xl">
          All your files in one secure location, accesible anywhere.
        </h1>
        <p className="text-sm md:text-xl overflow-clip">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family and
          co-workers.
        </p>
        <div className="flex flex-col gap-4 items-center justify-center md:justify-start md:flex-row">
          <input
            className="border-black w-48 h-8 md:w-72 border rounded-sm px-2 py-1 text-start placeholder-slate-300"
            placeholder="Enter your email..."
            type="email"
          />
          <button
            onClick={() => alert("Something happens")}
            type="submit"
            className="text-sm text-center flex justify-center items-center bg-blue-600 text-white shadow-md w-48 h-8 rounded-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
