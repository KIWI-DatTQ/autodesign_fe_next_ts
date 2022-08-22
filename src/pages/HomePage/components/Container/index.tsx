import { Grid } from "@mui/material";
import React from "react";

interface Props {
  className?: string;
  children: JSX.Element;
}
const Container: React.FC<Props> = (props) => {
  const { children, className } = props;
  return <Grid className={className}>{children}</Grid>;
};
export default Container;
