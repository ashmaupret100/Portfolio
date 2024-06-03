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
          <span>Hi, I'am Ashma.</span>
          <span>
            I am afrontend developer based on New Jesey. I am passionate about
            turning bold visions into pixel-perfect realities.
          </span>
        </div>
      </div>
      <div>sliders</div>
      <Button name="Contact me" color="black" />
    </>
  );
}

export default Introduction;
