import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

import menu from "../icons/SideNav.svg";
import Image from "next/image";
import SideStyles from "../styles/Sidenav3.module.css";
import DashboardIcon from "../icons/dashboardIcon.svg";
import SettingIcon from "../icons/settingsIcon.svg";
import LogoutIcon from "../icons/logoutIcon.svg";
import CalendarIcon from "../icons/calendarIcon.svg";
import ChatIcon from "../icons/chatIcon.svg";
import SearchIcon from "../icons/searchIcon.svg";
import { signOut } from "next-auth/react";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Image
              src={DashboardIcon.src}
              alt="Dashboard"
              width={25}
              height={25}
            />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image
              src={CalendarIcon.src}
              alt="Calendar"
              width={27}
              height={27}
            />
          </ListItemIcon>
          <ListItemText primary={"Calendar"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image src={ChatIcon.src} alt="Chat" width={27} height={27} />
          </ListItemIcon>
          <ListItemText primary={"Chats"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image
              src={SearchIcon.src}
              alt="Dashboard"
              width={27}
              height={27}
            />
          </ListItemIcon>
          <ListItemText primary={"Search"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image
              src={SettingIcon.src}
              alt="Settings"
              width={27}
              height={27}
            />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItemButton>
      </List>

      <Divider sx={{ color: "#EDF8EB" }} />
      <ListItemButton onClick={() => signOut()}>
        <ListItemIcon>
          <Image src={LogoutIcon.src} alt="Logout" width={27} height={27} />
        </ListItemIcon>
        <ListItemText primary={"Logout"} />
      </ListItemButton>
    </Box>
  );

  return (
    <div>
      <Box>
        <Button onClick={toggleDrawer("left", true)}>
          <Image src={menu.src} alt="done" width={25} height={25} />
        </Button>

        <Drawer
          sx={{ bgcolor: "#E9F3E8" }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </Box>
    </div>
  );
}
