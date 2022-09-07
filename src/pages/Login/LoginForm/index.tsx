import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Container from "@components/Container";
import Input from "@components/Input";
import ButtonCustom from "@components/Button";
import LinkCustom from "@components/Link";
import DividerCustom from "@components/Divider";
import Const from "@constants/index";
import Colors from "@constants/styles/colors";

const LoginForm = () => {
  const classes = useStyles();
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
    loginForm: {
      rowGap: "10px",
      borderRadius: "10px",
      padding: "30px",
      width: "100%",
      minWidth: "500px",
      backgroundColor: Colors.PRIMARY_COLOR.WHITE,
    },
    buttonLogin: {
      marginTop: "25px",
    },
    buttonRegister: {
      backgroundColor: Colors.PRIMARY_COLOR.GREEN,
      width: "50%",
      alignSelf: "center",
    },
    link: {
      alignSelf: "center",
    },
  })
);
