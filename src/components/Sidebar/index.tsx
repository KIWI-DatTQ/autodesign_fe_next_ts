import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Colors from "@constants/styles/colors";
import FontSize from "@constants/styles/font-size";
import TextBold from "@constants/styles/text-bold";
import Container from "@components/Container";
import ButtonCustom from "@components/Button";
import {
  ImportExport,
  ViewHeadline,
  Tablet,
  ExitToApp,
  MenuBook,
  Business,
} from "@material-ui/icons";
import DividerCustom from "@components/Divider";
import { logout } from "@utils/auth";
import { useRouter } from "next/router";

type Anchor = "top" | "left" | "bottom" | "right";

const Sidebar: React.FC<{}> = () => {
  const anchor = "left";
  const router = useRouter();
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const onLogout = () => {
    logout();
    router.push("/login");
  };

  const listItem = [
    {
      name: "Introduction",
      icon: <MenuBook />,
      onClick: () => {
        router.push("/introduction");
      },
    },
    {
      name: "Import File",
      icon: <ImportExport />,
      onClick: () => {
        router.push("/import");
      },
    },
    {
      name: "Table",
      icon: <Tablet />,
      onClick: () => {
        router.push("/device");
      },
    },
    {
      name: "About Us",
      icon: <Business />,
      onClick: () => {
        router.push("/aboutus");
      },
    },
  ];

  const list = (anchor: Anchor) => (
    <Box
      className={classes.sidebar}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listItem.map((item) => (
          <ListItem
            key={item.name}
            disableGutters
            className={classes.listItem}
            onClick={item.onClick}
          >
            <ButtonCustom className={classes.button}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ButtonCustom>
          </ListItem>
        ))}
      </List>
      <DividerCustom />
      <List>
        <ListItem
          className={classes.listItem}
          key={"Logout"}
          disableGutters
          onClick={onLogout}
        >
          <ButtonCustom className={classes.button}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ButtonCustom>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container>
      <>
        <React.Fragment key={anchor}>
          <ButtonCustom
            className={classes.buttonSidebar}
            onClick={toggleDrawer(anchor, true)}
          >
            <ViewHeadline />
          </ButtonCustom>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      </>
    </Container>
  );
};
export default Sidebar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      width: 250,
    },
    buttonSidebar: {
      backgroundColor: Colors.PRIMARY_COLOR.BLUE,
      borderRadius: "0 10px 10px 0",
      marginTop: "20px",
      height: "50px",
      width: "50px",
    },
    listItem: {
      "& span": {
        color: Colors.PRIMARY_COLOR.BLACK,
        fontWeight: TextBold.PRIMARY_BOLD.BASE,
        fontSize: FontSize.PRIMARY_FONT.SM,
      },
    },
    button: {
      backgroundColor: Colors.PRIMARY_COLOR.WHITE,
    },
  })
);
