import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Input, InputProps, Theme } from "@material-ui/core";
import FontSize from "@constants/styles/font-size";
import Colors from "@constants/styles/colors";

const InputCustom: React.FC<InputProps> = (props) => {
  const classes = useStyles();
  return (
    <Input
      disableUnderline={true}
      {...props}
      className={`${classes.input} ${props?.className}`}
    />
  );
};
export default InputCustom;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: "10px",
      backgroundColor: Colors.PRIMARY_COLOR.WHITE,
      height: "50px",
      padding: "10px",
      fontSize: FontSize.PRIMARY_FONT.SM,
      border: `1px solid ${Colors.PRIMARY_COLOR.BLACK}`,
    },
  })
);
