import React from "react";
import Authentication from "../../pages/Authentication";
import classes from "./CommonLayout.module.scss";

export interface Props {
  children: JSX.Element;
}
const CommonLayout: React.FC<Props> = ({ children }) => {
  return (
    <Authentication>
      <div className={classes.container}>
        <div className={classes.header}></div>
        <div className={classes.content}>{children}</div>
        <div className={classes.footer}></div>
      </div>
    </Authentication>
  );
};

export default CommonLayout;
