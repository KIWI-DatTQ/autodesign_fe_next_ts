import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link, LinkProps, Theme } from "@material-ui/core";
import Colors from "@constants/styles/colors";
import FontSize from "@constants/styles/font-size";
import TextBold from "@constants/styles/text-bold";

const LinkCustom: React.FC<LinkProps> = (props) => {
  const classes = useStyles();
  return <Link {...props} className={`${classes.link} ${props?.className}`} />;
};
export default LinkCustom;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: Colors.PRIMARY_COLOR.BLUE,
      fontSize: FontSize.PRIMARY_FONT.SM,
      fontWeight: TextBold.PRIMARY_BOLD.LG,
    },
  })
);
