import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import menu from "../icons/SideNav.svg"
import Image from "next/image";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: "#91BF76" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
       
          <ListItem key={"text"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
             
              </ListItemIcon>
              <ListItemText primary={"text"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"thtd"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary={"text"} />
            </ListItemButton>
          </ListItem>
            


       

      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer("left", true)}    >
          <Image
                src={menu.src}
                alt="done"
                width={25}
                height={25}
              />

          </Button>
          
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
