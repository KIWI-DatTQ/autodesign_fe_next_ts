import { useRouter } from "next/router";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Authentication from "../../pages/Authentication";
import Container, { ENUM_CONTAINER_DIRECTION } from "@components/Container";
import Sidebar from "@components/Sidebar";
export interface Props {
  children: JSX.Element;
}
const CommonLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      {pathname === "/login" ? (
        children
      ) : (
        <Authentication>
          <Container direction={ENUM_CONTAINER_DIRECTION.HORIZONTAL}>
            <>
              <Container className={classes.sidebar}>
                <Sidebar />
              </Container>
              <Container className={classes.container}>
                <>
                  <div className={classes.header}></div>
                  <div className={classes.content}>{children}</div>
                  <div className={classes.footer}></div>
                </>
              </Container>
            </>
          </Container>
        </Authentication>
      )}
    </>
  );
};

export default CommonLayout;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      position: "fixed",
      top: 0,
      left: 0,
    },
    container: {
      overflow: "hidden",
      width: "100vw",
    },
    content: {
      paddingTop: "92px",
      minHeight: "100vh",
    },
    footer: {},
    header: {},
  })
);
