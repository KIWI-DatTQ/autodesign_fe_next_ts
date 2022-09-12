import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Theme } from "@material-ui/core";

export const ENUM_CONTAINER_DIRECTION = {
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL",
};

interface Props {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  direction?: string;
}

const Container: React.FC<Props> = (props) => {
  const { children, className, direction } = props;
  const classes = useStyles();
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
    },
    containerVertical: {
      flexDirection: "column",
    },
    containerHorizontal: {
      flexDirection: "row",
    },
  })
);
