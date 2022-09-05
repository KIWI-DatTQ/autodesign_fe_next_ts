import { Link, LinkProps } from "@mui/material";
import React from "react";
import classes from "./Link.module.scss";

const LinkCustom: React.FC<LinkProps> = (props) => {
  return <Link {...props} className={`${classes.link} ${props?.className}`} />;
};
export default LinkCustom;
