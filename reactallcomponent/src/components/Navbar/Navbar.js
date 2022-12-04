import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarListItems } from "../consts/navbarItems";
import { useParams, useNavigate } from "react-router";

const Navbar = () => {
  const drawerWidth = 240;
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar which contains Toolbar */}
      <AppBar
        position="fixed" //fixed position
        // sx means style, style App par
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} //start from location after drawer
      >
        {/* Tool bar */}
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer: Side Bar with width*/}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box" 
          },
        }}
        // always available
        variant="permanent"
        anchor="left"
      >
        {/* Start from below Appbar toolbar, so add one Toolbar */}
        <Toolbar />

        <Divider />
        {/* Get list of items from constant as array, array has 2 element, map is key and index */}
        <List>
          {mainNavbarListItems.map((text, index) => (
            <ListItem button key={text.id}>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
