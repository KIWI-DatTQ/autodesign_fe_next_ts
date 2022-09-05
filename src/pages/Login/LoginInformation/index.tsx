import React from "react";
import Container from "@components/Container";
import classes from "./LoginInformation.module.scss";
import { Typography } from "@mui/material";

const LoginInformation = () => {
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
