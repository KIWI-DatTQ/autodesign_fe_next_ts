import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Container from "@components/Container";
import classes from "./Sidebar.module.scss";
import ButtonCustom from "@components/Button";
import {
  BackupTable,
  ImportExport,
  Logout,
  ViewHeadline,
} from "@mui/icons-material";
import DividerCustom from "@components/Divider";
import { logout } from "@utils/auth";
import { useRouter } from "next/router";

type Anchor = "top" | "left" | "bottom" | "right";

const Sidebar: React.FC<{}> = () => {
  const anchor = "left";
  const router = useRouter();

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
      name: "Import File",
      icon: <ImportExport />,
      onClick: () => {
        router.push("/import");
      },
    },
    {
      name: "Table",
      icon: <BackupTable />,
      onClick: () => {
        router.push("/device");
      },
    },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listItem.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            className={classes.listItem}
            onClick={item.onClick}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <DividerCustom />
      <List>
        <ListItem
          className={classes.listItem}
          key={"Logout"}
          disablePadding
          onClick={onLogout}
        >
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
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
