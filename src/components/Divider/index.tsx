import { Divider, DividerProps } from "@mui/material";
import React from "react";
import classes from "./Divider.module.scss";

const DividerCustom: React.FC<DividerProps> = (props) => {
  return (
    <Divider {...props} className={`${classes.divider} ${props?.className}`} />
  );
};
export default DividerCustom;
