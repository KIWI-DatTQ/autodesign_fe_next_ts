import { Grid } from "@mui/material";
import React from "react";
import classes from "./Container.module.scss";

export const ENUM_CONTAINER_DIRECTION = {
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL",
};

interface Props {
  className?: string;
  children: JSX.Element;
  direction?: string;
}

const Container: React.FC<Props> = (props) => {
  const { children, className, direction } = props;
  const classRoot =
    direction === ENUM_CONTAINER_DIRECTION.HORIZONTAL
      ? classes.containerHorizontal
      : classes.containerVertical;
  return (
    <Grid className={`${classes.container} ${classRoot} ${className}`}>
      {children}
    </Grid>
  );
};
export default Container;
