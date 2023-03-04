import React from "react";

import NavList from "../component/navlist/navlist.js";

import { Drawer } from "@mui/material";

const DrawerTemp = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <NavList />
    </Drawer>
  );
};
export default DrawerTemp;
