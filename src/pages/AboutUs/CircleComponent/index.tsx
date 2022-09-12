import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Theme } from "@material-ui/core";
import Colors from "@constants/styles/colors";
import CircleItem from "./CirlceItem";
import Container from "@components/Container";
import { Build, Business, PhotoLibrary } from "@material-ui/icons";
import KiwiLogo from "../../../img/KiwiUniverse_Logo.png";
import Image from "next/image";

const CircleComponent: React.FC<{}> = () => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <CircleItem
        className={styles.item1}
        icon={<Business fontSize="large" />}
        text={
          <Box
            className={styles.text}
            style={{
              top: -50,
            }}
          >
            ADVANCED TECHNOLOGIES
          </Box>
        }
      />
      <CircleItem
        className={styles.item2}
        icon={<Build fontSize="large" />}
        text={
          <Box
            className={styles.text}
            style={{
              left: -190,
            }}
          >
            SOFTWARE PRODUCT
          </Box>
        }
      />
      <CircleItem
        className={styles.item4}
        icon={<PhotoLibrary fontSize="large" />}
        text={
          <Box
            className={styles.text}
            style={{
              right: -140,
            }}
          >
            GO TO LIBARY
          </Box>
        }
      />
      <Container className={styles.circle}>
        <Image src={KiwiLogo} alt="KiwiLogo" />
      </Container>
    </Container>
  );
};
export default CircleComponent;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      width: 550,
      height: 550,
    },
    circle: {
      position: "absolute",
      borderRadius: "100%",
      width: 500,
      height: 500,
      border: 1,
      borderStyle: "solid",
      borderColor: Colors.PRIMARY_COLOR.BLUE,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    item1: {
      top: -25,
      left: 225,
    },
    item2: {
      top: 400,
      left: 25,
    },
    item3: {
      top: 75,
      right: 25,
    },
    item4: {
      top: 400,
      right: 25,
    },
    text: {
      position: "absolute",
      whiteSpace: "nowrap",
    },
  })
);
