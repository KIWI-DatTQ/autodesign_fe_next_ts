import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography, Theme } from "@material-ui/core";
import Container from "@components/Container";
import FontSize from "@constants/styles/font-size";
import TextBold from "@constants/styles/text-bold";

const LoginInformation = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <>
        <Typography component="span" className={classes.spanTitle}>
          AutoDesign
        </Typography>
        <Typography component="span" className={classes.spanDescription}>
          AutoDesign Description
        </Typography>
      </>
    </Container>
  );
};

export default LoginInformation;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      flexShink: 1,
      flexBasis: 0,
      padding: "30px",
      justifyContent: "center",
      alignItems: "center",
    },
    spanTitle: {
      fontSize: FontSize.PRIMARY_FONT.LG,
      fontWeight: TextBold.PRIMARY_BOLD.BASE,
    },
    spanDescription: {
      fontSize: FontSize.PRIMARY_FONT.BASE,
    },
  })
);
