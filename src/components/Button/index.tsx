import { Button, ButtonProps } from "@mui/material";
import React from "react";
import classes from "./Button.module.scss";

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${classes.button} ${props?.className}`} />
  );
};
export default ButtonCustom;
