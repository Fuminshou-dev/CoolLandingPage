import React from "react";
import Logo from "@/app/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="text-black flex items-center justify-between py-3 shadow-md left-0 right-0  px-2 md:px-24 text-center md:p-8 sticky top-0 bg-white/30 backdrop-blur-sm z-10">
      <div className="flex items-center justify-center py-2">
        <Link href={"/"}>
          <Image className="" src={Logo} alt="logo" width={100} />
        </Link>
      </div>
      <div className="flex gap-4 md:gap-12">
        <Link href={"/features"}>Features</Link>
        <Link href={"/team"}>Team</Link>
        <Link href={"/sign-in"}>Sign in</Link>
      </div>
    </div>
  );
}

export default Header;
