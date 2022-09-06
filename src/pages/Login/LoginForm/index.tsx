import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "@components/Container";
import classes from "./LoginForm.module.scss";
import Input from "@components/Input";
import ButtonCustom from "@components/Button";
import LinkCustom from "@components/Link";
import DividerCustom from "@components/Divider";
import Const from "@constants/index";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onLogin = () => {
    if (
      username === Const.ACCOUNT_DRAFT.username &&
      password === Const.ACCOUNT_DRAFT.password
    ) {
      localStorage.setItem("token", `${username}/${password}`);
      router.push("/");
    }
  };
  const onChangeUsername = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.loginForm}>
        <>
          <Input
            placeholder="Username"
            value={username}
            onChange={onChangeUsername}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <ButtonCustom className={classes.buttonLogin} onClick={onLogin}>
            Login
          </ButtonCustom>
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
