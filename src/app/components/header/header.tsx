"use client";
import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import image from "../../../../public/1.png";

function Header() {
  return (
    <>
      <div>
        <Image
          className={styles.image}
          src={image}
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
    </>
  );
}

export default Header;
