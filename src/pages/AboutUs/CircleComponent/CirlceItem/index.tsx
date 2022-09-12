import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Theme, Tooltip } from "@material-ui/core";
import Colors from "@constants/styles/colors";
import Container from "@components/Container";

const CircleItem: React.FC<{
  className: string;
  text?: JSX.Element;
  icon?: JSX.Element;
}> = (props) => {
  const classes = useStyles();
  const { className, text, icon } = props;
  return (
    <Container className={`${classes.container} ${className}`}>
      <Container className={classes.items}>
        {text ? text : <></>}
        <Box>{icon ? icon : <></>}</Box>
      </Container>
    </Container>
  );
};
export default CircleItem;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "absolute",
      cursor: "pointer",
      zIndex: 2,
      width: 100,
      height: 100,
      borderRadius: "100%",
      backgroundColor: Colors.PRIMARY_COLOR.WHITE,
      border: `1px solid ${Colors.PRIMARY_COLOR.BLUE}`,
      justifyContent: "center",
      alignItems: "center",
    },
    items: {
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
