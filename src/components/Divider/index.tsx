import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Divider, DividerProps, Theme } from "@material-ui/core";
import Colors from "@constants/styles/colors";

const DividerCustom: React.FC<DividerProps> = (props) => {
  const classes = useStyles();
  return (
    <Divider {...props} className={`${classes.divider} ${props?.className}`} />
  );
};
export default DividerCustom;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      borderColor: Colors.PRIMARY_COLOR.BLACK,
    },
  })
);
