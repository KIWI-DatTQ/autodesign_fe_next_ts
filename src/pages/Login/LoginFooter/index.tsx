import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography, Theme } from "@material-ui/core";
import Container from "@components/Container";
import TextBold from "@constants/styles/text-bold";

const LoginFooter = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography component="span" className={classes.powered}>
        Powered by Kiwi-universe
      </Typography>
    </Container>
  );
};

export default LoginFooter;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      alignItems: "center",
    },
    powered: {
      fontWeight: TextBold.PRIMARY_BOLD.LG,
    },
  })
);
