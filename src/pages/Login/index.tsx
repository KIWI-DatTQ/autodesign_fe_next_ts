import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Container, { ENUM_CONTAINER_DIRECTION } from "@components/Container";
import classes from "./Login.module.scss";
import LoginInformation from "./LoginInformation";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import { getToken } from "@utils/auth";

const Login = () => {
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
