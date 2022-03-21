import React from "react";

import styles from "./styles";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function TopBar() {
  return (
    <Box sx={styles.topBar}>
      <AppBar position="fixed" color="transparent" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EasyDev
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
