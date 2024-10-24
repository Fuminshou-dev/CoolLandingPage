import Image from "next/image";
import React from "react";
import notFoundImage from "@/app/images/CHILL.jpeg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black w-full h-screen flex text-white justify-center items-center">
      <Link
        href={"/"}
        className="flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-2xl text-white ">
          There is <strong className="text-red-600 font-bold">no page </strong>
          on this route
        </h1>
        <Image
          className="rounded-full"
          src={notFoundImage}
          width={200}
          alt="Go Back"
        ></Image>

        <p className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white shadow-none focus:ring-4 text-base focus:ring-blue-300 font-medium rounded-3xl px-7 py-3 focus:outline-none dark:focus:ring-blue-800">
          Go back
        </p>
      </Link>
    </div>
  );
}
