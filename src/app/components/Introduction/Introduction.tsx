import React from "react";
import style from "./Introduction.module.scss";
import Button from "../button/Button";

function Introduction() {
  return (
    <>
      <div className={style.introWrapper}>
        <div className={style.profilePic}>
          <img
            className="rotating-img"
            src="https://avatars.githubusercontent.com/u/79654872?s=400&u=a48f399b1fb390b0e6b2a2b75d6e5fb623dcb8e6&v=4"
            alt="Example Image"
          />
        </div>
        <div className={style.intro}>
          <span className={style.heading}>Hi, I'am Ashma. </span>
          <span className={style.paragraph}>
            I am a frontend developer based on New Jesey. I am passionate about
            turning bold visions into pixel-perfect realities.
          </span>
        </div>
        <div className={style.btnGroup}>
          <div className="mr-10">
            <Button name="Contact me" color="white" />
          </div>

          <Button name="My Work" color="black" />
        </div>
      </div>
    </>
  );
}

export default Introduction;
