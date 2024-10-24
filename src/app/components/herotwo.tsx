import React from "react";
import HeroLogo from "@/app/images/illustration-2.svg";
import Image from "next/image";
import RightArrow from "@/app/images/icon-arrow.svg";
import Quotes from "@/app/images/icon-quotes.svg";
import KyleBurtenImage from "@/app/images/avatar-testimonial.jpg";
import background from "@/app/images/bg-curve-desktop.svg";
import backgroundPhone from "@/app/images/bg-curve-mobile.svg";
import Link from "next/link";

function Herotwo() {
  return (
    <div className="relative md:pb-6">
      <Image
        src={HeroLogo}
        alt="Hero logo"
        className="md:w-1/2 md:absolute md:left-1/2"
      />
      <div className="p-3 text-sm flex flex-col gap-3 my-10 relative md:px-24 md:mt-96">
        <h2 className="text-center md:text-left md:text-4xl font-bold">
          Stay productive, wherever you are
        </h2>
        <div className="flex flex-col md:items-start">
          <div className="text-start text-sm flex flex-col gap-3 md:text-lg md:w-1/2 text-slate-500">
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of you file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 my-6 text-green-500 underline underline-offset-8">
            <Link href={"/explanation"} className="flex">
              See how Fylo works
              <Image src={RightArrow} alt="Right Arrow Icon" width={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:items-start md:w-1/3 shadow-xl mx-3 p-5 gap-5 rounded-lg">
          <div className="p-2 text-start">
            <Image src={Quotes} alt="Quotes svg" height={20} />
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="flex flex-row gap-3 ml-2">
            <Image
              src={KyleBurtenImage}
              height={60}
              width={60}
              className="rounded-full"
              alt="Kyle Burton Image"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold">Kyle Burton</p>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herotwo;
