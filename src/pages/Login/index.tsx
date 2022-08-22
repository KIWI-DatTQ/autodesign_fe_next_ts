import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Container from "../HomePage/components/Container";
import className from "./Login.module.scss";

const Login = () => {
  const router = useRouter();
  const pathname = router.pathname;
  useEffect(() => {
    if (pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router]);

  return (
    <Container className={className.container}>
      <>
        <Grid item className={className.informationTextFieldGroup}>
          <Typography component="span">Username: </Typography>
          <TextField />
        </Grid>
        <Grid item className={className.informationTextFieldGroup}>
          <Typography component="span">Password: </Typography>
          <TextField />
        </Grid>
      </>
    </Container>
  );
};

export default Login;
