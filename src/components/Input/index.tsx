import { Input, InputProps } from "@mui/material";
import React from "react";
import classes from "./Input.module.scss";

const InputCustom: React.FC<InputProps> = (props) => {
  return (
    <Input
      disableUnderline={true}
      {...props}
      className={`${classes.input} ${props?.className}`}
    />
  );
};
export default InputCustom;
