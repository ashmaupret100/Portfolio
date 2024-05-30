"use client";
import Link from "next/link";
import React, { useRef } from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <>
      <div className="flex justify-between mx-6 my-4 ">
        <div>
          <Link href="/" className={styles.title}>
            Ashma
          </Link>
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
