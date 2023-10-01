"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-between mx-6 my-4 ">
        <div className="">
          <Link href="/">Ashma</Link>
        </div>
        <div className="flex justify-evenly w-1/3 ">
          <Link href="/">About</Link>
          <Link href="/">Project</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className="h-px bg-blue-100 shadow mx-6 mb-4"></div>
    </>
  );
}

export default Header;
