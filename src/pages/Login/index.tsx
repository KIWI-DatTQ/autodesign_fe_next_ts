import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Colors from "@constants/styles/colors";
import { getToken } from "@utils/auth";
import Container, { ENUM_CONTAINER_DIRECTION } from "@components/Container";
import LoginInformation from "./LoginInformation";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";

const Login = () => {
  const classes = useStyles();
  const router = useRouter();
  const pathname = router.pathname;
  const token = getToken();
  useEffect(() => {
    if (token) {
      router.push("/");
    } else {
      if (pathname !== "/login") {
        router.push("/login");
      }
    }
  }, [pathname, router, token]);

  return (
    <Container className={classes.container}>
      <>
        <Container
          className={classes.login}
          direction={ENUM_CONTAINER_DIRECTION.HORIZONTAL}
        >
          <>
            <LoginInformation />
            <LoginForm />
          </>
        </Container>
        <LoginFooter />
      </>
    </Container>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: Colors.PRIMARY_COLOR.BLUE,
    },
    login: {
      flexGrow: 1,
    },
  })
);
