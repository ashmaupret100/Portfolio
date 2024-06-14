import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  name: string;
  color: "black" | "white";
}

const Button: React.FC<ButtonProps> = ({ name, color }) => {
  const buttonClass = cn({
    [styles.blackButton]: color === "black",
    [styles.whiteButton]: color === "white",
  });
  return (
    <div className={styles.buttonWrapper}>
      <button className={buttonClass}>{name}</button>
    </div>
  );
};

export default Button;
