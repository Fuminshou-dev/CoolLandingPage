import React from "react";
import Image from "next/image";
import Logo from "@/app/images/logo.svg";
import EmailLogo from "@/app/images/icon-email.svg";
import PhoneLogo from "@/app/images/icon-phone.svg";
import twitterIcon from "@/app/images/twittericon.svg";
import instagramIcon from "@/app/images/instagramicon.svg";
import facebookIcon from "@/app/images/facebookicon.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className=" bg-[#07043b] px-5 pt-10  text-slate-300">
      <button className="py-5 md:px-12">
        <Image
          className="text-white invert-50"
          src={Logo}
          alt="logo"
          width={100}
        />
      </button>
      <div className="flex flex-col md:flex-row md:justify-between pb-5 gap-10 md:px-12 md:items-start">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 text-sm">
            <Image src={PhoneLogo} width={25} alt="Phone icon" />
            <p>
              Phone: <strong className="select-all">+1-543-123-4567</strong>
            </p>
          </div>
          <div className="flex gap-3 text-sm">
            <Image src={EmailLogo} width={25} alt="Email Icon" />
            <strong className="select-all">example@fylo.com</strong>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 text-sm">
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Jobs</Link>
          <Link href={"/"}>Press</Link>
          <Link href={"/"}>Blog</Link>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 text-sm">
          <Link href={"/"}>Contact Us</Link>
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Privacy</Link>
        </div>
        <div className="flex gap-2 justify-center items-center my-5 md:my-0">
          <Link href={"https://github.com/Fuminshou-dev"}>
            <Image
              className="rounded-full invert border p-2  border-black"
              src={twitterIcon}
              width={50}
              alt="Twitter Icon"
            ></Image>
          </Link>
          <Link href={"https://github.com/Fuminshou-dev"}>
            <Image
              className="rounded-full invert filter 0 border p-2  border-black"
              src={facebookIcon}
              width={50}
              alt="Twitter Icon"
            ></Image>
          </Link>
          <Link href={"https://github.com/Fuminshou-dev"}>
            <Image
              className="rounded-full invert border p-2  border-black"
              src={instagramIcon}
              width={50}
              alt="Twitter Icon"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
