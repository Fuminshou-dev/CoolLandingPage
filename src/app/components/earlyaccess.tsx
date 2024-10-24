"use client";

import React from "react";

function EarlyAccess() {
  return (
    <div className="bg-[#575989] flex flex-col text-white justify-center items-center gap-4 py-12 text-center md:flex-row p-5 md:gap-24">
      <div className="flex flex-2 flex-col gap-2 md:justify-between md:items-start md:text-start md:w-1/2 md:gap-5">
        <h3 className="md:font-bold md:text-3xl">Get early access today</h3>
        <p className="md:text-xl">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <input
          className="border-black w-48 text-black h-8 md:w-72 border rounded-sm px-2 py-1 text-start placeholder-slate-300 text-xs"
          placeholder="email@example.com"
          type="email"
        />
        <button
          onClick={() => alert("Something happens")}
          type="submit"
          className="text-sm text-center flex justify-center items-center bg-blue-600 text-white shadow-md w-48 h-8 rounded-sm"
        >
          Get Started For Free
        </button>
      </div>
    </div>
  );
}

export default EarlyAccess;
