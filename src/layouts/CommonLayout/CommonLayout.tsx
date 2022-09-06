import Container, { ENUM_CONTAINER_DIRECTION } from "@components/Container";
import Sidebar from "@components/Sidebar";
import React from "react";
import Authentication from "../../pages/Authentication";
import classes from "./CommonLayout.module.scss";

export interface Props {
  children: JSX.Element;
}
const CommonLayout: React.FC<Props> = ({ children }) => {
  return (
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
  );
};

export default CommonLayout;
