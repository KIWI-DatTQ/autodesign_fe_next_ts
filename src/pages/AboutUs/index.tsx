import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Container from "@components/Container";
import CircleComponent from "./CircleComponent";

const AboutUsComponent: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CircleComponent />
    </Container>
  );
};
export default AboutUsComponent;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      alignItems: "center",
    },
  })
);
