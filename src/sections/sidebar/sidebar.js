import React from "react";

import { Box } from "@mui/material";

import DrawerPermanent from "./permanent-drawer/drawer-permanent";
import DrawerTemp from "./temporary-drawer/drawer-temp";

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <DrawerPermanent drawerWidth={drawerWidth} />
      <DrawerTemp
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
};
export default SideBar;
