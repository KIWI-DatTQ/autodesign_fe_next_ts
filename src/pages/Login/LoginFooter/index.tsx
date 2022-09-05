import React from "react";
import Container from "@components/Container";
import classes from "./LoginFooter.module.scss";
import { Typography } from "@mui/material";

const LoginFooter = () => {
  return (
    <Container className={classes.container}>
      <Typography component="span" className={classes.powered}>Powered by Kiwi-universe</Typography>
    </Container>
  );
};

export default LoginFooter;
