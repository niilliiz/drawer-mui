import React from "react";

import NavList from "../component/navlist/navlist.js";
import { Drawer } from "@mui/material";

const DrawerPermanent = ({ drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      <NavList />
    </Drawer>
  );
};
export default DrawerPermanent;
