import React from "react";
import Container from "@components/Container";
import classes from "./LoginForm.module.scss";
import Input from "@components/Input";
import ButtonCustom from "@components/Button";
import LinkCustom from "@components/Link";
import DividerCustom from "@components/Divider";

const LoginForm = () => {
  return (
    <Container className={classes.container}>
      <Container className={classes.loginForm}>
        <>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password"/>
          <ButtonCustom className={classes.buttonLogin}>Login</ButtonCustom>
          <LinkCustom underline="hover" className={classes.link}>
            Forgot Password?
          </LinkCustom>
          <DividerCustom />
          <ButtonCustom className={classes.buttonRegister}>
            Register
          </ButtonCustom>
        </>
      </Container>
    </Container>
  );
};

export default LoginForm;
