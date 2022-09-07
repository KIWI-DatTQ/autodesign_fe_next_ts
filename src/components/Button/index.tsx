import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { Button, ButtonProps } from "@material-ui/core";
import Colors from "@constants/styles/colors";
import FontSize from "@constants/styles/font-size";

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Button {...props} className={`${classes.button} ${props?.className}`} />
  );
};
export default ButtonCustom;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: "10px",
      backgroundColor: Colors.PRIMARY_COLOR.BLUE,
      height: "50px",
      width: "100%",
      padding: "10px",
      fontSize: FontSize.PRIMARY_FONT.SM,
      color: Colors.PRIMARY_COLOR.WHITE,
    },
  })
);
